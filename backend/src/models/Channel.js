import mongoose from "mongoose";

const ChannelSchema = new mongoose.Schema({
  channelId: { type: String, required: true, unique: true },
  channelName: { type: String, required: true },
  avatar: { type: String },
  subscribers: { type: Number, default: 0 },
  description: { type: String },
});

export default mongoose.model("Channel", ChannelSchema);
