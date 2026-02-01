import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sommaire from "./Sommaire";
import ReactGuide from "./ReactGuide"; // Ton composant guide complet
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Sommaire />} />
                <Route path="/GuideReact" element={<ReactGuide />} />
            </Routes>
        </Router>
    );
}

export default App;
