import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectMindSet from '../Pages/ProjectMindSet';
import HomePage from '../Pages/HomePage/home'; 

export default function LayoutRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project-mindset" element={<ProjectMindSet />} />
    </Routes>
    </BrowserRouter>
  );
}
