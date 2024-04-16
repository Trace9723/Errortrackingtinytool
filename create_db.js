const sqlite3 = require('sqlite3').verbose();
let errordb;
let table_name;
table_name = "errors";

// Requires "test.db" to function.
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {if (err) return console.error(err.message);});

errordb = `CREATE TABLE ${table_name} (id INTEGER PRIMARY KEY, Name, Priority, Description, Person_Assigned, Date_Found, Status)`;
db.run(errordb)