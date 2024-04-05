import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";

function NavBar() {
    const [nav, setNav] = useState(false);

    const links = [
        {id: "1", link: "Home"},
        {id: "2", link: "About"},
        {id: "3", link: "Portfolio"},
        {id: "4", link: "Experience"},
        {id: "5", link: "Contact"},
        {id: "6", link: "Language"},
    ];
    return (
        <div className="flex justify-between w-full h-12 text-white bg-black fixed md:h-20">
            <span className="font-logo text-3xl mx-4 my-3 md:m-6 md:text-5xl">
                Nitul Das
            </span>
            <ul className="hidden md:flex">
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
            </ul>
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-6 z-10 text-gray-500 my-4 md:hidden"
            >
                {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>
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
                </ul>
            )}
        </div>
    );
}
export default NavBar;
