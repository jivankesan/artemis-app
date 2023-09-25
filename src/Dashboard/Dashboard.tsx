import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Dash_home from "./components/Dash_home/Dash_home";
import Dash_menu from "./components/Dash_menu/Dash_menu";

const Dashboard: FC = () => {
  return (
    <div>
      <Dash_menu />
      <Routes>
        <Route path="/" element={<Dash_home />} />
        {/* Add other nested routes as needed */}
      </Routes>
    </div>
  );
};

export default Dashboard;
