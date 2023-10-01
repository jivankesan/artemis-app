// Dashboard.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import CurrentProjects from "./components/CurrentProjects/CurrentProjects";
import Search from "./components/Search/Search";
import Workspaces from "./components/Workspaces/Workspaces";
import Settings from "./components/Settings/Settings";

//test
const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Routes>
          <Route path="current-projects" element={<CurrentProjects />} />
          <Route path="search" element={<Search />} />
          <Route path="workspaces" element={<Workspaces />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
