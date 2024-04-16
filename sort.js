const sqlite3 = require('sqlite3').verbose();
let table_name;
let column;

table_name = "errors";
column = "Status";

const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {if (err) return console.error(err.message);});

sql = `SELECT * FROM ${table_name} ORDER BY ${column}`;

// Display Table in Terminal
db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message);
    rows.forEach((row) => {
      console.log(row);
    });
});