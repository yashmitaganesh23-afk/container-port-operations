const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

const PORT = 5000;

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// Test route
app.get("/api/test", (req, res) => {
    res.json({
        message: "Container Port Operations API is working"
    });
});

// Get all containers
app.get("/api/containers", (req, res) => {
    const sql = "SELECT * FROM containers";

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching containers:", err);
            return res.status(500).json({
                error: "Failed to fetch container data"
            });
        }

        res.json(results);
    });
});
// Get all vessels
app.get("/api/vessels", (req, res) => {
    const sql = "SELECT * FROM vessels";

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching vessels:", err);
            return res.status(500).json({
                error: "Failed to fetch vessel data"
            });
        }

        res.json(results);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Container Port Operations Platform running on port ${PORT}`);
});