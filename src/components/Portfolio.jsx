import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faCode} from "@fortawesome/free-solid-svg-icons";
import Prtflio from "../assets/video/Prtflio.png";
import StopWatch from "../assets/video/StopWatch.png";
import TicTacToe from "../assets/video/TicTacToe.png";
import WeatherApp from "../assets/video/WeatherApp.png";
import FaceBook from "../assets/video/FaceBook.png";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            title: "Stopwatch",
            abt: [
                "The Stopwatch project implements a simple, interactive stopwatch web application.",
                <strong key="features">Features:</strong>,
                <p key="start-stop-reset">
                    <strong>Start, Stop, and Reset Buttons:</strong> The
                    stopwatch includes buttons for starting, stopping, and
                    resetting the timer.
                </p>,
                <p key="timer-display">
                    <strong>Live Timer Display:</strong> Displays elapsed time
                    in hours, minutes, and seconds.
                </p>,
                <p key="interactive-ui">
                    <strong>Interactive UI:</strong> Users can control the timer
                    intuitively, making it a practical tool for measuring time
                    intervals.
                </p>,
            ],
            technologies: [
                <p key="html">
                    <strong>HTML:</strong> For structuring the application
                    layout.
                </p>,
                <p key="css">
                    <strong>CSS:</strong> For styling the stopwatch interface,
                    ensuring a visually clean design.
                </p>,
                <p key="javascript">
                    <strong>JavaScript:</strong> For the stopwatch logic,
                    managing timing intervals and handling start, stop, and
                    reset functions.
                </p>,
            ],
            src: StopWatch,
            demoLink: "https://nitul8.github.io/PRODIGY_WD_02/",
            codeLink: "https://github.com/nitul8/PRODIGY_WD_02",
        },
        {
            id: 2,
            title: "Tic Tac Toe",
            abt: [
                "Classic Tic Tac Toe game built with a simple and clean UI.",
                <strong key="features">Features:</strong>,
                <p key="two-player">
                    <strong>Two-player Mode:</strong> Allows friends to play
                    together.
                </p>,
                <p key="interactive-board">
                    <strong>Interactive Board:</strong> Updates as players make
                    their moves.
                </p>,
                <p key="game-outcomes">
                    <strong>Game Outcomes:</strong> Displays player wins,
                    losses, or a tie.
                </p>,
            ],
            technologies: [
                <p key="html">
                    <strong>HTML:</strong> For structuring the game layout.
                </p>,
                <p key="css">
                    <strong>CSS:</strong> For styling the game interface.
                </p>,
                <p key="javascript">
                    <strong>JavaScript:</strong> For game logic and
                    interactivity.
                </p>,
            ],
            src: TicTacToe,
            demoLink: "https://nitul8.github.io/PRODIGY_WD_03/",
            codeLink: "https://github.com/nitul8/PRODIGY_WD_03",
        },
        {
            id: 3,
            title: "Portfolio",
            abt: [
                "Personal portfolio showcasing skills, projects, and experience.",
                <strong key="features">Features:</strong>,
                "Visually appealing layout with sections for each project.",
                "Responsive design for compatibility on different devices.",
                "Code is organized and accessible on GitHub.",
            ],
            technologies: [
                <p key="react">
                    <strong>React:</strong> For building the user interface.
                </p>,
                <p key="css">
                    <strong>CSS:</strong> For responsive design and layout
                    styling.
                </p>,
            ],
            src: Prtflio,
            demoLink: "https://nitul8.github.io/PRODIGY_WD_04/",
            codeLink: "https://github.com/nitul8/PRODIGY_WD_04",
        },
        {
            id: 4,
            title: "Weather App",
            abt: [
                "Displays real-time weather data for various cities.",
                <strong key="features">Features:</strong>,
                "Fetches weather information from a reliable API source.",
                "Includes temperature, humidity, and condition display.",
                "Responsive layout for optimal viewing on mobile and desktop.",
            ],
            technologies: [
                <p key="html">
                    <strong>HTML:</strong> For structuring the application
                    layout.
                </p>,
                <p key="css">
                    <strong>CSS:</strong> For styling and responsiveness.
                </p>,
                <p key="javascript">
                    <strong>JavaScript:</strong> For API integration and data
                    handling.
                </p>,
            ],
            src: WeatherApp,
            demoLink: "#",
            codeLink: "https://github.com/nitul8/PRODIGY_WD_05",
        },
        {
            id: 5,
            title: "Facebook Clone",
            abt: [
                "Clone of Facebook’s main page with basic social features.",
                <strong key="features">Features:</strong>,
                "User interface includes feed, posts, and a sidebar.",
                "Displays posts dynamically with minimal styling.",
                "Utilizes component-based design for scalability.",
            ],
            technologies: [
                <p key="react">
                    <strong>React:</strong> For component-based structure.
                </p>,
                <p key="css">
                    <strong>CSS:</strong> For styling and layout.
                </p>,
                <p key="javascript">
                    <strong>JavaScript:</strong> For handling interactions and
                    UI updates.
                </p>,
            ],
            src: FaceBook,
            demoLink: "#",
            codeLink: "https://github.com/nitul8/FaceBook_Clone",
        },
    ];

    return (
        <div
            name="Portfolio"
            className="w-full font-body bg-white dark:bg-black text-[#4b5563] dark:text-[#9ca3af]"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center px-4 py-32">
                <div className="pb-4 md:pb-8 pt-4 md:pt-0 text-center">
                    <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-400 font-serif text-black dark:text-white">
                        Portfolio
                    </p>
                    <p className="py-6 text-lg">
                        Check out some of my projects:
                    </p>
                </div>
                <div className="px-10 sm:px-0 space-y-8">
                    {portfolios.map(
                        ({
                            id,
                            title,
                            abt,
                            technologies,
                            src,
                            demoLink,
                            codeLink,
                        }) => (
                            <div
                                key={id}
                                className="shadow-md shadow-gray-600 rounded-lg p-6 bg-gray-100 dark:bg-gray-900"
                            >
                                <div className="flex items-start">
                                    <div className="flex-grow">
                                        <p className="text-2xl font-semibold mb-2 font-heading text-black dark:text-white">
                                            {title}
                                        </p>
                                        <div className="flex justify-center">
                                            <img
                                                src={src}
                                                alt={`Portfolio ${id}`}
                                                className="w-2/3 object-cover duration-200 hover:scale-105 pb-8"
                                            />
                                        </div>

                                        <div className=" text-sm md:text-lg space-y-1">
                                            {abt.map((feature, index) => (
                                                <div key={index}>{feature}</div>
                                            ))}
                                        </div>
                                        <div className="my-4">
                                            <p className="font-semibold font-heading text-black dark:text-white text-xl">
                                                Technologies:
                                            </p>
                                            <ul className="text-sm md:text-lg space-y-1">
                                                {technologies.map(
                                                    (tech, index) => (
                                                        <li key={index}>
                                                            {tech}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-4 space-x-4">
                                    {demoLink && (
                                        <a
                                            href={demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-full hover:bg-blue-600 duration-200"
                                        >
                                            <FontAwesomeIcon
                                                icon={faPlay}
                                                className="text-white text-xl"
                                            />
                                        </a>
                                    )}
                                    <a
                                        href={codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 flex items-center justify-center bg-gray-500 rounded-full hover:bg-gray-600 duration-200"
                                    >
                                        <FontAwesomeIcon
                                            icon={faCode}
                                            className="text-white text-xl"
                                        />
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

export default Portfolio;
