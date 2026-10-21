/**
 * NICE FASHION - order sheet (Google Apps Script)  v5.0
 * Saves every order / inquiry sent from the website into a Google Sheet.
 * SETUP:
 *  1) Create a Google Sheet (any name). Extensions > Apps Script. Paste this file, Save.
 *  2) Optional: set NOTIFY_EMAIL below to get an email for every new order.
 *  3) Deploy > New deployment > type "Web app": Execute as "Me", Who has access "Anyone". Deploy and copy the /exec URL.
 *  4) Control panel > Settings > "Order sheet link": paste the /exec URL, then Save & Publish.
 * The website sends the data in the background; WhatsApp still opens as before.
 */
var NOTIFY_EMAIL = '';        // e.g. 'you@gmail.com' (leave empty for no email)
var SHEET_NAME   = 'Orders';
var MAX_PER_MIN  = 30;        // simple flood limit

function doPost(e) {
  try {
    var lock = LockService.getScriptLock(); lock.waitLock(10000);
    var cache = CacheService.getScriptCache(), k = 'n' + Math.floor(Date.now() / 60000);
    var n = Number(cache.get(k) || 0) + 1; cache.put(k, String(n), 120);
    if (n > MAX_PER_MIN) { lock.releaseLock(); return ContentService.createTextOutput('busy'); }
    var d = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) {
      sh.appendRow(['Time', 'Ref', 'Type', 'Name', 'Phone', 'Address', 'Items', 'Subtotal', 'Coupon', 'Discount', 'Delivery', 'Total', 'Payment', 'TrxID', 'Status']);
      sh.setFrozenRows(1);
    }
    var items = (d.items || []).map(function (i) {
      return i.name + ' (' + i.id + ') ' + (i.size || '') + (i.color ? '/' + i.color : '') + ' x' + (i.qty || 1);
    }).join('\n');
    sh.appendRow([new Date(), clean(d.ref), clean(d.mode), clean(d.name), "'" + clean(d.phone), clean(d.address), items,
      num(d.subtotal), clean(d.coupon), num(d.discount), num(d.delivery), num(d.total), clean(d.payment), clean(d.trx), 'New']);
    lock.releaseLock();
    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(NOTIFY_EMAIL, 'New ' + clean(d.mode) + ' ' + clean(d.ref),
        'Name: ' + clean(d.name) + '\nPhone: ' + clean(d.phone) + '\n\n' + items + '\n\nTotal: ' + num(d.total));
    }
    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('error');
  }
}
function clean(v) { return String(v == null ? '' : v).slice(0, 500); }
function num(v) { return Number(v) || 0; }
