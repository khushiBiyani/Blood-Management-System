// var mysql = require("mysql2");
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "me",
//   password: "secret",
//   database: "online_blood_system",
// });
// con.query(
//   "INSERT INTO admin (a_name,a_email,a_phone) VALUES ("Admin","abc@gmail.com","1234567890");",
//   (err, rows) => {
//     con.query(
//       "INSERT INTO admin2 (a_email,a_pwrd) VALUES ("abc@gmail.com","password")",
//       (err, rows) => {
//         if (err) throw err;
//       }
//     );
//   }
// );
// // admin@gmail.com
// // password

var mysql = require("mysql2");
var con = mysql.createConnection({
  host: "localhost",
  user: "me",
  password: "secret",
  database: "online_blood_system",
});
con.query(
  "INSERT INTO admin (a_name,a_email,a_phone) VALUES (?,?,?);",
  ["Admin", "admin@gmail.com", "1000000"],
  (err, rows) => {
    con.query(
      "INSERT INTO admin2 (a_email,a_pwrd) VALUES (?,?)",
      ["admin@gmail.com", "password"],
      (err, rows) => {}
    );
  }
);
// admin@gmail.com
// password
