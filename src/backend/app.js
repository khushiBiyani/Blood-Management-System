// PASSWORD-
const http = require("http");
const url = require("url");
const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
var db = mysql.createConnection({
  host: "localhost",
  user: "me",
  password: "secret",
  database: "online_blood_system",
});
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
app.use(
  express.urlencoded({
    extended: true,
  })
);
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

app.post("/register/recipient", (req, res) => {
  var {
    r_name,
    r_address,
    r_email,
    r_phone,
    r_dob,
    r_btype,
    r_gender,
    r_disease,
    r_pwrd,
  } = req.body;
  let sql_p = `INSERT INTO recipient1 (r_name,r_address,r_email,r_phone,r_dob,r_btype,r_gender,r_disease) VALUES (?,?,?,?,?,?,?,?);`;
  db.query(
    sql_p,
    [r_name, r_address, r_email, r_phone, r_dob, r_btype, r_gender, r_disease],
    (err, rows) => {
      if (err) res.send("Failed" + err);
    }
  );
  sql_p = `INSERT INTO recipient2 (re_email,re_pwrd) VALUES (?,?);`;
  db.query(sql_p, [r_email, r_pwrd], (err, rows) => {
    if (err) res.send("Failed" + err);
    else res.send("Success");
  });
});

app.post("/register/donor", (req, res) => {
  var {
    d_name,
    d_address,
    d_email,
    d_phone,
    d_dob,
    d_btype,
    d_gender,
    d_disease,
    d_pwrd,
  } = req.body;
  let sql_p = `INSERT donor1 (d_name,d_address,d_email,d_phone,d_dob,d_btype,d_gender,d_disease) VALUES (?,?,?,?,?,?,?,?);`;
  db.query(
    sql_p,
    [d_name, d_address, d_email, d_phone, d_dob, d_btype, d_gender, d_disease],
    (err, rows) => {
      if (err) throw err;
    }
  );
  console.log(sql_p);
  sql_p = `INSERT donor2 (d_email,d_pwrd) VALUES (?,?);`;
  db.query(sql_p, [d_email, d_pwrd], (err, rows) => {
    if (err) res.send("Failed" + err);
    else res.send("Success");
  });
});

app.post("/approve", (req, res) => {
  var { status, bt_transacid } = req.body;
  let sql_p = "UPDATE blood_trans1 SET bt_status=? WHERE bt_transacid=?;";
  db.query(sql_p, [status, bt_transacid], (err, rows) => {
    if (err) res.send(err);
    else {
      giveBlood();
      res.send('{"status":"Success"}');
    }
  });
  // giveBlood();
});

