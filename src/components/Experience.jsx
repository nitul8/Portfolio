import React from "react";
import html from "../assets/logo/HTML.png";
import css from "../assets/logo/css.png";
import js from "../assets/logo/js.png";
import react from "../assets/logo/React.webp";
import tailwind from "../assets/logo/tailwind-css.webp";
import python from "../assets/logo/Python.png";
import cpp from "../assets/logo/C++_logo.png";
import github from "../assets/logo/github.png";
import nPm from "../assets/logo/npm.png";

const logo = [
    {
        id: 1,
        img: html,
        nam: "HTML",
        style: "shadow-orange-500",
    },
    {
        id: 2,
        img: css,
        nam: "CSS",
        style: "shadow-indigo-400",
    },
    {
        id: 3,
        img: js,
        nam: "JavaScript",
        style: "shadow-yellow-600",
    },
    {
        id: 4,
        img: react,
        nam: "React JS",
        style: "shadow-blue-600",
    },
    {
        id: 5,
        img: tailwind,
        nam: "Tailwind CSS",
        style: "shadow-blue-400",
    },
    {
        id: 6,
        img: python,
        nam: "Python",
        style: "shadow-yellow-400",
    },
    {
        id: 7,
        img: cpp,
        nam: "C/C++",
        style: "shadow-indigo-600",
    },
    {
        id: 8,
        img: github,
        nam: "GitHub",
        style: "shadow-white",
    },
    {
        id: 9,
        img: nPm,
        nam: "NPM",
        style: "shadow-red-500",
    },
];

const Experience = () => {
    return (
        <div
            name="Experience"
            className="bg-gradient-to-b from-gray-700 to-black w-full h-screen"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div className="pb-4 md:pb-8 pt-4 md:pt-0">
                    <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-400">
                        Experience
                    </p>
                    <p className="text-lg mt-3 md:text-xl md:mt-4">
                        These are the techonology I've worked with:
                    </p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {logo.map(({id, img, nam, style}) => (
                        <div
                            key={id}
                            className={
                                "shadow-md flex flex-col justify-center items-center hover:scale-105 duration-500 py-2 rounded-lg " +
                                " " +
                                style
                            }
                        >
                            <img
                                src={img}
                                alt={nam}
                                className="w-8 mx-auto md:w-20"
                            />
                            <p className="mt-4">{nam}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
