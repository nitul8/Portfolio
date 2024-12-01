import React from "react";
import pic from "../assets/my_pic.jpeg";
import html from "../assets/logo/HTML.png";
import css from "../assets/logo/css.png";
import js from "../assets/logo/js.png";
import react from "../assets/logo/React.webp";
import tailwind from "../assets/logo/tailwind-css.webp";
import python from "../assets/logo/Python.png";
import cpp from "../assets/logo/C++_logo.png";
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
        img: nPm,
        nam: "NPM",
        style: "shadow-red-500",
        url: "https://www.npmjs.com/",
    },
];

const Home = () => {
    return (
        <div className="w-full font-body bg-white dark:bg-black text-[#4b5563] dark:text-[#9ca3af]">
            {/* Home Section */}
            <div name="Home" className="w-full">
                <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row py-32">
                    <div className="flex flex-col justify-center h-full md:mr-8">
                        <h1 className="text-4xl sm:text-6xl font-bold text-[#000000] dark:text-white font-heading">
                            Hi, I'm Nitul Das!
                        </h1>
                        <p className=" text-xl mt-2">
                            Crafting intelligent solutions with Machine Learning
                            and Modern Web Technology.
                        </p>
                    </div>
                    <div className="md:w-32 md:h-32 m-10">
                        <img
                            src={pic}
                            alt="Profile"
                            className="rounded-full border-4 border-[#d1d5db] dark:border-[#374151] shadow-lg object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div
                name="About"
                className="w-full flex flex-col justify-center items-center"
            >
                <div className="max-w-screen-lg p-4 mx-auto">
                    <div className="pb-2 md:pb-4 md:pt-0">
                        <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-[#d1d5db] dark:border-[#374151] font-heading text-black dark:text-white">
                            About
                        </p>
                    </div>
                    <p className="text-lg mt-2 md:text-lg md:mt-2">
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
                    <p className="text-lg mt-2 md:text-lg md:mt-2">
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
            <div name="Experience" className="w-full">
                <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                    <div className="pb-4 md:pb-8 pt-4 md:pt-0">
                        <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-[#d1d5db] dark:border-[#374151] font-heading text-black dark:text-white">
                            Experience
                        </p>
                        <p className="text-lg mt-3 md:text-xl md:mt-4 ">
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
                                    "shadow-md flex flex-col justify-center items-center hover:scale-105 duration-500 py-2 " +
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
        </div>
    );
};

export default Home;
