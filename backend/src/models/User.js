import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: String,
  username: String,
  email: String,
  password: String, // hashed password
  avatar: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  },
  channels: [String]
});

export default mongoose.model("User", userSchema);
