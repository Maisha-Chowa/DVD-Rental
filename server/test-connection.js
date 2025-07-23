require("dotenv").config();
const { Pool } = require("pg");

console.log("Testing database connection...");
console.log("DATABASE_URL:", process.env.DATABASE_URL ? "Set" : "Not set");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function testConnection() {
  try {
    console.log("Attempting to connect...");
    const client = await pool.connect();
    console.log("✅ Connected successfully!");

    const result = await client.query("SELECT NOW() as current_time");
    console.log("Current time:", result.rows[0].current_time);

    client.release();
    await pool.end();
    console.log("✅ Test completed successfully!");
  } catch (error) {
    console.error("❌ Connection failed:");
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);
    console.error("Full error:", error);
  }
}

testConnection();
