import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import Login from "./pages/Login";
import ChannelPage from "./pages/ChannelPage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Sidebar isOpen={isSidebarOpen} />

      <div className={`pt-20 transition-all ${isSidebarOpen ? "pl-64" : "pl-16"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/channel/:channelId" element={<ChannelPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
