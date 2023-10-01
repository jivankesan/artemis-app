import { Link, useLocation } from "react-router-dom";
import React from "react";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "bg-gray-700" : "";
  };

  return (
    <div className="sidebar bg-gray-800 text-white h-screen w-64 p-6">
      <Link
        className={`block py-2.5 px-4 hover:bg-gray-700 rounded transition duration-200 ${isActive(
          "/dashboard/current-projects"
        )}`}
        to="/dashboard/current-projects"
      >
        Current Projects
      </Link>
      <Link
        className={`block py-2.5 px-4 hover:bg-gray-700 rounded transition duration-200 ${isActive(
          "/dashboard/search"
        )}`}
        to="/dashboard/search"
      >
        Search
      </Link>
      <Link
        className={`block py-2.5 px-4 hover:bg-gray-700 rounded transition duration-200 ${isActive(
          "/dashboard/workspaces"
        )}`}
        to="/dashboard/workspaces"
      >
        Workspaces
      </Link>
      <Link
        className={`block py-2.5 px-4 hover:bg-gray-700 rounded transition duration-200 ${isActive(
          "/dashboard/settings"
        )}`}
        to="/dashboard/settings"
      >
        Settings
      </Link>
    </div>
  );
};

export default Sidebar;
