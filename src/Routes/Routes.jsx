import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Setting from "../pages/Settings.jsx";
import Theme from "../pages/Theme.jsx";
import Trendng from "../pages/TrendingNews.jsx";
const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/trendingnews" element={<Trendng />} />
      <Route path="/settings" element={<Setting />} />
      <Route path="/theme" element={<Theme />} />
    </Router>
  );
};

export default Routes;
