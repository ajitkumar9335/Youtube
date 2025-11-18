import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axiosConfig";

const ChannelPage = () => {
  const { channelId } = useParams();
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/channels/${channelId}`);
      setChannel(res.data.channel);
      setVideos(res.data.videos);
    };
    fetchChannel();
  }, [channelId]);

  if (!channel) return <h1 className="text-xl p-10">Loading Channel...</h1>;

  return (
    <div className="w-full">
      {/* Channel Banner */}
      <div className="w-full h-56 bg-gray-300 rounded-xl mb-4"></div>

      {/* Channel Info */}
      <div className="flex items-start gap-6 px-4">
        <img
          src={channel.avatar}
          className="w-32 h-32 rounded-full border"
        />

        <div>
          <h1 className="text-3xl font-bold">{channel.name}</h1>
          <p className="text-gray-500">{channel.subscribers} subscribers</p>
          <p className="text-gray-600 mt-1">{channel.description}</p>

          <button className="mt-4 bg-black text-white px-5 py-2 rounded-full">
            Subscribe
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mt-6 border-b px-4 pb-3">
        <button className="font-medium border-b-2 border-black pb-1">Videos</button>
        <button className="text-gray-600">Playlists</button>
        <button className="text-gray-600">About</button>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-4 gap-5 px-4 mt-6">
        {videos.map((v) => (
          <div key={v.videoId} className="cursor-pointer">
            <img
              src={v.thumbnailUrl}
              className="w-full h-40 object-cover rounded-xl"
            />
            <h3 className="font-semibold mt-2">{v.title}</h3>
            <p className="text-gray-500 text-sm">{v.views} views</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelPage;
