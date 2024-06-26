const sqlite3 = require('sqlite3').verbose();
let errordb;

const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {if (err) return console.error(err.message);});

errordb = `INSERT INTO errors (error_name, error_desc, priority, assign, status) VALUES(?,?,?,?,?)`;
db.run(
    errordb,
    ["bug", "does not work", "high", "Per Son", "In Progress"],
    (err) => {
      if (err) return console.error(err.message);
    }
  );

// Display Table in Terminal
//
// sql = `SELECT * FROM errors`;
// db.all(sql, [], (err, rows) => {
//     if (err) return console.error(err.message);
//     rows.forEach((row) => {
//       console.log(row);
//     });
// });