const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "port_operations",
    port: 3307
});

db.connect((err) => {
    if (err) {
        console.error("Database Connection Failed:", err.message);
        return;
    }

    console.log("Connected to MySQL Database");
});

module.exports = db;