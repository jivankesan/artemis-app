import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Pricing from "./components/Pricing/Pricing";
import Signup from "./components/Signup/Signup";
import About from "./components/About/About";
import Product from "./components/Product/Product";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          {/* Add other routes as needed */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
