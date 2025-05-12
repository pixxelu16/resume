import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectMindSet from '../Pages/ProjectMindSet';
import HomePage from '../Pages/HomePage/home';
import AboutPage from '../Pages/AboutPage/About';

export default function LayoutRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/resume" element={<HomePage />} />
        <Route path="/resume/project-mindset" element={<ProjectMindSet />} />
        <Route Path="/resume/about-page" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
