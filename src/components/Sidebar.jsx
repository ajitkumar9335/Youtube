import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-[#0F0F0F] text-white pt-20 transition-all duration-300 shadow-xl 
      ${isOpen ? "w-64" : "w-20"}
    `}
    >
      <nav className="flex flex-col space-y-5 px-4">
        <Link className="flex items-center space-x-4 hover:bg-gray-800 px-3 py-2 rounded">
          <span className="text-2xl">🏠</span>
          {isOpen && <span className="text-sm">Home</span>}
        </Link>

        <Link className="flex items-center space-x-4 hover:bg-gray-800 px-3 py-2 rounded">
          <span className="text-2xl">🎬</span>
          {isOpen && <span className="text-sm">Shorts</span>}
        </Link>

        <Link className="flex items-center space-x-4 hover:bg-gray-800 px-3 py-2 rounded">
          <span className="text-2xl">📺</span>
          {isOpen && <span className="text-sm">Subscriptions</span>}
        </Link>

        <Link className="flex items-center space-x-4 hover:bg-gray-800 px-3 py-2 rounded">
          <span className="text-2xl">👤</span>
          {isOpen && <span className="text-sm">You</span>}
        </Link>

        <Link className="flex items-center space-x-4 hover:bg-gray-800 px-3 py-2 rounded">
          <span className="text-2xl">⏳</span>
          {isOpen && <span className="text-sm">History</span>}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
