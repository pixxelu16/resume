import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import ProjectMindSet from '../Pages/ProjectMindSet';
import HomePage from '../Pages/HomePage/home';
import AboutPage from '../Pages/AboutPage/About';
import WorkPage from '../Pages/WorkPage';
import GalleryPage from '../Pages/GalleryPage'

export default function LayoutRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-mindset" element={<ProjectMindSet />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path ="/gallery-page" element={<GalleryPage/>}/>
        <Route path="/work-page" element={<WorkPage/>} />
      </Routes>
    </HashRouter>
  );
}
