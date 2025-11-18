import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import VideoCard from "../components/VideoCard";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("/videos");
        setVideos(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="w-full px-6 mt-20">
      {/* Filters Row */}
      <div className="flex gap-4 overflow-x-auto whitespace-nowrap pb-4 no-scrollbar">
        {["All", "React", "JavaScript", "MERN", "Tech", "Fitness", "Gaming"].map(
          (f) => (
            <button
              key={f}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-medium"
            >
              {f}
            </button>
          )
        )}
      </div>

      {/* 3-COLUMN VIDEO GRID */}
      <div
        className="grid gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-3"
      >
        {videos.map((video) => (
          <VideoCard key={video.videoId} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Home;
