import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faCode} from "@fortawesome/free-solid-svg-icons";
import {FaReact, FaJs, FaCss3Alt, FaHtml5} from "react-icons/fa";
import {RiTailwindCssFill} from "react-icons/ri";
import Prtflio from "../assets/video/Prtflio.png";
import StopWatch from "../assets/video/StopWatch.png";
import TicTacToe from "../assets/video/TicTacToe2.png";
import WeatherApp from "../assets/video/WeatherApp.png";
import FaceBook from "../assets/video/FaceBook.png";

const projects = [
    {
        id: 1,
        title: "Portfolio",
        description:
            "Personal portfolio showcasing skills, projects, and experience.",
        technologies: [
            {
                icon: <FaReact className="inline mr-1 text-blue-400" />,
                name: "React",
            },
            {
                icon: (
                    <RiTailwindCssFill className="inline mr-1 text-teal-400" />
                ),
                name: "Tailwind CSS",
            },
            {
                icon: <FaJs className="inline mr-1 text-yellow-400" />,
                name: "JavaScript",
            },
            {
                icon: <FaHtml5 className="inline mr-1 text-red-400" />,
                name: "HTML5",
            },
            {
                icon: <FaCss3Alt className="inline mr-1 text-blue-600" />,
                name: "CSS3",
            },
        ],
        image: Prtflio,
        demoLink: "https://nituldas.vercel.app/",
        codeLink: "https://github.com/nitul8/Portfolio",
    },
    {
        id: 2,
        title: "Stopwatch",
        description:
            "A simple and interactive stopwatch web application to check time.",
        technologies: [
            {
                icon: <FaHtml5 className="inline mr-1 text-red-400" />,
                name: "HTML5",
            },
            {
                icon: <FaCss3Alt className="inline mr-1 text-blue-600" />,
                name: "CSS3",
            },
            {
                icon: <FaJs className="inline mr-1 text-yellow-400" />,
                name: "JavaScript",
            },
        ],
        image: StopWatch,
        demoLink: "https://nitul8.github.io/PRODIGY_WD_02/",
        codeLink: "https://github.com/nitul8/PRODIGY_WD_02",
    },
    {
        id: 3,
        title: "Tic Tac Toe",
        description:
            "Classic Tic Tac Toe game with a clean UI and two-player mode.",
        technologies: [
            {
                icon: <FaReact className="inline mr-1 text-blue-400" />,
                name: "React",
            },
            {
                icon: (
                    <RiTailwindCssFill className="inline mr-1 text-teal-400" />
                ),
                name: "Tailwind CSS",
            },
            {
                icon: <FaJs className="inline mr-1 text-yellow-400" />,
                name: "JavaScript",
            },
        ],
        image: TicTacToe,
        demoLink: "https://tic-tac-toe-nitul.vercel.app/",
        codeLink: "https://github.com/nitul8/Tic-Tac-Toe",
    },
    {
        id: 4,
        title: "Weather App",
        description:
            "Displays real-time weather data for various cities using weather API.",
        technologies: [
            {
                icon: <FaHtml5 className="inline mr-1 text-red-400" />,
                name: "HTML5",
            },
            {
                icon: <FaCss3Alt className="inline mr-1 text-blue-600" />,
                name: "CSS3",
            },
            {
                icon: <FaJs className="inline mr-1 text-yellow-400" />,
                name: "JavaScript",
            },
        ],
        image: WeatherApp,
        demoLink: "#",
        codeLink: "https://github.com/nitul8/PRODIGY_WD_05",
    },
    {
        id: 5,
        title: "Facebook Clone",
        description:
            "Clone of Facebook’s main page with basic social features.",
        technologies: [
            {
                icon: <FaReact className="inline mr-1 text-blue-400" />,
                name: "React",
            },
            {
                icon: <FaCss3Alt className="inline mr-1 text-blue-600" />,
                name: "CSS3",
            },
            {
                icon: <FaJs className="inline mr-1 text-yellow-400" />,
                name: "JavaScript",
            },
        ],
        image: FaceBook,
        demoLink: "#",
        codeLink: "https://github.com/nitul8/FaceBook_Clone",
    },
];

const Projects = () => {
    return (
        <div className="w-full min-h-screen bg-white dark:bg-black text-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {projects.map(
                        ({
                            id,
                            title,
                            description,
                            technologies,
                            image,
                            demoLink,
                            codeLink,
                        }) => (
                            <div
                                key={id}
                                className="p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 dark:shadow-gray-400"
                            >
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                                    {title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-100 px-2 py-1 text-xs rounded-md text-black flex items-center"
                                        >
                                            {tech.icon} {tech.name}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-8 justify-center bottom-0">
                                    {demoLink && (
                                        <a
                                            href={demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-red-400 text-lg"
                                        >
                                            <FontAwesomeIcon icon={faPlay} />
                                        </a>
                                    )}
                                    <a
                                        href={codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-gray-400 text-lg"
                                    >
                                        <FontAwesomeIcon icon={faCode} />
                                    </a>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Projects;
