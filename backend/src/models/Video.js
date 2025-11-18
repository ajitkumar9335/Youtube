import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  commentId: String,
  userId: String,
  username: String,
  text: String,
  timestamp: Date
});

const videoSchema = new mongoose.Schema({
  videoId: String,
  title: String,
  description: String,
  thumbnailUrl: String,
  videoUrl: String,
  channelName: String,
  views: Number,
  likes: Number,
  dislikes: Number,
  uploadDate: String,
  category: String,
  comments: [commentSchema]
});

export default mongoose.model("Video", videoSchema);
