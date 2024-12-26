import { Bell, Search } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 text-white shadow-md">
      {/* Search Bar */}
      <div className="flex items-center gap-4 flex-1">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-200 w-5 h-5" />
          <input
            type="search"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Notifications and Profile */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button className="p-2 hover:bg-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300">
          <Bell className="w-5 h-5 text-white" />
        </button>

        {/* Profile Section */}
        <div className="flex items-center gap-3">
        <FaUserCircle className="text-gray-400 h-16 w-16" />
          <div className="text-right">
            <div className="font-semibold text-black">Austin Robertson</div>
            <div className="text-sm text-gray-500">Marketing Administrator</div>
          </div>
          
        </div>
      </div>
    </header>
  );
}
