import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import Login from "./pages/Login";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* 🔥 Header always visible */}
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* 🔥 Sidebar always visible */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* 🔥 Page content area */}
      <div className={`pt-20 pl-${isSidebarOpen ? "64" : "16"} transition-all`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
