import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} />

      <div className={`flex-1 transition-all duration-300 ${isOpen ? "ml-64" : "ml-20"}`}>
        <Header toggleSidebar={toggleSidebar} isOpen={isOpen} />
        <div className="mt-20 px-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
