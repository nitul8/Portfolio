// App.jsx
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Notes from "./components/Notes";
import Bangla from "./components/Bangla";

function App() {
    return (
        <Router>
            <NavBar />
            <div className="w-full h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/notes" element={<Notes />} />
                    <Route path="/bangla" element={<Bangla />} />
                </Routes>
            </div>
            <SocialLinks />
        </Router>
    );
}

export default App;
