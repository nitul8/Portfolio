import React from "react";
import pic from "../assets/my_pic.jpeg";
import html from "../assets/logo/HTML.png";
import css from "../assets/logo/css.png";
import js from "../assets/logo/js.png";
import react from "../assets/logo/React.webp";
import tailwind from "../assets/logo/tailwind-css.webp";
import python from "../assets/logo/Python.png";
import cpp from "../assets/logo/C++_logo.png";
import github from "../assets/logo/github.png";
import nPm from "../assets/logo/npm.png";

// Logos array
const logo = [
    {
        id: 1,
        img: html,
        nam: "HTML",
        style: "shadow-orange-500",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        id: 2,
        img: css,
        nam: "CSS",
        style: "shadow-indigo-400",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        id: 3,
        img: js,
        nam: "JavaScript",
        style: "shadow-yellow-600",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        id: 4,
        img: react,
        nam: "React JS",
        style: "shadow-blue-600",
        url: "https://reactjs.org/",
    },
    {
        id: 5,
        img: tailwind,
        nam: "Tailwind CSS",
        style: "shadow-blue-400",
        url: "https://tailwindcss.com/",
    },
    {
        id: 6,
        img: python,
        nam: "Python",
        style: "shadow-yellow-400",
        url: "https://www.python.org/",
    },
    {
        id: 7,
        img: cpp,
        nam: "C/C++",
        style: "shadow-indigo-600",
        url: "https://isocpp.org/",
    },
    {
        id: 8,
        img: github,
        nam: "GitHub",
        style: "shadow-white",
        url: "https://github.com/nitul8",
    },
    {
        id: 9,
        img: nPm,
        nam: "NPM",
        style: "shadow-red-500",
        url: "https://www.npmjs.com/",
    },
];

const Home = () => {
    return (
        <div className="bg-gradient-to-b from-black to-gray-800">
            {/* Home Section */}
            <div name="Home" className="w-full">
                <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row py-32">
                    <div className="flex flex-col justify-center h-full md:mr-8">
                        <h1 className="text-4xl sm:text-6xl font-bold text-white font-serif">
                            Hi, I'm Nitul Das!
                        </h1>
                        <p className="text-gray-400 text-xl mt-2">
                            Crafting intelligent solutions with Machine Learning
                            and Modern Web Technology.
                        </p>
                    </div>
                    <div className="md:w-32 md:h-32 m-10">
                        <img
                            src={pic}
                            alt="Profile"
                            className="rounded-full border-4 border-gray-700 shadow-lg object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div
                name="About"
                className="w-full flex flex-col justify-center items-center text-white"
            >
                <div className="max-w-screen-lg p-4 mx-auto">
                    <div className="pb-2 md:pb-4 md:pt-0">
                        <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-400">
                            About
                        </p>
                    </div>
                    <p className="text-lg mt-2 md:text-lg md:mt-2 text-gray-400">
                        I have experience working with HTML, CSS, JavaScript
                        (JS), React, and Tailwind CSS. Throughout my projects,
                        I've developed various frontend applications including a
                        portfolio website to showcase my skills and projects, a
                        weather application to display weather information, and
                        a Tic-Tac-Toe game implemented using HTML, CSS, and
                        JavaScript. These projects demonstrate my proficiency in
                        building user interfaces and web applications using
                        modern frontend technologies and frameworks.
                    </p>
                    <br />
                    <p className="text-lg mt-2 md:text-lg md:mt-2 text-gray-400">
                        During my career, I've completed one-month internships
                        in frontend web development at Prodigy Infotech and
                        CodersCave. These experiences were invaluable for honing
                        my skills in HTML, CSS, JavaScript, React, and Tailwind
                        CSS, providing me with practical insights into
                        real-world projects and enhancing my proficiency in
                        frontend development.
                    </p>
                </div>
            </div>

            {/* Experience Section */}
            <div name="Experience" className=" w-full">
                <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                    <div className="pb-4 md:pb-8 pt-4 md:pt-0">
                        <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-400">
                            Experience
                        </p>
                        <p className="text-lg mt-3 md:text-xl md:mt-4">
                            These are the technologies I've worked with:
                        </p>
                    </div>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                        {logo.map(({id, img, nam, style, url}) => (
                            <a
                                key={id}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={
                                    "shadow-md flex flex-col justify-center items-center hover:scale-105 duration-500 py-2 rounded-lg " +
                                    style
                                }
                            >
                                <img
                                    src={img}
                                    alt={nam}
                                    className="w-8 mx-auto md:w-20"
                                />
                                <p className="mt-4">{nam}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div name="Contact" className="w-full h-screen text-white p-4">
                <div className="flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full">
                    <div className="pb-4 md:pb-8 pt-4 md:pt-0">
                        <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-400">
                            Contact
                        </p>
                        <p className="text-lg mt-3 md:text-xl md:mt-4">
                            Submit the form to get in contact with me.
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <form
                            action="https://getform.io/f/zbxdyolb"
                            method="POST"
                            className="flex flex-col w-full md:w-1/2"
                        >
                            <input
                                type="text"
                                name="Name"
                                placeholder="Enter your name"
                                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            />
                            <input
                                type="text"
                                name="Email"
                                placeholder="Enter your email"
                                className="my-2 md:my-3 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            />
                            <textarea
                                name="Comment"
                                rows="10"
                                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                                placeholder="Enter your comment"
                            ></textarea>
                            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 w-fit px-4 py-2 md:px-6 mx-auto md:py-3 mt-3 md:mt-5 flex items-center rounded-md cursor-pointer">
                                Let's Talk
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
