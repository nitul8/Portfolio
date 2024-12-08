import React from "react";

import LibraryDayQuiz from "../assets/photo/library-day-quiz.jpeg";

const Achievements = () => {
    const achievements = [
        {
            id: 1,
            date: "12 August, 2024",
            vanue: "Jorhat Engineering College",
            abt: [
                <p key="description">
                    Secured <strong>1st position</strong> in the Jorhat District
                    Inter-Institutional Quiz Competition, held on the occasion
                    of <strong>National Library Day</strong>, organized by{" "}
                    <strong>
                        District Library, Jorhat and Jorhat Engineering College
                    </strong>{" "}
                    on 12th August 2024, at Jorhat Engineering College. Teamed
                    up with <strong>Anurag Rajbonshi</strong> for the event.
                </p>,
                <p key="qm">
                    <strong>Quiz Master:</strong> Bikram Bora
                </p>,
            ],
            src: LibraryDayQuiz,
        },
    ];

    return (
        <div
            name="Portfolio"
            className="w-full font-body bg-white dark:bg-black text-[#4b5563] dark:text-[#9ca3af]"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center px-4 py-32">
                <div className="pb-4 md:pb-8 pt-4 md:pt-0 text-center">
                    <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-400 text-black dark:text-white font-heading">
                        Achievements
                    </p>
                    <p className="py-6 text-lg">
                        Check out some of my achievements:
                    </p>
                </div>
                <div className="px-10 sm:px-0 space-y-8">
                    {achievements.map(({id, date, abt, vanue, src}) => (
                        <div
                            key={id}
                            className="shadow-md shadow-gray-600 rounded-lg p-6 bg-gray-100 dark:bg-gray-900 grid grid-cols-2"
                        >
                            <div className="flex items-start">
                                <div className="flex-grow">
                                    <p className="text-2xl font-semibold font-heading text-black dark:text-white">
                                        {date}
                                    </p>
                                    <p className="text-xl font-semibold mb-4 font-heading text-black dark:text-white">
                                        {vanue}
                                    </p>
                                    <div className="text-lg space-y-1">
                                        {abt.map((feature, index) => (
                                            <div key={index}>{feature}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src={src}
                                    alt={`Portfolio ${id}`}
                                    className="w-2/3 object-cover duration-200 hover:scale-105 ml-4 "
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
