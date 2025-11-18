import { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import VideoCard from "../components/VideoCard";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const filters = [
    "All",
    "React",
    "JavaScript",
    "MERN",
    "Gaming",
    "Tech",
    "Fitness",
    "Food",
    "Travel",
    "Education"
  ];

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await api.get("/videos");
      setVideos(res.data);
      setFilteredVideos(res.data);
    };
    fetchVideos();
  }, []);

  const applyFilter = (category) => {
    setSelectedFilter(category);

    let updated = [...videos];

    if (category !== "All") {
      updated = updated.filter(
        (v) => v.category?.toLowerCase() === category.toLowerCase()
      );
    }

    if (searchText.trim() !== "") {
      updated = updated.filter((v) =>
        v.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredVideos(updated);
  };

  const handleSearch = (text) => {
    setSearchText(text);

    let updated = [...videos];

    updated = updated.filter((v) =>
      v.title.toLowerCase().includes(text.toLowerCase())
    );

    if (selectedFilter !== "All") {
      updated = updated.filter(
        (v) => v.category?.toLowerCase() === selectedFilter.toLowerCase()
      );
    }

    setFilteredVideos(updated);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Header handleSearch={handleSearch} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <Sidebar isOpen={sidebarOpen} />

      <div className={`pt-16 w-full transition-all ${sidebarOpen ? "ml-56" : "ml-20"}`}>

        {/* FILTER BAR — ZERO GAP */}
        <div className="flex gap-3 overflow-x-auto bg-white sticky top-16 z-40 px-3 py-2 ">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => applyFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm border ${
                selectedFilter === filter
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* VIDEOS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                        lg:grid-cols-4 gap-4 p-4">
          {filteredVideos.map((video) => (
            <VideoCard key={video.videoId} video={video} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
