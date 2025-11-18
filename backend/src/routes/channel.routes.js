import express from "express";
import Channel from "../models/Channel.js";

const router = express.Router();

// GET channel details
router.get("/:id", async (req, res) => {
  try {
    const channel = await Channel.findOne({ channelId: req.params.id });
    
    if (!channel) {
      return res.status(404).json({ message: "Channel not found" });
    }

    res.json(channel);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET all videos from channel
router.get("/:id/videos", async (req, res) => {
  try {
    const videos = await Video.find({ channelId: req.params.id });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
