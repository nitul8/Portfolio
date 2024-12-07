import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom"; // Import useNavigate

import logo from "../assets/logo/nitul_logo.png";

function NavBar({onNotesClick}) {
    const [nav, setNav] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navigate = useNavigate(); // Initialize useNavigate

    const links = [
        {id: "1", link: "/", name: "Home"},
        {id: "2", link: "/portfolio", name: "Portfolio"},
        {id: "3", link: "/", name: "Achievements"},
        {id: "3", link: "/notes", name: "Notes"},
        {id: "4", link: "/contact", name: "Contact"},
    ];

    const handleLanguageChange = (language) => {
        setDropdownOpen(false);
        if (language === "English") {
            // Navigate to the Home page when "English" is selected
            navigate("/");
        } else if (language === "Bangla") {
            // Navigate to the Bangla page when "Bangla" is selected
            navigate("/bangla");
        }
    };

    return (
        <div className="flex justify-between w-full h-12 text-black dark:text-white bg-white dark:bg-black fixed md:h-20">
            <span className="font-logo mx-4 my-3 md:my-2 md:mx-4">
                <img
                    src={logo}
                    alt="LOGO"
                    className="w-18 h-8 md:w-24 md:h-10"
                />
            </span>

            {/* Main Navbar links */}
            <ul className="hidden md:flex items-center">
                {links.map(({id, link, name, isNotesLink}) => (
                    <li
                        key={id}
                        className="m-6 cursor-pointer text-gray-500 hover:scale-110 duration-500 text-md"
                    >
                        {isNotesLink ? (
                            // Handle Notes link separately, trigger onNotesClick
                            <span onClick={onNotesClick}>{name}</span>
                        ) : (
                            <Link
                                to={link}
                                className="text-gray-500 hover:scale-110 duration-500"
                            >
                                {name}
                            </Link>
                        )}
                    </li>
                ))}

                {/* Language Dropdown for Desktop */}
                <li
                    className="relative m-6 cursor-pointer text-gray-500 hover:scale-110 duration-500 text-md"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <span>Language</span>
                    {dropdownOpen && (
                        <ul className="absolute top-full left-0 bg-gray-800 text-white w-24 mt-2 rounded shadow-lg">
                            <li
                                onClick={() => handleLanguageChange("English")}
                                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                            >
                                English
                            </li>
                            <li
                                onClick={() => handleLanguageChange("Bangla")}
                                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                            >
                                বাংলা
                            </li>
                        </ul>
                    )}
                </li>
            </ul>

            {/* Mobile Menu Toggle */}
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-6 z-10 text-gray-500 my-4 md:hidden"
            >
                {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>

            {/* Mobile Menu */}
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white font-body dark:bg-black dark:text-white">
                    {links.map(({id, link, name, isNotesLink}) => (
                        <li
                            key={id}
                            className="m-6 cursor-pointer hover:scale-110 duration-500 text-xl"
                            onClick={() => {
                                if (isNotesLink) {
                                    onNotesClick();
                                }
                                setNav(false);
                            }}
                        >
                            {isNotesLink ? (
                                <span>{name}</span>
                            ) : (
                                <Link to={link} smooth duration={500}>
                                    {name}
                                </Link>
                            )}
                        </li>
                    ))}
                    {/* Mobile Language Dropdown */}
                    <li
                        className="m-6 cursor-pointer hover:scale-110 duration-500 text-xl relative"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        Language
                        {dropdownOpen && (
                            <ul className="absolute top-full left-1/2 transform -translate-x-1/2 w-32 mt-2 rounded shadow-lg">
                                <li
                                    onClick={() =>
                                        handleLanguageChange("English")
                                    }
                                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                                >
                                    English
                                </li>
                                <li
                                    onClick={() =>
                                        handleLanguageChange("Bangla")
                                    }
                                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                                >
                                    বাংলা
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            )}
        </div>
    );
}

export default NavBar;
