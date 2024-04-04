import React from "react";
import pic from "../assets/my_pic.jpeg";
import {FaArrowRight} from "react-icons/fa6";
import SocialLinks from "./SocialLinks";

const Home = () => {
    return (
        <div
            name="Home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-700"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
                <div>
                    <SocialLinks />
                </div>
                <div className="flex flex-col justify-center h-full">
                    <h1 className="text-4xl sm:text-7xl font-bold text-white">
                        I'm a Frontend Developer
                    </h1>
                    <p className="text-gray-400 py-4 max-w-md">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Consequuntur atque reiciendis doloribus quae quia
                        ipsam, qui cupiditate ex ut! Vitae ut explicabo
                        distinctio esse commodi voluptas a laborum, nobis,
                        soluta doloremque beatae sunt harum hic. Similique,
                        minus quisquam.
                    </p>
                    <div>
                        <button className="group text-white bg-gradient-to-r from-cyan-500 to-blue-500 w-fit px-4 py-2 md:px-6 md:py-3 my-2 flex items-center rounded-md hover:bg-gray-600 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300 pl-1">
                                <FaArrowRight size={20} />
                            </span>
                        </button>
                    </div>
                </div>
                <div className="md:w-2/5">
                    <img
                        src={pic}
                        alt="pic"
                        className="rounded-2xl mx-auto w-2/3 md:w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
