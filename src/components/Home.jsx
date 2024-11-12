import React from "react";
import pic from "../assets/my_pic.jpeg";

const Home = () => {
    return (
        <div
            name="Home"
            className="w-full bg-gradient-to-b from-black to-gray-950"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row py-32">
                <div className="flex flex-col justify-center h-full md:mr-8">
                    <h1 className="text-4xl sm:text-6xl font-bold text-white font-serif">
                        Hi, I'm Nitul Das!
                    </h1>
                    <p className="text-gray-400 text-xl mt-2">
                        Crafting intelligent solutions with Machine Learning and
                        Modern Web Technology.
                    </p>
                </div>
                <div className="md:w-32 md:h-32 m-10">
                    <img
                        src={pic}
                        alt="Profile"
                        className="rounded-full border-4 border-gray-700 shadow-lg object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
