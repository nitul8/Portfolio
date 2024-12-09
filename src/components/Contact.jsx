import React from "react";

const Contact = () => {
    return (
        <div
            name="Contact"
            className="w-full h-screen font-body bg-white dark:bg-black text-[#4b5563] dark:text-[#9ca3af]"
        >
            <div className="flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full">
                <div className="pb-4 md:pb-8 pt-4 md:pt-0 text-center">
                    <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-400 font-heading text-black dark:text-white">
                        Contact
                    </p>
                    <p className="text-lg mt-3 md:text-xl md:mt-4">
                        Submit the form to get in contact with me.
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <form
                        action="https://getform.io/f/zbxdyolb"
                        method="POST"
                        className="flex flex-col w-full md:w-1/2"
                    >
                        <input
                            type="text"
                            name="Name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-gray-600 dark:text-white focus:outline-none"
                        />
                        <input
                            type="text"
                            name="Email"
                            placeholder="Enter your email"
                            className="my-2 md:my-3 p-2 bg-transparent border-2 rounded-md text-gray-600 dark:text-white focus:outline-none"
                        />
                        <textarea
                            name="Comment"
                            rows="10"
                            className="p-2 bg-transparent border-2 rounded-md  text-gray-600 dark:text-white focus:outline-none"
                            placeholder="Enter your comment"
                        ></textarea>
                        <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 w-fit px-4 py-2 md:px-6 mx-auto md:py-3 mt-3 md:mt-5 flex items-center rounded-md cursor-pointer">
                            Let's Talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
