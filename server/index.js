import express from "express";
import cors from "cors";
import router from "./src/routes/index.js";
import dotenv from "dotenv";
dotenv.config();

import pool from "./db.js";

const app = express();

//parser
app.use(cors());
app.use(express.json());

// application routes
app.use("/api/v1", router);

// Database connection test endpoint
app.get("/api/test-db", async (req, res) => {
  try {
    console.log("DB URL:", process.env.DATABASE_URL);
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
