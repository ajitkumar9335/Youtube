import React from "react";
import { FiMenu, FiSearch, FiMic, FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = ({ toggleSidebar }) => {
  return (
    <header
      style={{
        width: "100%",
        height: "70px",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      {/* LEFT SECTION */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <FiMenu
          size={28}
          color="black"
          style={{ cursor: "pointer" }}
          onClick={toggleSidebar}
        />

        <Link to="/">
          <img
            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            alt="YouTube"
            style={{ height: "25px" }}
          />
        </Link>
      </div>

      {/* CENTER SEARCH BAR */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "45%",
          maxWidth: "600px",
          border: "1px solid #ddd",
          borderRadius: "50px",
          padding: "5px 15px",
          background: "#fff",
        }}
      >
        <input
          type="text"
          placeholder="Search"
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            fontSize: "16px",
            paddingLeft: "5px",
          }}
        />
        <FiSearch size={20} color="black" />
      </div>

      {/* RIGHT SECTION */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <FiMic size={22} color="black" style={{ cursor: "pointer" }} />

        <FiBell size={22} color="black" style={{ cursor: "pointer" }} />

        <button
          style={{
            padding: "8px 18px",
            background: "#0084ff",
            color: "white",
            borderRadius: "20px",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
