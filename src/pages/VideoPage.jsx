import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axiosConfig";
import Header from "../components/Header";

const VideoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [video, setVideo] = useState(null);
  const [suggested, setSuggested] = useState([]);
  const [commentText, setCommentText] = useState("");

  // FETCH VIDEO
  const fetchVideo = async () => {
    const res = await axios.get(`/videos/${id}`);
    setVideo(res.data);
  };

  // FETCH SUGGESTED VIDEOS
  const fetchSuggested = async () => {
    const res = await axios.get(`/videos/suggested/${id}`);
    setSuggested(res.data);
  };

  useEffect(() => {
    fetchVideo();
    fetchSuggested();
  }, [id]);

  if (!video) return <p className="p-6 text-xl">Loading...</p>;

  // LIKE VIDEO
  const handleLike = async () => {
    setVideo({ ...video, likes: video.likes + 1 });
    await axios.put(`/videos/${id}/like`);
  };

  // DISLIKE VIDEO
  const handleDislike = async () => {
    setVideo({ ...video, dislikes: video.dislikes + 1 });
    await axios.put(`/videos/${id}/dislike`);
  };

  // ADD COMMENT
  const handleAddComment = async () => {
    if (!commentText.trim()) return;

    const res = await axios.post(`/videos/${id}/comments`, {
      userId: "user01",
      username: "Ajith",
      text: commentText,
    });

    setVideo({ ...video, comments: res.data });
    setCommentText("");
  };

  return (
    <>
      <Header />

      <div className="grid grid-cols-12 px-6 mt-20 gap-10">

        {/* LEFT SECTION - VIDEO PLAYER + DETAILS */}
        <div className="col-span-8">

          {/* VIDEO PLAYER */}
          <video
            src={video.videoUrl}
            controls
            className="rounded-xl w-full"
          />

          {/* TITLE */}
          <h2 className="text-2xl font-bold mt-4">{video.title}</h2>

          {/* CHANNEL INFO */}
          <div className="flex justify-between items-center mt-4">

            <div className="flex items-center gap-3">
              <img
                src={video.channelIcon || "https://yt3.ggpht.com/ytc/default.jpg"}
                className="w-12 h-12 rounded-full"
              />

              <div>
                <h3 className="font-bold text-lg">{video.channelName}hi</h3>
                <p className="text-gray-600 text-sm">
                  {video.subscribers?.toLocaleString()} 9000 subscribers
                </p>
              </div>
            </div>

            <button className="bg-black text-white px-5 py-2 rounded-full">
              Subscribe
            </button>
          </div>

          {/* LIKE / DISLIKE / SHARE */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleLike}
              className="bg-gray-200 px-5 py-2 rounded-full flex items-center gap-2"
            >
              👍 {video.likes}
            </button>

            <button
              onClick={handleDislike}
              className="bg-gray-200 px-5 py-2 rounded-full flex items-center gap-2"
            >
              👎 {video.dislikes}
            </button>

            <div className="bg-gray-200 px-5 py-2 rounded-full">🔗 Share</div>
            <div className="bg-gray-200 px-5 py-2 rounded-full">⬇ Download</div>
            <div className="bg-gray-200 px-5 py-2 rounded-full">💾 Save</div>
          </div>

          {/* VIEWS + DATE */}
          <p className="mt-4 text-gray-600">
            {video.views?.toLocaleString()} views • {video.uploadDate}
          </p>

          {/* DESCRIPTION */}
          <div className="bg-gray-100 p-4 rounded-lg mt-6">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-700 whitespace-pre-line">{video.description}</p>
          </div>

          {/* COMMENTS */}
          <div className="mt-8">
            <h3 className="font-bold text-xl mb-3">{video.comments.length} Comments</h3>

            {/* ADD COMMENT */}
            <div className="flex gap-3 mb-4">
              <input
                type="text"
                className="w-full border p-2 rounded-lg"
                placeholder="Add a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <button
                onClick={handleAddComment}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Post
              </button>
            </div>

            {/* SHOW COMMENTS */}
            <div className="space-y-4">
              {video.comments.map((c) => (
                <div key={c.commentId} className="border-b pb-3">
                  <p className="font-semibold">{c.username}</p>
                  <p>{c.text}</p>
                  <p className="text-gray-500 text-sm">{c.timestamp}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SECTION - SUGGESTED VIDEOS */}
        <div className="col-span-4">
          <h3 className="font-semibold mb-3 text-lg">Suggested Videos</h3>

          <div className="space-y-4">
            {suggested.length > 0 ? (
              suggested.map((item) => (
                <div
                  key={item.videoId}
                  className="flex gap-3 cursor-pointer"
                  onClick={() => navigate(`/video/${item.videoId}`)}
                >
                  <img
                    src={item.thumbnailUrl}
                    className="w-40 h-24 rounded-lg"
                  />

                  <div>
                    <p className="font-semibold line-clamp-2">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.channelName}</p>
                    <p className="text-gray-500 text-sm">
                      {item.views?.toLocaleString()} views
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Loading suggested videos...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPage;
