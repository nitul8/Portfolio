import React from "react";
import {Link} from "react-router-dom";

const ReactJS = () => {
    const weeks = [
        {
            id: 1,
            ttl: "Week - 1",
            path: "/notes/react-js/week1", // Add path for navigation
        },
        {
            id: 2,
            ttl: "Week - 2",
            path: "/notes/react-js/week2", // Add path for navigation
        },
        {
            id: 3,
            ttl: "Week - 3",
            path: "/notes/react-js/week3", // Add path for navigation
        },
        {
            id: 4,
            ttl: "Week - 4",
            path: "/notes/react-js/week4", // Add path for navigation
        },
    ];
    return (
        <div className="w-full font-body bg-white dark:bg-black text-[#4b5563] dark:text-[#9ca3af]">
            <div name="React-Notes" className="w-full">
                <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center px-4 py-32">
                    <div className="pb-4 md:pb-8 pt-4 md:pt-0 text-center">
                        <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-400 text-black dark:text-white font-heading">
                            ReactJS Notes
                        </p>
                    </div>
                    <div className="mt-8 px-4 sm:px-0 space-y-8">
                        {weeks.map(({id, ttl, path}) => (
                            <Link
                                key={id}
                                to={path} // Navigate to the specified route
                                className="w-80 text-center shadow-md shadow-gray-600 rounded-lg p-6 bg-gray-100 dark:bg-gray-900 flex justify-center items-center hover:scale-105"
                            >
                                <p className="text-2xl font-semibold font-heading text-black dark:text-white">
                                    {ttl}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactJS;
