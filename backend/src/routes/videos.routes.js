import express from "express";
import Video from "../models/Video.js";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

/* ------------------------ GET ALL VIDEOS ------------------------ */
router.get("/", async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch videos" });
  }
});

/* ------------------------ GET SINGLE VIDEO ------------------------ */
router.get("/:id", async (req, res) => {
  try {
    const video = await Video.findOne({ videoId: req.params.id });
    res.json(video);
  } catch (e) {
    res.status(500).json({ error: "Video not found" });
  }
});

/* ------------------------ LIKE VIDEO ------------------------ */
router.put("/:id/like", async (req, res) => {
  try {
    const video = await Video.findOne({ videoId: req.params.id });
    video.likes += 1;
    await video.save();
    res.json({ likes: video.likes });
  } catch (error) {
    res.status(500).json({ error: "Failed to like video" });
  }
});

/* ------------------------ DISLIKE VIDEO ------------------------ */
router.put("/:id/dislike", async (req, res) => {
  try {
    const video = await Video.findOne({ videoId: req.params.id });
    video.dislikes += 1;
    await video.save();
    res.json({ dislikes: video.dislikes });
  } catch (error) {
    res.status(500).json({ error: "Failed to dislike video" });
  }
});

/* ------------------------ ADD COMMENT ------------------------ */
router.post("/:id/comments", async (req, res) => {
  try {
    const { userId, username, text } = req.body;

    const video = await Video.findOne({ videoId: req.params.id });

    const newComment = {
      commentId: uuidv4(),
      userId,
      username,
      text,
      timestamp: new Date(),
    };

    video.comments.push(newComment);
    await video.save();

    res.json(video.comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to add comment" });
  }
});

/* ------------------------ UPDATE COMMENT ------------------------ */
router.put("/:id/comments/:commentId", async (req, res) => {
  try {
    const { text } = req.body;

    const video = await Video.findOne({ videoId: req.params.id });

    const comment = video.comments.find(
      (c) => c.commentId === req.params.commentId
    );

    comment.text = text;

    await video.save();

    res.json(video.comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to update comment" });
  }
});

/* ------------------------ DELETE COMMENT ------------------------ */
router.delete("/:id/comments/:commentId", async (req, res) => {
  try {
    const video = await Video.findOne({ videoId: req.params.id });

    video.comments = video.comments.filter(
      (c) => c.commentId !== req.params.commentId
    );

    await video.save();

    res.json(video.comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});

/* ------------------------ SUGGESTED VIDEOS ------------------------ */
// Returns 10 suggested videos based on category OR random fallback
router.get("/suggested/:id", async (req, res) => {
  try {
    const video = await Video.findOne({ videoId: req.params.id });

    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }

    // First try: same category videos (except current video)
    let suggested = await Video.aggregate([
      {
        $match: {
          category: video.category,
          videoId: { $ne: video.videoId },
        },
      },
      { $sample: { size: 10 } },
    ]);

    // Fallback: random videos
    if (suggested.length === 0) {
      suggested = await Video.aggregate([{ $sample: { size: 10 } }]);
    }

    res.json(suggested);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch suggested videos" });
  }
});

export default router;
