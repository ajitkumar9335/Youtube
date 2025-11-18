import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import videoRoutes from "./routes/videos.routes.js";

dotenv.config();

const app = express();  // ✔ CREATE APP FIRST

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// CONNECT DB
connectDB();

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/videos", videoRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend running...");
});

// START SERVER
const PORT = process.env.PORT || 9335;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
