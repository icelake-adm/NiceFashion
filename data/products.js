/* Managed by the control panel. "new":true = show on site ; "out":true = sold out ; "feat":true = featured */
const CATEGORIES=[
 {
  "key": "shirts",
  "label": "Shirts",
  "bn": "শার্ট"
 },
 {
  "key": "tshirts",
  "label": "T-Shirts",
  "bn": "টি-শার্ট"
 },
 {
  "key": "polo",
  "label": "Polo",
  "bn": "পোলো"
 },
 {
  "key": "panjabi",
  "label": "Panjabi",
  "bn": "পাঞ্জাবি"
 },
 {
  "key": "jeans",
  "label": "Jeans",
  "bn": "জিন্স"
 },
 {
  "key": "pants",
  "label": "Pants / Chinos",
  "bn": "প্যান্ট"
 },
 {
  "key": "trousers",
  "label": "Trousers",
  "bn": "ট্রাউজার"
 },
 {
  "key": "jackets",
  "label": "Jackets & Hoodies",
  "bn": "জ্যাকেট/হুডি"
 },
 {
  "key": "fatua",
  "label": "Fatua & Casual",
  "bn": "ফতুয়া"
 },
 {
  "key": "accessories",
  "label": "Private Items",
  "bn": "গোপনীয় জিনিস"
 }
];
const PRODUCTS=[
{"id":"shirts-01","name":"Premium Black Shirt","cat":"shirts","price":750,"sizes":["M","L","XL","XXL"],"new":true,"old":950,"desc":"","out":false,"colors":["Sage Green","Black","Magenta","White","Grey"],"more":[],"img":"assets/images/shirts/shirts-01.jpg"},
{"id":"shirts-02","name":"Blue-Grey Classic Shirt","cat":"shirts","price":750,"sizes":["M","L","XL","XXL"],"new":true,"old":950,"desc":"","out":false,"more":[],"img":"assets/images/shirts/shirts-02.jpg"},
{"id":"shirts-03","name":"Maroon Party Shirt","cat":"shirts","price":0,"sizes":["M","L","XL","XXL"],"new":true,"more":[],"img":"assets/images/shirts/shirts-03.jpg"},
{"id":"shirts-04","name":"Maroon Classic Shirt","cat":"shirts","price":0,"sizes":["M","L","XL","XXL"],"new":true,"more":[],"img":"assets/images/shirts/shirts-04.jpg"},
{"id":"shirts-05","name":"Bottle Green Shirt","cat":"shirts","price":0,"sizes":["M","L","XL","XXL"],"new":true,"more":[],"img":"assets/images/shirts/shirts-05.jpg"},
{"id":"shirts-06","name":"Navy Textured Shirt","cat":"shirts","price":0,"sizes":["M","L","XL","XXL"],"new":true,"more":[],"img":"assets/images/shirts/shirts-06.jpg"},
{"id":"shirts-07","name":"Shirts Style 07","cat":"shirts","price":0,"sizes":["M","L","XL","XXL"],"new":false,"more":[],"img":"assets/images/shirts/shirts-07.jpg"},
{"id":"shirts-08","name":"Shirts Style 08","cat":"shirts","price":0,"sizes":["M","L","XL","XXL"],"new":false,"more":[],"img":"assets/images/shirts/shirts-08.jpg"},
{"id":"tshirts-01","name":"V-Neck T-Shirt (Sand)","cat":"tshirts","price":0,"sizes":["M","L","XL","XXL"],"new":true,"more":[],"img":"assets/images/tshirts/tshirts-01.jpg"},
{"id":"tshirts-02","name":"V-Neck Drop Shoulder (Black)","cat":"tshirts","price":0,"sizes":["M","L","XL","XXL"],"new":true,"more":[],"img":"assets/images/tshirts/tshirts-02.jpg"},
{"id":"tshirts-03","name":"Streetwear Graphic Tee","cat":"tshirts","price":0,"sizes":["M","L","XL","XXL"],"new":true,"more":[],"img":"assets/images/tshirts/tshirts-03.jpg"},
{"id":"tshirts-04","name":"Olive Print Tee","cat":"tshirts","price":0,"sizes":["M","L","XL","XXL"],"new":true,"more":[],"img":"assets/images/tshirts/tshirts-04.jpg"},
{"id":"tshirts-05","name":"Black Premium T-Shirt","cat":"tshirts","price":0,"sizes":["M","L","XL","XXL"],"new":true,"more":[],"img":"assets/images/tshirts/tshirts-05.jpg"},
{"id":"tshirts-06","name":"Black Leaf Print Tee","cat":"tshirts","price":0,"sizes":["M","L","XL","XXL"],"new":true,"more":[],"img":"assets/images/tshirts/tshirts-06.jpg"},
{"id":"tshirts-07","name":"T-Shirts Style 07","cat":"tshirts","price":0,"sizes":["M","L","XL","XXL"],"new":false,"more":[],"img":"assets/images/tshirts/tshirts-07.jpg"},
{"id":"tshirts-08","name":"T-Shirts Style 08","cat":"tshirts","price":0,"sizes":["M","L","XL","XXL"],"new":false,"more":[],"img":"assets/images/tshirts/tshirts-08.jpg"},
{"id":"polo-01","name":"Grey Polo","cat":"polo","price":0,"sizes":["M","L","XL","XXL"],"new":true,"more":[],"img":"assets/images/polo/polo-01.jpg"},
{"id":"polo-02","name":"Rose Colour-Block Polo","cat":"polo","price":0,"sizes":["M","L","XL","XXL"],"new":true,"more":[],"img":"assets/images/polo/polo-02.jpg"},
{"id":"polo-03","name":"Polo Style 03","cat":"polo","price":0,"sizes":["M","L","XL","XXL"],"new":false,"more":[],"img":"assets/images/polo/polo-03.jpg"},
{"id":"polo-04","name":"Polo Style 04","cat":"polo","price":0,"sizes":["M","L","XL","XXL"],"new":false,"more":[],"img":"assets/images/polo/polo-04.jpg"},
{"id":"polo-05","name":"Polo Style 05","cat":"polo","price":0,"sizes":["M","L","XL","XXL"],"new":false,"more":[],"img":"assets/images/polo/polo-05.jpg"},
{"id":"panjabi-01","name":"Panjabi Slab Button Match","cat":"panjabi","price":0,"sizes":["38","40","42","44"],"new":true,"more":[],"img":"assets/images/panjabi/panjabi-01.jpg"},
{"id":"panjabi-02","name":"Panjabi Style 02","cat":"panjabi","price":0,"sizes":["38","40","42","44"],"new":false,"more":[],"img":"assets/images/panjabi/panjabi-02.jpg"},
{"id":"panjabi-03","name":"Panjabi Style 03","cat":"panjabi","price":0,"sizes":["38","40","42","44"],"new":false,"more":[],"img":"assets/images/panjabi/panjabi-03.jpg"},
{"id":"panjabi-04","name":"Panjabi Style 04","cat":"panjabi","price":0,"sizes":["38","40","42","44"],"new":false,"more":[],"img":"assets/images/panjabi/panjabi-04.jpg"},
{"id":"panjabi-05","name":"Panjabi Style 05","cat":"panjabi","price":0,"sizes":["38","40","42","44"],"new":false,"more":[],"img":"assets/images/panjabi/panjabi-05.jpg"},
{"id":"panjabi-06","name":"Panjabi Style 06","cat":"panjabi","price":0,"sizes":["38","40","42","44"],"new":false,"more":[],"img":"assets/images/panjabi/panjabi-06.jpg"},
{"id":"jeans-01","name":"Light Wash Baggy Jeans","cat":"jeans","price":0,"sizes":["30","32","34","36"],"new":true,"more":[],"img":"assets/images/jeans/jeans-01.jpg"},
{"id":"jeans-02","name":"Dark Grey Baggy Jeans","cat":"jeans","price":0,"sizes":["30","32","34","36"],"new":true,"more":[],"img":"assets/images/jeans/jeans-02.jpg"},
{"id":"jeans-03","name":"Jeans Style 03","cat":"jeans","price":0,"sizes":["30","32","34","36"],"new":false,"more":[],"img":"assets/images/jeans/jeans-03.jpg"},
{"id":"jeans-04","name":"Jeans Style 04","cat":"jeans","price":0,"sizes":["30","32","34","36"],"new":false,"more":[],"img":"assets/images/jeans/jeans-04.jpg"},
{"id":"jeans-05","name":"Jeans Style 05","cat":"jeans","price":0,"sizes":["30","32","34","36"],"new":false,"more":[],"img":"assets/images/jeans/jeans-05.jpg"},
{"id":"pants-01","name":"Pants / Chinos Style 01","cat":"pants","price":0,"sizes":["30","32","34","36"],"new":false,"more":[],"img":"assets/images/pants/pants-01.jpg"},
{"id":"pants-02","name":"Pants / Chinos Style 02","cat":"pants","price":0,"sizes":["30","32","34","36"],"new":false,"more":[],"img":"assets/images/pants/pants-02.jpg"},
{"id":"pants-03","name":"Pants / Chinos Style 03","cat":"pants","price":0,"sizes":["30","32","34","36"],"new":false,"more":[],"img":"assets/images/pants/pants-03.jpg"},
{"id":"pants-04","name":"Pants / Chinos Style 04","cat":"pants","price":0,"sizes":["30","32","34","36"],"new":false,"more":[],"img":"assets/images/pants/pants-04.jpg"},
{"id":"trousers-01","name":"Trousers Style 01","cat":"trousers","price":0,"sizes":["30","32","34","36"],"new":false,"more":[],"img":"assets/images/trousers/trousers-01.jpg"},
{"id":"trousers-02","name":"Trousers Style 02","cat":"trousers","price":0,"sizes":["30","32","34","36"],"new":false,"more":[],"img":"assets/images/trousers/trousers-02.jpg"},
{"id":"trousers-03","name":"Trousers Style 03","cat":"trousers","price":0,"sizes":["30","32","34","36"],"new":false,"more":[],"img":"assets/images/trousers/trousers-03.jpg"},
{"id":"jackets-01","name":"Jackets & Hoodies Style 01","cat":"jackets","price":0,"sizes":["M","L","XL","XXL"],"new":false,"more":[],"img":"assets/images/jackets/jackets-01.jpg"},
{"id":"jackets-02","name":"Jackets & Hoodies Style 02","cat":"jackets","price":0,"sizes":["M","L","XL","XXL"],"new":false,"more":[],"img":"assets/images/jackets/jackets-02.jpg"},
{"id":"jackets-03","name":"Jackets & Hoodies Style 03","cat":"jackets","price":0,"sizes":["M","L","XL","XXL"],"new":false,"more":[],"img":"assets/images/jackets/jackets-03.jpg"},
{"id":"fatua-01","name":"Fatua & Casual Style 01","cat":"fatua","price":0,"sizes":["M","L","XL","XXL"],"new":false,"more":[],"img":"assets/images/fatua/fatua-01.jpg"},
{"id":"fatua-02","name":"Fatua & Casual Style 02","cat":"fatua","price":0,"sizes":["M","L","XL","XXL"],"new":false,"more":[],"img":"assets/images/fatua/fatua-02.jpg"},
{"id":"fatua-03","name":"Fatua & Casual Style 03","cat":"fatua","price":0,"sizes":["M","L","XL","XXL"],"new":false,"more":[],"img":"assets/images/fatua/fatua-03.jpg"},
{"id":"fatua-04","name":"Fatua & Casual Style 04","cat":"fatua","price":0,"sizes":["M","L","XL","XXL"],"new":false,"more":[],"img":"assets/images/fatua/fatua-04.jpg"},
{"id":"accessories-01","name":"Accessories Style 01","cat":"accessories","price":0,"sizes":["Free Size"],"new":false,"more":[],"img":"assets/images/accessories/accessories-01.jpg"},
{"id":"accessories-02","name":"Accessories Style 02","cat":"accessories","price":0,"sizes":["Free Size"],"new":false,"more":[],"img":"assets/images/accessories/accessories-02.jpg"},
{"id":"accessories-03","name":"Accessories Style 03","cat":"accessories","price":0,"sizes":["Free Size"],"new":false,"more":[],"img":"assets/images/accessories/accessories-03.jpg"},
{"id":"accessories-04","name":"Accessories Style 04","cat":"accessories","price":0,"sizes":["Free Size"],"new":false,"more":[],"img":"assets/images/accessories/accessories-04.jpg"}
];
