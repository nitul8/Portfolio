import React from "react";

import LibraryDayQuiz from "../assets/photo/library-day-quiz.jpeg";
import CkbQuiz from "../assets/photo/ckb-quiz.jpeg";

const Achievements = () => {
    const achievements = [
        {
            id: 1,
            date: "12 August, 2024",
            vanue: "Jorhat Engineering College, Jorhat",
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
        {
            id: 2,
            date: "4 October, 2024",
            vanue: "CKB Commerce College, Jorhat",
            abt: [
                <p key="description">
                    Secured <strong>6th position</strong> in the All Assam
                    Inter-Institutional Quiz Competition, held on the occasion
                    of <strong>Diamond Jubilee</strong> of CKB Commerce College,
                    Jorhat organized by{" "}
                    <strong>CKB Commerce College, Jorhat</strong> on 4th
                    October, 2024, at MCC Auditorium, CKB Commerce College,
                    Jorhat. Teamed up with <strong>Maharnab Kashyap</strong> for
                    the event.
                </p>,
                <p key="qm">
                    <strong>Quiz Master:</strong> Dipankar Kaushik
                </p>,
            ],
            src: CkbQuiz,
        },
    ];

    return (
        <div
            name="Portfolio"
            className="w-full font-body bg-white dark:bg-black text-[#4b5563] dark:text-[#9ca3af]"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center px-4 py-32">
                <div className="pb-4 md:pb-8 pt-4 md:pt-0 text-center">
                    <p className="py-6 text-lg">
                        Check out some of my achievements:
                    </p>
                </div>
                <div className="px-4 sm:px-0 space-y-8">
                    {achievements.map(({id, date, abt, vanue, src}) => (
                        <div
                            key={id}
                            className="shadow-md shadow-gray-600 rounded-lg p-6 bg-gray-100 dark:bg-gray-900 grid grid-cols-1 sm:grid-cols-2 gap-4"
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
                            <div className="flex justify-center sm:justify-end">
                                <img
                                    src={src}
                                    alt={`Portfolio ${id}`}
                                    className="w-full sm:w-3/4 lg:w-2/3 object-cover duration-200 hover:scale-105 rounded-lg"
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
