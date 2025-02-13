import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom"; // Import useNavigate
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";

import logo from "../assets/logo/nitul_logo.png";

function NavBar({onNotesClick}) {
    const [nav, setNav] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false); // Track Language dropdown state

    const navigate = useNavigate(); // Initialize useNavigate

    const handleLanguageChange = (language) => {
        if (language === "English") {
            navigate("/"); // Navigate to English version
        } else if (language === "Bangla") {
            navigate("/bangla"); // Navigate to Bangla version
        }
    };

    const links = [
        {id: "1", link: "/", name: "Home"},
        {id: "2", link: "/projects", name: "Projects"},
        {id: "3", link: "/achievement", name: "Achievements"},
        {id: "4", link: "/notes", name: "Notes"},
        {id: "5", link: "/contact", name: "Contact"},
    ];
    // Initial state set to false
    const [isToggledLanguage, setIsToggledLanguage] = useState(false);

    // Function to toggle between true and false
    const handleLanguage = () => {
        setIsToggledLanguage(!isToggledLanguage);
    };

    return (
        <div className="flex justify-between w-full h-12 text-black dark:text-white bg-white dark:bg-black fixed md:h-20">
            <Link to="/" className="font-logo mx-4 my-3 md:my-2 md:mx-4">
                <img
                    src={logo}
                    alt="LOGO"
                    className="w-18 h-8 md:w-24 md:h-10"
                />
            </Link>

            {/* Main Navbar Links */}
            <ul className="hidden md:flex items-center">
                {links.map(({id, link, name}) => (
                    <li
                        key={id}
                        className="m-6 cursor-pointer text-gray-500 hover:scale-110 duration-500 text-md"
                    >
                        <Link
                            to={link}
                            className="text-gray-500 hover:scale-110 duration-500"
                        >
                            {name}
                        </Link>
                    </li>
                ))}

                {/* Language Dropdown */}
                <li className="relative m-6 text-gray-500 text-md">
                    <Menu as="div" className="relative inline-block text-left">
                        <MenuButton
                            className="inline-flex justify-center rounded-md px-3 py-2  hover:scale-110 duration-500"
                            onClick={() => setIsLanguageOpen(!isLanguageOpen)} // Toggle Language dropdown
                        >
                            Language
                        </MenuButton>
                        {isLanguageOpen && (
                            <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                <MenuItem>
                                    <button
                                        onClick={() =>
                                            handleLanguageChange("English")
                                        }
                                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        English
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button
                                        onClick={() =>
                                            handleLanguageChange("Bangla")
                                        }
                                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        বাংলা
                                    </button>
                                </MenuItem>
                            </MenuItems>
                        )}
                    </Menu>
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
                    {links.map(({id, link, name}) => (
                        <li
                            key={id}
                            className="m-6 cursor-pointer hover:scale-110 duration-500 text-xl"
                            onClick={() => setNav(false)} // Close the menu when a link is clicked
                        >
                            <Link to={link}>{name}</Link>
                        </li>
                    ))}

                    {/* Mobile Language Dropdown */}
                    <li
                        onClick={handleLanguage}
                        className="relative m-6 cursor-pointer hover:scale-110 duration-500 text-xl text-center"
                    >
                        Language
                        <ul
                            className={`mt-2 bg-gray-300 text-white rounded shadow-lg ${
                                isToggledLanguage ? "block" : "hidden"
                            }`}
                        >
                            <li
                                onClick={() => {
                                    handleLanguageChange("English");
                                    setNav(false); // Close the menu when language is selected
                                }}
                                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                            >
                                English
                            </li>
                            <li
                                onClick={() => {
                                    handleLanguageChange("Bangla");
                                    setNav(false); // Close the menu when language is selected
                                }}
                                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                            >
                                বাংলা
                            </li>
                        </ul>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default NavBar;
