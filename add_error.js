const sqlite3 = require('sqlite3').verbose();
let errordb;
let table_name;
let error_name;
let error_priority;
let error_desc;
let person_assigned;
let date_found;
let error_status;

table_name = "errors";
error_name = "bug";
error_priority = "High";
error_desc = "doesn't work";
person_assigned = "Per Son";
date_found = "01/01/01";
error_status = "In Progress";

const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {if (err) return console.error(err.message);});

errordb = `INSERT INTO ${table_name} (Name, Priority, Description, Person_Assigned, Date_Found, Status) VALUES(?,?,?,?,?,?)`;
db.run(
    errordb,
    [error_name, error_priority, error_desc, person_assigned, date_found, error_status],
    (err) => {
      if (err) return console.error(err.message);
    }
  );