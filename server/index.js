const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const pool = require("./db");

app.use(cors());
app.use(express.json());

// Database connection test endpoint
app.get("/api/test-db", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT NOW()");
    client.release();
    res.json({
      success: true,
      message: "Database connected successfully",
      timestamp: result.rows[0].now,
    });
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({
      success: false,
      message: "Database connection failed",
      error: error.message,
    });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
