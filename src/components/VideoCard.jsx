import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/video/${video.videoId}`)}
      className="rounded-lg shadow hover:shadow-lg cursor-pointer transition">

      <img
        src={video.thumbnailUrl}
        className="w-full h-40 object-cover rounded-t-lg"
      />

      <div className="p-3">
        <h3 className="font-semibold text-sm">{video.title}</h3>
        <p className="text-gray-600">{video.channelId}</p>
        <p className="text-gray-500 text-xs">{video.views} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
