import { Home, PlaySquare, User, Clock, Film, Gamepad2 } from "lucide-react";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`h-screen bg-white border-r border-gray-300 fixed top-0 left-0 z-20 
        transition-all duration-300
        ${isOpen ? "w-56" : "w-20"}
      `}
    >
      <div className="flex flex-col gap-4 mt-20 px-3 text-black">
        
        <div className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <Home />
          {isOpen && <span>Home</span>}
        </div>

        <div className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <PlaySquare />
          {isOpen && <span>Shorts</span>}
        </div>

        <div className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <User />
          {isOpen && <span>You</span>}
        </div>

        <div className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <Clock />
          {isOpen && <span>History</span>}
        </div>

        <hr className="border-gray-300" />

        <div className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <Film />
          {isOpen && <span>Movies</span>}
        </div>

        <div className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <Gamepad2 />
          {isOpen && <span>Gaming</span>}
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
