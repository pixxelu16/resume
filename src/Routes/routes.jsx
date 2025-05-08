import React from "react";
import { Routes, Route, Navigate } from "react-router";
import ProjectMindSet from '../Pages/ProjectMindSet';
import Home from '../Pages/HomePage';

export default function LayoutRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project-mindset" element={<ProjectMindSet />} /> 
        </Routes>
    );
}
