NICE FASHION website v6.0 - see CHANGELOG.txt for the version history.

NICE FASHION website  (open index.html)

SETTINGS  : config.js  (WhatsApp number, social links, payment on/off, popup on/off + text)
PRODUCTS  : data/products.js  (name, price, sizes). price 0 = "ask on WhatsApp"
IMAGES    : assets/images/<folder>/<same-file-name>.jpg  -> replace the file, keep the SAME NAME, site updates.
            Each placeholder shows its size (products 800x1000). Save as .jpg (QR: bangla-qr.png).
            Folders: shirts, tshirts, polo, panjabi, jeans, pants, trousers, jackets, fatua, accessories,
                     categories, hero, banners, about, gallery (12), payment, popup
OPTIONAL  : popup -> popup:false in config.js, or rename popup.js to _popup.js
            payment page -> payment:false in config.js (menu link hides)
NEW ITEM  : add one line in data/products.js and put its image at assets/images/<cat>/<id>.jpg

BLACK THEME: premium black/gold. hidePlaceholders:true shows only products with "new":true in data/products.js.
  When a real photo is ready: replace the image (same name) AND set "new":true on that product line. "out":true = Sold out.
CHECKOUT : customer enters name/phone/address, picks delivery area + payment (COD, bKash, Nagad, Bangla QR); order goes to WhatsApp.
  Set deliveryDhaka/deliveryOutside, bkash, nagad in config.js (current values are SAMPLES).

ADMIN PANEL: open admin.html on your live site (GitHub Pages). Connect once with GitHub username, repo, branch and a token
  (GitHub > Settings > Developer settings > Fine-grained tokens > only this repo > Contents: Read and write).
  Edit products (name, price, old price, description, sizes, photo, sold out), settings and site photos, then tap Publish.
  Site updates 1-2 minutes after publish. Never share the token.

ADMIN v2 (admin.html): tabs = Products, Categories, Pages, Settings, Images.
  Products: name, category, price, old price (discount shown), sizes, colors, description, featured, sold out, main + extra photos.
  Categories: add / rename / reorder / hide / delete, cover photo.
  Pages: publish / unpublish, rename, reorder, edit texts, add NEW pages (shown in menu automatically, link: page.html?p=<slug>).
  Settings: contact, delivery, payment, offer, showroom, home sections on/off, theme colors.
  Images: hero, banner, about, popup, Bangla QR, gallery.
UPDATING an existing live site: upload ONLY the files in nice-fashion-update.zip (do NOT upload config.js or data/products.js,
  they hold your live settings and products).

ONLINE SELLING SWITCH (Admin > Settings, top): OFF = no payment, no Cash on Delivery, no delivery. Customers check availability on WhatsApp and visit the showroom.
  ON = cart with delivery + payment (COD / bKash / Nagad / Bangla QR, each can still be switched in Settings).
  The update files switch the site to OFF as soon as they are uploaded (until you turn it ON in admin).
ABOUT PAGE INFO: Admin > Pages > About > Edit content (founder, shop/office address, open/close time, off days, office hours). Phone and email come from Settings.
  Leave a field empty to hide that row. Founder photo: Admin > Images.
GOOGLE MAP: Google Maps > find your shop > Share > Embed a map > copy the code > paste in Admin > Settings > google map embed. Shows on Home and Contact.
UPDATE FILES: upload only the files in nice-fashion-update.zip (index.html, about.html, contact.html, app.js, style.css, admin.html).

PUBLISH = ONE COMMIT: admin.html now sends all changes (texts, photos, deletions) in a single GitHub commit, so GitHub Pages runs one build per Publish.
  Admin > Images shows the repository size (GitHub recommends staying under about 1 GB). Photos over ~600 KB after resizing show a warning.
  GitHub Pages limits (free): site up to 1 GB, soft 100 GB bandwidth per month, soft 10 builds per hour. Check GitHub's current Pages terms for commercial use.

CONTROL PANEL v3 (admin.html): redesigned like the Origo control panel: Dashboard, Products, Categories, Pages, Settings, Site photos, Manual.
  Row cards with labelled Up / Down / Delete buttons, photo previews, "N unsaved changes" status and a Save & Publish bar.
  Products can now be reordered. Log in once ("Remember on this device"), then open /admin.html on your live site.
  User manual: the Manual tab inside the panel (Bengali) plus the separate Word/PDF manual document.
UPDATE: upload only admin.html (nice-fashion-update.zip) over the old one. Do not touch config.js or data files.

PAYMENT UPDATE (2026-10-19): Control panel > Payment (and a button on the Dashboard): ON/OFF.
  OFF = customers only talk to you on WhatsApp (availability / inquiry). ON = Checkout page (checkout.html) with bKash QR photo, bKash number + payment link,
  Bangla QR photo, optional Nagad / Cash on Delivery, optional Transaction ID (TrxID) in the WhatsApp order message, and a thank-you screen with the payment details.
  QR photos: assets/images/payment/bkash-qr.png and assets/images/payment/bangla-qr.png (upload them in Payment; they are not shipped as placeholders).
  Control panel > Backup: download / restore a backup file (products, categories, pages, texts, settings); auto-download before every Save.
  Cart modal now only lists items; the form moved to checkout.html. Upload checkout.html with the update files.

PHOTO PREVIEW FIX: admin.html now loads existing photos through the GitHub API with your token (works from the phone file manager, private repos and any domain).

v5.0 UPLOAD NOTES: upload the files in Nice-Fashion-Website-5_0-update-code-only.zip. It includes data/store.js (a NEW file, first install of v5.0 only; do not upload it again later because the panel keeps it up to date),
  festival.html, product.html, policy.html, 404.html, sitemap.xml, robots.txt and the new assets/images/festival/guide.jpg. It never contains config.js, data/products.js or data/site.js.
  Orders to Google Sheet: see Orders-Code.gs. Own domain: see DOMAIN-SETUP.txt.
