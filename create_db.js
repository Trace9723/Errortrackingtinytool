const sqlite3 = require('sqlite3').verbose();
let errordb;

// Requires "test.db" to function.
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {if (err) return console.error(err.message);});

errordb = `CREATE TABLE errors (id INTEGER PRIMARY KEY, error_name, error_desc, priority, assign, status)`;
db.run(errordb)