// test-env.js
import dotenv from "dotenv";
dotenv.config();

console.log("Test DB URL:", process.env.DATABASE_URL);
