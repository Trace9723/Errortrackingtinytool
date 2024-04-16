const sqlite3 = require('sqlite3').verbose();
let table_name;
let key;
let error_priority;

table_name = "errors";
key = 1;
error_priority = "Low";

const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {if (err) return console.error(err.message);});

sql = `UPDATE ${table_name} SET priority = ? WHERE id = ?`;
 db.run(sql, [error_priority, key], (err) => {
   if (err) return console.error(err.message);
 });