function currentBank() {
  var xx = {};
  var added, subs;
  // db.query("SELECT * from blood_trans1", (err, rows) => {
  //   console.log(JSON.stringify(rows));
  // });
  db.query(
    "SELECT r.r_btype,SUM(bt2.bt_quantity) FROM blood_trans1 bt1,blood_trans2 bt2,recipient1 r WHERE bt1.bt_status=2 AND bt1.bt_transacid=bt2.bt_transacid AND bt1.bt_recepient=r.r_id;",
    (err, rows) => {
      if (err) throw err;
      subs = rows;
      db.query(
        "SELECT d.d_btype,SUM(bd.bd_quantity) FROM blood_don bd,donor1 d WHERE bd_donorid=d.d_id;",
        (err, rowss) => {
          if (err) throw err;
          added = rowss;
          // console.log(rowss);

          for (let i = 0; i < added.length; i++) {
            xx[added[i]["d_btype"]] = added[i]["SUM(bd.bd_quantity)"];
          }
          if (subs !== undefined)
            for (let i = 0; i < subs.length; i++) {
              xx[subs[i]["r_btype"]] -= subs[i]["bt_quantity"];
            }

          // else console.log("asfkjhaskdh");
          // console.log(subs);
        }
      );
    }
  );
  console.log(xx);
  return xx;
}
app.post("/bloodbank", (req, res) => {
  var xx = {};
  var added, subs;
  // db.query("SELECT * from blood_trans1", (err, rows) => {
  //   console.log(JSON.stringify(rows));
  // });
  db.query(
    "SELECT r.r_btype,SUM(bt2.bt_quantity) FROM blood_trans1 bt1,blood_trans2 bt2,recipient1 r WHERE bt1.bt_status=2 AND bt1.bt_transacid=bt2.bt_transacid AND bt1.bt_recepient=r.r_id;",
    (err, rows) => {
      if (err) throw err;
      subs = rows;
      console.log(subs);
      db.query(
        "SELECT d.d_btype,SUM(bd.bd_quantity) FROM blood_don bd,donor1 d WHERE bd_donorid=d.d_id;",
        (err, rowss) => {
          if (err) throw err;
          added = rowss;
          console.log(added);

          for (let i = 0; i < added.length; i++) {
            xx[added[i]["d_btype"]] = added[i]["SUM(bd.bd_quantity)"];
          }
          if (subs !== undefined)
            for (let i = 0; i < subs.length; i++) {
              xx[subs[i]["r_btype"]] -= subs[i]["SUM(bt2.bt_quantity)"];
            }
          res.send(xx);
          // else console.log("asfkjhaskdh");
          // console.log(subs);
        }
      );
    }
  );
});
function giveBlood() {
  var xx = {};
  var added, subs;
  // db.query("SELECT * from blood_trans1", (err, rows) => {
  //   console.log(JSON.stringify(rows));
  // });
  db.query(
    "SELECT r.r_btype,SUM(bt2.bt_quantity) FROM blood_trans1 bt1,blood_trans2 bt2,recipient1 r WHERE bt1.bt_status=2 AND bt1.bt_transacid=bt2.bt_transacid AND bt1.bt_recepient=r.r_id;",
    (err, rows) => {
      if (err) throw err;
      subs = rows;
      db.query(
        "SELECT d.d_btype,SUM(bd.bd_quantity) FROM blood_don bd,donor1 d WHERE bd_donorid=d.d_id;",
        (err, rowss) => {
          if (err) throw err;
          added = rowss;
          // console.log(rowss);
          for (let i = 0; i < added.length; i++) {
            xx[added[i]["d_btype"]] = added[i]["SUM(bd.bd_quantity)"];
          }
          if (subs !== undefined)
            for (let i = 0; i < subs.length; i++) {
              xx[subs[i]["r_btype"]] -= subs[i]["bt_quantity"];
            }
          var sql_p =
            "SELECT r1.r_btype,bt2.bt_quantity,bt1.bt_transacid from recipient1 r1,blood_trans1 bt1,blood_trans2 bt2 WHERE bt1.bt_recepient=r1.r_id AND bt1.bt_status=1 AND bt1.bt_transacid=bt2.bt_transacid;";
          db.query(sql_p, (err, rows) => {
            console.log(rows);
            for (let i = 0; i < rows.length; i++) {
              if (rows[i]["bt_quantity"] < xx[rows[i]["r_btype"]]) {
                // accept(rows[i]["bt_transacid"]);
                db.query(
                  "UPDATE blood_trans1 set bt_status=2 WHERE bt_transacid=?",
                  [rows[i]["bt_transacid"]],
                  (err, rows) => {}
                );
                if (xx[rows[i]] !== undefined)
                  xx[rows[i]]["r_btype"] -= rows[i]["bt_quantity"];
              }
            }
          });
          // else console.log("asfkjhaskdh");
          // console.log(subs);
        }
      );
    }
  );
}
app.post("/donate", (req, res) => {
  var { d_email, bd_date, bd_quantity, disease, btype } = req.body;
  console.log(d_email);
  db.query("SELECT * FROM donor1 WHERE d_email=?", [d_email], (err, rows) => {
    if (err) throw err;
    else {
      let bd_donorid = rows[0]["d_id"];
      let sql_p = `INSERT INTO blood_don (bd_donorid,bd_date,bd_quantity) VALUES (?,?,?);`;
      db.query(sql_p, [bd_donorid, bd_date, bd_quantity], (err, rows) => {
        if (err) throw res.send("Failed" + req);
        else {
          giveBlood();
          res.send("Success");
        }
      });
    }
  });
});
app.post("/request", (req, res) => {
  var { r_email, bt_date, bt_quantity, btype, disease, reason } = req.body;
  console.log(req.body);
  db.query(
    "SELECT * FROM recipient1 WHERE r_email=?",
    [r_email],
    (err, rows) => {
      if (err) throw err;
      else {
        // console.log(rows);
        let bt_recepient = rows[0]["r_id"];
        let sql_p = `INSERT INTO blood_trans1 (bt_recepient,bt_status) VALUES (?,?);`;
        db.query(sql_p, [bt_recepient, 0], (err, rows) => {
          if (err) throw err;
          else {
            // giveBlood(req);
            let bt_transacid = rows.insertId;
            db.query(
              "INSERT INTO blood_trans2 (bt_transacid,bt_date,bt_quantity) VALUES (?,?,?);",
              [bt_transacid, bt_date, bt_quantity],
              (err, rows) => {
                if (err) throw err;
                else res.send("Success");
              }
            );
          }
        });
      }
    }
  );
});

