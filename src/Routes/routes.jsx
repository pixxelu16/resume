import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectMindSet from '../Pages/ProjectMindSet';
import HomePage from '../Pages/HomePage/home';
import AboutPage from '../Pages/AboutPage/About';

export default function LayoutRoutes() {
  return (
    <BrowserRouter basename="/resume">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-mindset" element={<ProjectMindSet />} />
        <Route path="/about-page" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
