import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import StatisticsPage from "../pages/StatisticsPage";
import CreateElectionPage from "../pages/CreateElectionPage";
import ElectionStatsPage from "../pages/ElectionStatsPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/statistics" element={<StatisticsPage />} />
      <Route path="/create" element={<CreateElectionPage />} />
      <Route path="/election/:id" element={<ElectionStatsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
