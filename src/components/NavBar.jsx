import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";
import logo from "../assets/logo/nitul_logo.png";

function NavBar() {
    const [nav, setNav] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const links = [
        {id: "1", link: "Home"},
        {id: "2", link: "About"},
        {id: "3", link: "Portfolio"},
        {id: "4", link: "Experience"},
        {id: "5", link: "Notes"},
        {id: "6", link: "Contact"},
    ];

    const handleLanguageChange = (language) => {
        if (language === "English") {
            // Close dropdown and scroll to homepage
            setDropdownOpen(false);
            document
                .getElementById("home")
                .scrollIntoView({behavior: "smooth"});
        } else if (language === "Bangla") {
            // Show alert and close dropdown
            setDropdownOpen(false);
            alert("This feature is yet to be built.");
        }
    };

    return (
        <div className="flex justify-between w-full h-12 text-white bg-black fixed md:h-20">
            <span className="font-logo mx-4 my-3 md:my-2 md:mx-4">
                <img
                    src={logo}
                    alt="LOGO"
                    className="w-8 h-8 md:w-24 md:h-10"
                />
            </span>

            {/* Main Navbar links */}
            <ul className="hidden md:flex items-center">
                {links.map(({id, link}) => (
                    <li
                        key={id}
                        className="m-6 cursor-pointer text-gray-500 hover:scale-110 duration-500 text-md"
                    >
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
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
                                Bangla
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
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500">
                    {links.map(({id, link}) => (
                        <li
                            key={id}
                            className="m-6 cursor-pointer hover:scale-110 duration-500 text-xl"
                        >
                            <Link
                                onClick={() => setNav(!nav)}
                                to={link}
                                smooth
                                duration={500}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                    {/* Mobile Language Dropdown */}
                    <li
                        className="m-6 cursor-pointer hover:scale-110 duration-500 text-xl relative"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        Language
                        {dropdownOpen && (
                            <ul className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white w-32 mt-2 rounded shadow-lg">
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
                                    Bangla
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
