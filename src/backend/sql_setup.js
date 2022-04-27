var mysql = require("mysql2");
var con = mysql.createConnection({
  host: "localhost",
  user: "me",
  password: "secret",
  database: "online_blood_system",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
const donors1 =
  "CREATE TABLE donor1 ( \
d_id INT AUTO_INCREMENT PRIMARY KEY, \
d_name VARCHAR(40),  \
d_address VARCHAR(80), \
d_email VARCHAR(50), \
d_phone VARCHAR(11), \
d_dob VARCHAR(80), \
d_btype VARCHAR(5), \
d_gender VARCHAR(2), \
d_disease VARCHAR(80) \
);";
const donors2 =
  " CREATE TABLE donor2 ( \
d_pwrd VARCHAR(20), \
d_email VARCHAR(50) \
);";
const recepients =
  " CREATE TABLE recipient1 ( \
r_id INT AUTO_INCREMENT PRIMARY KEY, \
r_name VARCHAR(40),  \
r_address VARCHAR(80), \
r_email VARCHAR(50), \
r_phone VARCHAR(11), \
r_dob VARCHAR(80), \
r_btype VARCHAR(5), \
r_gender VARCHAR(2), \
r_disease VARCHAR(80) \
);";
const recipients2 =
  " CREATE TABLE recipient2 ( \
re_pwrd VARCHAR(20), \
re_email VARCHAR(50) \
);";
const blood_don =
  "CREATE TABLE blood_don ( \
bd_id INT AUTO_INCREMENT PRIMARY KEY,\
bd_donorid INT, \
bd_date varchar(80), \
bd_quantity INT, \
CONSTRAINT w FOREIGN KEY(bd_donorid) REFERENCES donor1(d_id)\
);";
const blood_trans =
  "CREATE TABLE blood_trans1 ( \
bt_transacid INT AUTO_INCREMENT PRIMARY KEY, \
bt_bloodid INT, \
bt_recepient INT,\
bt_status INT,\
CONSTRAINT v FOREIGN KEY(bt_recepient) REFERENCES recipient1(r_id),\
CONSTRAINT u FOREIGN KEY(bt_bloodid) REFERENCES blood_don(bd_id)\
);";
const blood_trans2 =
  "CREATE TABLE blood_trans2 ( \
bt_transacid INT UNIQUE, \
bt_date varchar(80), \
bt_quantity INT, \
bt_donorid INT, \
bt_bloodid INT, \
CONSTRAINT h FOREIGN KEY(bt_transacid) REFERENCES blood_trans1(bt_transacid)\
);";
const blood_trans3 =
  "CREATE TABLE blood_trans3 (\
bt_btype VARCHAR(5), \
bt_donorid INT, \
CONSTRAINT t FOREIGN KEY(bt_donorid) REFERENCES donor1(d_id)\
);";
const admin1 =
  "CREATE TABLE admin ( \
a_id INT AUTO_INCREMENT PRIMARY KEY, \
a_name VARCHAR(40),  \
a_email VARCHAR(50),\
a_phone VARCHAR(11) \
);";
const admin2 =
  "CREATE TABLE admin2 ( \
a_email VARCHAR(50), \
a_pwrd VARCHAR(20) \
);";
// con.query("CREATE DATABASE online_blood_system", (err, result) => {
//   if (err) throw err;
// });

con.query(admin2, function (err, result) {
  if (err) throw err;
  console.log("Database created");
});
con.query(admin1, function (err, result) {
  if (err) throw err;
  console.log("Database created");
});
con.query(donors1, function (err, result) {
  if (err) throw err;
  console.log("Database created");
});
con.query(donors2, function (err, result) {
  if (err) throw err;
  console.log("Database created");
});
con.query(recipients2, function (err, result) {
  if (err) throw err;
  console.log("Database created");
});
con.query(recepients, function (err, result) {
  if (err) throw err;
  console.log("Database created");
});
con.query(blood_don, function (err, result) {
  if (err) throw err;
  console.log("Database created");
});
con.query(blood_trans, function (err, result) {
  if (err) throw err;
  console.log("Database created");
});
con.query(blood_trans2, function (err, result) {
  if (err) throw err;
  console.log("Database created");
});
con.query(blood_trans3, function (err, result) {
  if (err) throw err;
  console.log("Database created");
});
