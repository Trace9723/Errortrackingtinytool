const sqlite3 = require('sqlite3').verbose();
let table_name;
let key;

table_name = "errors";
key = 1;

const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {if (err) return console.error(err.message);});

sql = `DELETE FROM ${table_name} WHERE id = ?`;
 db.run(sql, [key], (err) => {
  if (err) return console.error(err.message);
 });