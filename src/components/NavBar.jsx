import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";

import logo from "../assets/logo/nitul_logo.png";

function NavBar({onNotesClick}) {
    const [nav, setNav] = useState(false);

    const links = [
        {id: "1", link: "/", name: "Home"},
        {id: "2", link: "/projects", name: "Projects"},
        {id: "3", link: "/achievement", name: "Achievements"},
        {id: "4", link: "/notes", name: "Notes"},
        {id: "5", link: "/contact", name: "Contact"},
    ];

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
                    </ul>
                )}
            </ul>
        </div>
    );
}

export default NavBar;
