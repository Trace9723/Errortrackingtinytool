const sqlite3 = require('sqlite3').verbose();
let table_name;

table_name = "errors";

const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {if (err) return console.error(err.message);});

sql = `DROP TABLE ${table_name}`;
 db.run(sql);