app.post("/donors", (req, res) => {
  db.query("SELECT * from donor1;", (err, rows) => {
    if (err) res.send(err);
    else res.send(JSON.stringify(rows));
  });
});

app.post("/recipients", (req, res) => {
  db.query("SELECT * from recipient1;", (err, rows) => {
    if (err) res.send(err);
    else res.send(JSON.stringify(rows));
  });
});

app.post("/login/donor", (req, res) => {
  var { id, pass } = req.body;
  db.query("SELECT d_pwrd from donor2 where d_email=?;", [id], (err, rows) => {
    if (err) res.send(err);
    else {
      if (rows.length == 0) res.send('{"status":"-1"}');
      else {
        var { d_pwrd } = rows[0];
        if (d_pwrd === pass) {
          db.query(
            "SELECT * FROM donor1 where d_email=?",
            [id],
            (err, rows) => {
              if (err) res.send(err);
              else res.send(JSON.stringify(rows[0]));
            }
          );
        } else res.send('{"status":"-1"}');
      }
    }
  });
});

app.post("/login/recipient", (req, res) => {
  var { id, pass } = req.body;
  console.log(req.body);
  db.query(
    "SELECT re_pwrd from recipient2 where re_email=?;",
    [id],
    (err, rows) => {
      if (err) res.send(err);
      else {
        if (rows.length === 0) res.send('{"status":"-1"}');
        else {
          var { re_pwrd } = rows[0];
          if (re_pwrd === pass) {
            db.query(
              "SELECT * FROM recipient1 where r_email=?",
              [id],
              (err, rows) => {
                res.send(JSON.stringify(rows[0]));
              }
            );
          } else res.send('{"status":"-1"}');
        }
      }
    }
  );
});

app.post("/login/admin", (req, res) => {
  var { id, pass } = req.body;
  db.query("SELECT a_pwrd from admin2 where a_email=?;", [id], (err, rows) => {
    if (err) res.send(err);
    else {
      console.log(pass);
      if (rows.length === 0) res.send('{"status":"-1"}');
      else {
        var { a_pwrd } = rows[0];
        if (a_pwrd === pass) {
          db.query("SELECT * FROM admin where a_email=?", [id], (err, rows) => {
            res.send(JSON.stringify(rows[0]));
          });
        } else res.send('{"status":"-1"}');
      }
    }
  });
});

app.post("/donated", (req, res) => {
  var { id } = req.body;
  db.query("SELECT * from blood_don where bd_donorid=?;", [id], (err, rows) => {
    if (err) res.send(err);
    else res.send(JSON.stringify(rows));
  });
});
app.post("/requested", (req, res) => {
  var { id } = req.body;
  db.query(
    "SELECT bt1.bt_status,bt1.bt_transacid,bt2.bt_date,bt2.bt_quantity from blood_trans1 bt1,blood_trans2 bt2 where bt1.bt_transacid=bt2.bt_transacid and bt1.bt_recepient=?;",
    [id],
    (err, rows) => {
      if (err) res.send(err);
      else {
        console.log(rows);
        res.send(JSON.stringify(rows));
      }
    }
  );
});
// app.post("/history/donated", (req, res) => {
//   db.query("SELECT * FROM blood_don", (err, rows) => {
//     res.send(JSON.stringify(rows));
//   });
// });
app.post("/history/donated", (req, res) => {
  db.query(
    "SELECT bd.bd_id,bd.bd_donorid,bd.bd_date,bd.bd_quantity,d.d_btype FROM blood_don bd,donor1 d WHERE d.d_id=bd.bd_donorid;",
    (err, rows) => {
      res.send(JSON.stringify(rows));
    }
  );
});

app.post("/history/request", (req, res) => {
  db.query(
    "SELECT r.r_btype,r.r_disease,bt1.bt_recepient,bt1.bt_transacid,bt1.bt_status,bt2.bt_date,bt2.bt_quantity FROM recipient1 r,blood_trans1 bt1,blood_trans2 bt2 WHERE bt1.bt_transacid=bt2.bt_transacid AND bt1.bt_recepient=r.r_id;",
    (err, rows) => {
      if (err) res.send(err);
      else res.send(JSON.stringify(rows));
    }
  );
});

app.listen(3001, () => {
  console.log("Connected at 3001");
  // currentBank();
});
