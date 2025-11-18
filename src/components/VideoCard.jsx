import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video.videoId}`} className="block">
      <div className="rounded-xl overflow-hidden hover:scale-[1.02] transition shadow-sm bg-white">
        
        {/* Thumbnail */}
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-48 object-cover"
        />

        {/* Video info */}
        <div className="p-3">
          <h3 className="font-semibold text-lg line-clamp-2">
            {video.title}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {video.channelId} • {video.views} views
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
