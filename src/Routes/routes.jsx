import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import ProjectMindSet from '../Pages/ProjectMindSet';
import HomePage from '../Pages/HomePage/home';
import AboutPage from '../Pages/AboutPage/About';
import WorkPage from '../Pages/WorkPage';
import GalleryPage from '../Pages/GalleryPage';
import TrekkitPage from '../Pages/ProjectTrekkit/Index';
import SchoolRaya from '../Pages/SchoolRaya';
import Titlefolio from '../Pages/TitleFolio';
import BalRaksha from '../Pages/BalRaksha/Index';


export default function LayoutRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-mindset" element={<ProjectMindSet />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/gallery-page" element={<GalleryPage />} />
        <Route path="/work-page" element={<WorkPage />} />
        <Route path="/trekkit-page" element={<TrekkitPage />} />
        <Route path="/school-raya" element={<SchoolRaya />} />
        <Route path="/title-folio" element={<Titlefolio />} />
        <Route path="/bal-raksha" element={<BalRaksha/>}/>
        

      </Routes>
    </HashRouter>
  );
}
