import React from "react";

const About = () => {
    return (
        <div
            name="About"
            className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-700 to to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto">
                <div className="pb-8 pt-4 md:pt-0">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-400">
                        About
                    </p>
                </div>
                <p className="text-xl mt-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sit doloremque expedita placeat nihil, vel sunt alias
                    dignissimos inventore ea sapiente minima voluptatum tempora,
                    quam fugiat ratione iste doloribus. Aliquid molestias
                    maiores dolores distinctio corrupti unde quidem laudantium
                    beatae, cumque, dicta alias voluptatem dignissimos dolore
                    autem fugiat cum reiciendis neque saepe.
                </p>
                <br />
                <p className="text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque animi ullam distinctio a suscipit dolorem, quis
                    eius voluptate sapiente exercitationem aliquam nam culpa.
                    Minus iste consectetur doloribus ducimus impedit mollitia,
                    eos enim at laborum sequi dolore earum in ab quaerat harum
                    magnam perspiciatis odit maxime nihil libero. Omnis, nam
                    eveniet.
                </p>
            </div>
        </div>
    );
};

export default About;
