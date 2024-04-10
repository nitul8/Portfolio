import React from "react";
import pic from "../assets/my_pic.jpeg";
import {FaArrowRight} from "react-icons/fa6";
import SocialLinks from "./SocialLinks";
import {Link} from "react-scroll";

const Home = () => {
    return (
        <div
            name="Home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-700"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
                <div>
                    <SocialLinks />
                </div>
                <div className="flex flex-col justify-center h-full">
                    <h1 className="text-4xl sm:text-7xl font-bold text-white">
                        I'm a Frontend Developer
                    </h1>
                    <p className="text-gray-400 py-4 max-w-md">
                        I've worked extensively with HTML, CSS, JavaScript (JS),
                        React, and Tailwind CSS. My projects include a portfolio
                        website, a weather application, and a Tic-Tac-Toe game.
                        These showcase my skills in frontend development,
                        emphasizing user interface design and web application
                        creation.
                    </p>
                    <div>
                        <Link
                            to="Portfolio"
                            smooth
                            duration={500}
                            className="group text-white bg-gradient-to-r from-cyan-500 to-blue-500 w-fit px-4 py-2 md:px-6 md:py-3 flex items-center rounded-md cursor-pointer"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300 pl-1">
                                <FaArrowRight size={20} />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="md:w-2/5">
                    <img
                        src={pic}
                        alt="pic"
                        className="rounded-2xl mx-auto w-2/3 md:w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
