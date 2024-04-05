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
        },
        {
            id: 2,
            src: StopWatch,
        },
        {
            id: 3,
            src: TicTacToe,
        },
        {
            id: 4,
            src: Prtflio,
        },
        {
            id: 5,
            src: WeatherApp,
        },
        {
            id: 6,
            src: FaceBook,
        },
    ];
    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black via-black to-gray-700 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full">
                <div className="pb-8 pt-4 md:pt-0">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-400">
                        Portfolio
                    </p>
                    <p className="py-6">Check some of the works:</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({id, src}) => (
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
                                <button className="w-1/2 px-4 py-2 m-4 duration-200 hover:scale-105">
                                    Demo
                                </button>
                                <button className="w-1/2 px-4 py-2 m-4 duration-200 hover:scale-105">
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
