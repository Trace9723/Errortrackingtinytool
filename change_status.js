const sqlite3 = require('sqlite3').verbose();
let table_name;
let key;
let error_status;

table_name = "errors";
key = 4;
error_status = "Solved";

const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {if (err) return console.error(err.message);});

sql = `UPDATE ${table_name} SET status = ? WHERE id = ?`;
 db.run(sql, [error_status, key], (err) => {
   if (err) return console.error(err.message);
 });