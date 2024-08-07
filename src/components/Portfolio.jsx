import React from "react";
import Prtflio from "../assets/video/Prtflio.png";
import ResLand from "../assets/video/ResLand.png";
import StopWatch from "../assets/video/StopWatch.png";
import TicTacToe from "../assets/video/TicTacToe.png";
import WeatherApp from "../assets/video/WeatherApp.png";
import FaceBook from "../assets/video/FaceBook.png";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: ResLand,
            //demoLink : 'https://nitul8.github.io/PRODIGY_WD_03/',
            codeLink: "https://github.com/nitul8/PRODIGY_WD_01",
        },
        {
            id: 2,
            src: StopWatch,
            demoLink: "https://nitul8.github.io/PRODIGY_WD_02/",
            codeLink: "https://github.com/nitul8/PRODIGY_WD_02",
        },
        {
            id: 3,
            src: TicTacToe,
            demoLink: "https://nitul8.github.io/PRODIGY_WD_03/",
            codeLink: "https://github.com/nitul8/PRODIGY_WD_03",
        },
        {
            id: 4,
            src: Prtflio,
            demoLink: "https://nitul8.github.io/PRODIGY_WD_04/",
            codeLink: "https://github.com/nitul8/PRODIGY_WD_04",
        },
        {
            id: 5,
            src: WeatherApp,
            //demoLink : 'https://nitul8.github.io/PRODIGY_WD_03/',
            codeLink: "https://github.com/nitul8/PRODIGY_WD_05",
        },
        {
            id: 6,
            src: FaceBook,
            //demoLink : 'https://nitul8.github.io/PRODIGY_WD_03/',
            codeLink: "https://github.com/nitul8/FaceBook_Clone",
        },
    ];
    return (
        <div
            name="Portfolio"
            className="bg-gradient-to-b from-black via-black to-gray-700 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full">
                <div className="pb-4 md:pb-8 pt-4 md:pt-0">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-400">
                        Portfolio
                    </p>
                    <p className="py-6 text-lg">Check some of the works:</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({id, src, demoLink, codeLink}) => (
                        <div
                            key={id}
                            className="shadow-md shadow-gray-600 rounded-lg"
                        >
                            <img
                                src={src}
                                alt="Responsive Landing Page"
                                className="rounded-lg duration-200 hover:scale-105"
                            />
                            <div className="flex justify-center items-center">
                                <a
                                    href={demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-1/2 px-4 py-2 m-4 duration-200 hover:scale-105 text-center"
                                >
                                    <button className="w-full">Demo</button>
                                </a>
                                <a
                                    href={codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-1/2 px-4 py-2 m-4 duration-200 hover:scale-105 text-center"
                                >
                                    <button className="w-full">Code</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
