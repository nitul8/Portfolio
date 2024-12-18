import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Analytics} from "@vercel/analytics/react"; // Import Vercel Analytics

// Import components
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Bangla from "./components/Bangla";
import ThemeColor from "./components/ThemeColor";
import Achievements from "./components/Achievements";

//Import Notes
import CProgramming from "./components/Notes/CProgramming";
import ReactJS from "./components/Notes/ReactJS/ReactJS";
import Week1 from "./components/Notes/ReactJS/Week1";

function App() {
    return (
        <Router>
            {/* Navigation Bar */}
            <NavBar />

            {/* Main Content Area */}
            <main className="w-full h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/achievement" element={<Achievements />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route
                        path="/notes/c-programming"
                        element={<CProgramming />}
                    />
                    <Route path="/notes/react-js" element={<ReactJS />} />
                    <Route path="/notes/react-js/week1" element={<Week1 />} />
                    <Route path="/bangla" element={<Bangla />} />
                </Routes>
            </main>

            {/* Social Links */}
            <SocialLinks />

            <ThemeColor />

            {/* Vercel Analytics */}
            <Analytics />
        </Router>
    );
}

export default App;
