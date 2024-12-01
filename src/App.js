import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Analytics} from "@vercel/analytics/react"; // Import Vercel Analytics

// Import components
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Notes from "./components/Notes";
import Bangla from "./components/Bangla";
import ThemeColor from "./components/ThemeColor";

function App() {
    return (
        <Router>
            {/* Navigation Bar */}
            <NavBar />

            {/* Main Content Area */}
            <main className="w-full h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/notes" element={<Notes />} />
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
