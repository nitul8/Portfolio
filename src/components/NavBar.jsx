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
        <div className="flex justify-between items-center w-full h-12 md:h-20 fixed bg-white dark:bg-black text-black dark:text-white px-4 md:px-8">
            {/* Logo */}
            <Link to="/" className="font-logo">
                <img
                    src={logo}
                    alt="LOGO"
                    className="w-18 h-8 md:w-24 md:h-10"
                />
            </Link>

            {/* Desktop Navbar */}
            <ul className="hidden md:flex items-center space-x-10">
                {links.map(({id, link, name}) => (
                    <li
                        key={id}
                        className="text-gray-500 hover:scale-110 hover:underline duration-300"
                    >
                        {name === "Notes" && onNotesClick ? (
                            <button
                                onClick={onNotesClick}
                                className="focus:outline-none"
                            >
                                {name}
                            </button>
                        ) : (
                            <Link to={link}>{name}</Link>
                        )}
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer z-20 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>

            {/* Mobile Menu */}
            {nav && (
                <ul className="fixed top-0 left-0 w-full h-screen bg-white dark:bg-black flex flex-col justify-center items-center z-10">
                    {links.map(({id, link, name}) => (
                        <li key={id} className="text-xl my-6">
                            {name === "Notes" && onNotesClick ? (
                                <button
                                    onClick={() => {
                                        onNotesClick();
                                        setNav(false);
                                    }}
                                    className="focus:outline-none"
                                >
                                    {name}
                                </button>
                            ) : (
                                <Link to={link} onClick={() => setNav(false)}>
                                    {name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default NavBar;
