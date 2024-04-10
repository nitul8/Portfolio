import React from "react";

const About = () => {
    return (
        <div
            name="About"
            className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-700 to to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto">
                <div className="pb-2 md:pb-4 md:pt-0">
                    <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-400">
                        About
                    </p>
                </div>
                <p className="text-lg mt-3 md:text-xl md:mt-4">
                    I have experience working with HTML, CSS, JavaScript (JS),
                    React, and Tailwind CSS. Throughout my projects, I've
                    developed various frontend applications including a
                    portfolio website to showcase my skills and projects, a
                    weather application to display weather information, and a
                    Tic-Tac-Toe game implemented using HTML, CSS, and
                    JavaScript. These projects demonstrate my proficiency in
                    building user interfaces and web applications using modern
                    frontend technologies and frameworks.
                </p>
                <br />
                <p className="text-xl">
                    During my career, I've completed one-month internships in
                    frontend web development at Prodigy Infotech and CodersCave.
                    These experiences were invaluable for honing my skills in
                    HTML, CSS, JavaScript, React, and Tailwind CSS, providing me
                    with practical insights into real-world projects and
                    enhancing my proficiency in frontend development.
                </p>
            </div>
        </div>
    );
};

export default About;
