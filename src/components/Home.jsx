import React, {useState} from "react";
import pic from "../assets/my_pic.jpeg";
import flogo from "../constants/frontend";
import blogo from "../constants/backend";
import dlogo from "../constants/dsa";
import experiences from "../constants/experience";

const Home = () => {
    const [active, setActive] = useState(0);
    return (
        <div className="w-full font-body bg-white dark:bg-black text-[#4b5563] dark:text-[#9ca3af]">
            {/* Home Section */}
            <div name="Home" className="w-full">
                <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row py-32">
                    <div className="flex flex-col justify-center h-full md:mr-8">
                        <h1 className="text-4xl sm:text-6xl font-bold text-[#000000] dark:text-white font-heading">
                            Hi, I'm Nitul Das!
                        </h1>
                        <p className="text-xl mt-2">
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
                        I am a <strong>full-stack developer</strong> with
                        expertise in{" "}
                        <strong>
                            HTML, CSS, JavaScript, React, Tailwind CSS, Node.js,
                            Express, and MongoDB
                        </strong>
                        . I have developed various web applications, including a
                        <strong>portfolio website</strong>, a{" "}
                        <strong>weather application</strong>, and a{" "}
                        <strong>Tic-Tac-Toe game</strong>, showcasing my ability
                        to build dynamic and interactive user interfaces.
                    </p>
                    <p className="text-lg mt-2 md:text-lg md:mt-2">
                        Beyond frontend development, I have expanded into{" "}
                        <strong>backend technologies</strong>, working with{" "}
                        <strong>Node.js, Express, and MongoDB</strong> to create
                        scalable and efficient web applications. My backend
                        knowledge allows me to develop{" "}
                        <strong>
                            RESTful APIs, handle databases, and build full-stack
                            applications
                        </strong>{" "}
                        seamlessly.
                    </p>
                    <p className="text-lg mt-2 md:text-lg md:mt-2">
                        I am passionate about building{" "}
                        <strong>end-to-end web solutions</strong>, continuously
                        learning new technologies, and refining my skills in{" "}
                        <strong>full-stack development</strong>.
                    </p>
                </div>
            </div>

            {/* Technology Section */}
            <div name="Technology" className="w-full">
                <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                    <div className="pb-4 md:pb-8 pt-4 md:pt-0">
                        <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-[#d1d5db] dark:border-[#374151] font-heading text-black dark:text-white">
                            Technology
                        </p>
                        <p className="text-lg mt-3 md:text-xl md:mt-4">
                            These are the technologies I've worked with:
                        </p>
                    </div>
                    <div>
                        <p className="text-2xl text-[#000000] dark:text-white underline">
                            Frontend Technology:
                        </p>
                        <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
                            {flogo.map(({id, icon, nam, style, url}) => (
                                <a
                                    key={id}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`shadow-md flex flex-row justify-center items-center hover:scale-105 duration-500 px-2 py-4 ${style}`}
                                >
                                    <p className="text-3xl text-center">
                                        {icon}
                                    </p>
                                    <p className="mt-2 text-center">{nam}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-2xl text-[#000000] dark:text-white underline">
                            Backend Technology:
                        </p>
                        <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 text-center py-12 px-8 sm:px-0">
                            {blogo.map(({id, icon, nam, style, url}) => (
                                <a
                                    key={id}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`shadow-md flex flex-row justify-center items-center hover:scale-105 duration-500 px-2 py-4 ${style}`}
                                >
                                    <p className="text-3xl text-center">
                                        {icon}
                                    </p>
                                    <p className="mt-2 text-center">{nam}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-2xl text-[#000000] dark:text-white underline">
                            Data Structure and Algorithm:
                        </p>
                        <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
                            {dlogo.map(({id, icon, nam, style, url}) => (
                                <a
                                    key={id}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`shadow-md flex flex-row justify-center items-center hover:scale-105 duration-500 px-2 py-4 ${style}`}
                                >
                                    <p className="text-3xl text-center">
                                        {icon}
                                    </p>
                                    <p className="mt-2 text-center">{nam}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Experience Section */}
            <div name="Experience" className="w-full">
                <div className="max-w-screen-lg mx-auto px-4 py-8">
                    <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-400 dark:border-gray-700 font-heading text-black dark:text-white">
                        Experience
                    </p>
                    <div className="flex flex-col md:flex-row mt-6">
                        {/* Sidebar */}
                        <div className="md:w-1/4 flex flex-col gap-4">
                            {experiences.map((exp, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActive(index)}
                                    className={`py-3 px-4 text-left rounded-lg transition-all duration-300 flex items-center gap-2 ${
                                        active === index
                                            ? "bg-gray-700 text-white"
                                            : "bg-gray-900 text-gray-400 hover:bg-gray-800"
                                    }`}
                                >
                                    {exp.logo && (
                                        <img
                                            src={exp.logo}
                                            alt={exp.company}
                                            className="w-8 h-8 rounded-full"
                                        />
                                    )}
                                    {exp.company}
                                </button>
                            ))}
                        </div>

                        {/* Experience Details */}
                        <div className="md:w-3/4 md:pl-8 mt-8 md:mt-0">
                            <h2 className="text-2xl font-bold text-black dark:text-white">
                                {experiences[active].role} @{" "}
                                {experiences[active].company}
                            </h2>
                            <p className="text-gray-500 mt-1">
                                {experiences[active].duration} •{" "}
                                {experiences[active].location}
                            </p>
                            <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                                {experiences[active].points.map(
                                    (point, idx) => (
                                        <li key={idx}>{point}</li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
