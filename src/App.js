import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Analytics} from "@vercel/analytics/react";

// Import components
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import ThemeColor from "./components/ThemeColor";
import Achievements from "./components/Achievements";

// Import Notes
import CProgramming from "./components/Notes/CProgramming";
import ReactJS from "./components/Notes/ReactJS/ReactJS";
import Notes from "./components/Notes";

function App() {
    return (
        <Router>
            <NavBar />
            <main className="w-full h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/achievement" element={<Achievements />} />
                    <Route path="/notes/*" element={<Notes />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* Notes Section */}
                    <Route
                        path="/notes/c-programming"
                        element={<CProgramming />}
                    />
                    <Route path="/notes/react-js" element={<ReactJS />} />
                </Routes>
            </main>
            <SocialLinks />
            <ThemeColor />
            <Analytics />
        </Router>
    );
}

export default App;
