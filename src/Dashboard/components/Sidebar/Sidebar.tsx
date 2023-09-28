import { Link } from "react-router-dom";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <Link to="/dashboard/current-projects">Current Projects</Link>
      <Link to="/dashboard/search">Search</Link>
      <Link to="/dashboard/workspaces">Workspaces</Link>
      <Link to="/dashboard/settings">Settings</Link>
    </div>
  );
};

export default Sidebar;
