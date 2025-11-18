import { Menu, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = ({ handleSearch, toggleSidebar }) => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md h-16 z-50 flex items-center px-4">

      {/* LEFT SECTION: Sidebar + Logo */}
      <div className="flex items-center gap-4 w-1/4">
        <button onClick={toggleSidebar}>
          <Menu size={28} />
        </button>

        <h1 
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          YouTube Clone
        </h1>
      </div>

      {/* CENTER: SEARCH BAR */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center bg-gray-200 rounded-full w-full max-w-xl px-4 py-2">
          <Search size={20} className="text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 bg-transparent w-full outline-none"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      {/* RIGHT: Sign In / Username */}
      <div className="w-1/4 flex justify-end">
        {username ? (
          <p className="font-semibold">{username}</p>
        ) : (
          <button
            className="px-4 py-2 border rounded-full text-blue-600 border-blue-600 
                       hover:bg-blue-600 hover:text-white transition"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
        )}
      </div>

    </div>
  );
};

export default Header;
