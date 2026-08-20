const mysql = require("mysql2");

const db = mysql.createConnection({
    host: process.env.DB_HOST || "mysql",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root123",
    database: process.env.DB_NAME || "port_operations",
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error("Database Connection Failed:", err.message);
        return;
    }

    console.log("Connected to MySQL Database");
});

module.exports = db;