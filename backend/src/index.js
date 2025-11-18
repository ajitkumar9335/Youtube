import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import videoRoutes from "./routes/videos.routes.js";
import channelRoutes from "./routes/channel.routes.js";

// Load env
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Routes
app.use("/api/videos", videoRoutes);
app.use("/api/channels", channelRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend running...");
});

// Start server
const PORT = process.env.PORT || 9335;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
