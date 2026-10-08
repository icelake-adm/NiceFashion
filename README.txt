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
