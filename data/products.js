/* Managed by admin.html. Image = assets/images/<cat>/<id>.jpg ; "new":true = show on site ; "out":true = sold out */
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
  "label": "Accessories",
  "bn": "এক্সেসরিজ"
 }
];
const PRODUCTS=[
{"id":"shirts-01","name":"Premium Black Shirt","cat":"shirts","price":750,"sizes":["M","L","XL","XXL"],"new":true,"old":950,"desc":"","out":false},
{"id":"shirts-02","name":"Blue-Grey Classic Shirt","cat":"shirts","price":750,"sizes":["M","L","XL","XXL"],"new":true,"old":950,"desc":"","out":false},
{"id":"shirts-03","name":"Maroon Party Shirt","cat":"shirts","price":0,"sizes":["M","L","XL","XXL"],"new":true},
{"id":"shirts-04","name":"Maroon Classic Shirt","cat":"shirts","price":0,"sizes":["M","L","XL","XXL"],"new":true},
{"id":"shirts-05","name":"Bottle Green Shirt","cat":"shirts","price":0,"sizes":["M","L","XL","XXL"],"new":true},
{"id":"shirts-06","name":"Navy Textured Shirt","cat":"shirts","price":0,"sizes":["M","L","XL","XXL"],"new":true},
{"id":"shirts-07","name":"Shirts Style 07","cat":"shirts","price":0,"sizes":["M","L","XL","XXL"],"new":false},
{"id":"shirts-08","name":"Shirts Style 08","cat":"shirts","price":0,"sizes":["M","L","XL","XXL"],"new":false},
{"id":"tshirts-01","name":"V-Neck T-Shirt (Sand)","cat":"tshirts","price":0,"sizes":["M","L","XL","XXL"],"new":true},
{"id":"tshirts-02","name":"V-Neck Drop Shoulder (Black)","cat":"tshirts","price":0,"sizes":["M","L","XL","XXL"],"new":true},
{"id":"tshirts-03","name":"Streetwear Graphic Tee","cat":"tshirts","price":0,"sizes":["M","L","XL","XXL"],"new":true},
{"id":"tshirts-04","name":"Olive Print Tee","cat":"tshirts","price":0,"sizes":["M","L","XL","XXL"],"new":true},
{"id":"tshirts-05","name":"Black Premium T-Shirt","cat":"tshirts","price":0,"sizes":["M","L","XL","XXL"],"new":true},
{"id":"tshirts-06","name":"Black Leaf Print Tee","cat":"tshirts","price":0,"sizes":["M","L","XL","XXL"],"new":true},
{"id":"tshirts-07","name":"T-Shirts Style 07","cat":"tshirts","price":0,"sizes":["M","L","XL","XXL"],"new":false},
{"id":"tshirts-08","name":"T-Shirts Style 08","cat":"tshirts","price":0,"sizes":["M","L","XL","XXL"],"new":false},
{"id":"polo-01","name":"Grey Polo","cat":"polo","price":0,"sizes":["M","L","XL","XXL"],"new":true},
{"id":"polo-02","name":"Rose Colour-Block Polo","cat":"polo","price":0,"sizes":["M","L","XL","XXL"],"new":true},
{"id":"polo-03","name":"Polo Style 03","cat":"polo","price":0,"sizes":["M","L","XL","XXL"],"new":false},
{"id":"polo-04","name":"Polo Style 04","cat":"polo","price":0,"sizes":["M","L","XL","XXL"],"new":false},
{"id":"polo-05","name":"Polo Style 05","cat":"polo","price":0,"sizes":["M","L","XL","XXL"],"new":false},
{"id":"panjabi-01","name":"Panjabi Slab Button Match","cat":"panjabi","price":0,"sizes":["38","40","42","44"],"new":true},
{"id":"panjabi-02","name":"Panjabi Style 02","cat":"panjabi","price":0,"sizes":["38","40","42","44"],"new":false},
{"id":"panjabi-03","name":"Panjabi Style 03","cat":"panjabi","price":0,"sizes":["38","40","42","44"],"new":false},
{"id":"panjabi-04","name":"Panjabi Style 04","cat":"panjabi","price":0,"sizes":["38","40","42","44"],"new":false},
{"id":"panjabi-05","name":"Panjabi Style 05","cat":"panjabi","price":0,"sizes":["38","40","42","44"],"new":false},
{"id":"panjabi-06","name":"Panjabi Style 06","cat":"panjabi","price":0,"sizes":["38","40","42","44"],"new":false},
{"id":"jeans-01","name":"Light Wash Baggy Jeans","cat":"jeans","price":0,"sizes":["30","32","34","36"],"new":true},
{"id":"jeans-02","name":"Dark Grey Baggy Jeans","cat":"jeans","price":0,"sizes":["30","32","34","36"],"new":true},
{"id":"jeans-03","name":"Jeans Style 03","cat":"jeans","price":0,"sizes":["30","32","34","36"],"new":false},
{"id":"jeans-04","name":"Jeans Style 04","cat":"jeans","price":0,"sizes":["30","32","34","36"],"new":false},
{"id":"jeans-05","name":"Jeans Style 05","cat":"jeans","price":0,"sizes":["30","32","34","36"],"new":false},
{"id":"pants-01","name":"Pants / Chinos Style 01","cat":"pants","price":0,"sizes":["30","32","34","36"],"new":false},
{"id":"pants-02","name":"Pants / Chinos Style 02","cat":"pants","price":0,"sizes":["30","32","34","36"],"new":false},
{"id":"pants-03","name":"Pants / Chinos Style 03","cat":"pants","price":0,"sizes":["30","32","34","36"],"new":false},
{"id":"pants-04","name":"Pants / Chinos Style 04","cat":"pants","price":0,"sizes":["30","32","34","36"],"new":false},
{"id":"trousers-01","name":"Trousers Style 01","cat":"trousers","price":0,"sizes":["30","32","34","36"],"new":false},
{"id":"trousers-02","name":"Trousers Style 02","cat":"trousers","price":0,"sizes":["30","32","34","36"],"new":false},
{"id":"trousers-03","name":"Trousers Style 03","cat":"trousers","price":0,"sizes":["30","32","34","36"],"new":false},
{"id":"jackets-01","name":"Jackets & Hoodies Style 01","cat":"jackets","price":0,"sizes":["M","L","XL","XXL"],"new":false},
{"id":"jackets-02","name":"Jackets & Hoodies Style 02","cat":"jackets","price":0,"sizes":["M","L","XL","XXL"],"new":false},
{"id":"jackets-03","name":"Jackets & Hoodies Style 03","cat":"jackets","price":0,"sizes":["M","L","XL","XXL"],"new":false},
{"id":"fatua-01","name":"Fatua & Casual Style 01","cat":"fatua","price":0,"sizes":["M","L","XL","XXL"],"new":false},
{"id":"fatua-02","name":"Fatua & Casual Style 02","cat":"fatua","price":0,"sizes":["M","L","XL","XXL"],"new":false},
{"id":"fatua-03","name":"Fatua & Casual Style 03","cat":"fatua","price":0,"sizes":["M","L","XL","XXL"],"new":false},
{"id":"fatua-04","name":"Fatua & Casual Style 04","cat":"fatua","price":0,"sizes":["M","L","XL","XXL"],"new":false},
{"id":"accessories-01","name":"Accessories Style 01","cat":"accessories","price":0,"sizes":["Free Size"],"new":false},
{"id":"accessories-02","name":"Accessories Style 02","cat":"accessories","price":0,"sizes":["Free Size"],"new":false},
{"id":"accessories-03","name":"Accessories Style 03","cat":"accessories","price":0,"sizes":["Free Size"],"new":false},
{"id":"accessories-04","name":"Accessories Style 04","cat":"accessories","price":0,"sizes":["Free Size"],"new":false}
];
