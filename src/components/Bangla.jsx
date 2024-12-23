import React from "react";
import pic from "../assets/my_pic.jpeg";
import html from "../assets/logo/HTML.png";
import css from "../assets/logo/css.png";
import js from "../assets/logo/js.png";
import react from "../assets/logo/React.webp";
import tailwind from "../assets/logo/tailwind-css.webp";
import python from "../assets/logo/Python.png";
import cpp from "../assets/logo/C++_logo.png";
import nPm from "../assets/logo/npm.png";

// Logos array
const logo = [
    {
        id: 1,
        img: html,
        nam: "HTML",
        style: "shadow-orange-500",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        id: 2,
        img: css,
        nam: "CSS",
        style: "shadow-indigo-400",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        id: 3,
        img: js,
        nam: "JavaScript",
        style: "shadow-yellow-600",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        id: 4,
        img: react,
        nam: "React JS",
        style: "shadow-blue-600",
        url: "https://reactjs.org/",
    },
    {
        id: 5,
        img: tailwind,
        nam: "Tailwind CSS",
        style: "shadow-blue-400",
        url: "https://tailwindcss.com/",
    },
    {
        id: 6,
        img: python,
        nam: "Python",
        style: "shadow-yellow-400",
        url: "https://www.python.org/",
    },
    {
        id: 7,
        img: cpp,
        nam: "C/C++",
        style: "shadow-indigo-600",
        url: "https://isocpp.org/",
    },
    {
        id: 8,
        img: nPm,
        nam: "NPM",
        style: "shadow-red-500",
        url: "https://www.npmjs.com/",
    },
];

const Home = () => {
    return (
        <div className="w-full font-bnbody bg-white dark:bg-black text-[#4b5563] dark:text-[#9ca3af]">
            {/* Home Section */}
            <div name="Home" className="w-full">
                <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row py-32">
                    <div className="flex flex-col justify-center h-full md:mr-8">
                        <h1 className="text-4xl sm:text-6xl font-bold text-[#000000] dark:text-white font-bnheading">
                            নমস্কার, আমি নিতুল দাস!
                        </h1>
                        <p className=" text-xl mt-2">
                            আমি মেশিন লার্নিং এবং আধুনিক ওয়েব প্রযুক্তির সাথে
                            বুদ্ধিমান সমাধান তৈরি করতে পছন্দ করি।
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
                        <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-[#d1d5db] dark:border-[#374151] font-bnheading text-black dark:text-white">
                            পরিচয়
                        </p>
                    </div>
                    <p className="text-lg mt-2 md:text-lg md:mt-2">
                        আমার HTML, CSS, JavaScript, React JS, এবং Tailwind CSS
                        এর সাথে কাজ করার অভিজ্ঞতা আছে । আমার সমস্ত প্রকল্প
                        জুড়ে, আমি একটি সহ বিভিন্ন ফ্রন্টএন্ড অ্যাপ্লিকেশন তৈরি
                        করেছি আমার দক্ষতা এবং প্রকল্পগুলি প্রদর্শনের জন্য
                        পোর্টফোলিও ওয়েবসাইট, ক আবহাওয়ার তথ্য প্রদর্শনের জন্য
                        আবহাওয়া অ্যাপ্লিকেশন, এবং এইচটিএমএল, সিএসএস এবং ব্যবহার
                        করে একটি টিক-ট্যাক-টো গেম প্রয়োগ করা হয়েছে
                        জাভাস্ক্রিপ্ট। এই প্রকল্পগুলি আমার দক্ষতা প্রদর্শন করে
                        ব্যবহার করে ইউজার ইন্টারফেস এবং ওয়েব অ্যাপ্লিকেশন তৈরি
                        করা আধুনিক ফ্রন্টএন্ড প্রযুক্তি এবং কাঠামো।
                    </p>
                    <br />
                    <p className="text-lg mt-2 md:text-lg md:mt-2">
                        আমার কর্মজীবনে, আমি এক মাসের ইন্টার্নশিপ সম্পন্ন করেছি
                        প্রডিজি ইনফোটেক এ ফ্রন্টএন্ড ওয়েব ডেভেলপমেন্ট এবং
                        কোডার্স কেভ। এই অভিজ্ঞতা honing জন্য অমূল্য ছিল HTML,
                        CSS, JavaScript, React এবং Tailwind-এ আমার দক্ষতা CSS,
                        আমাকে ব্যবহারিক অন্তর্দৃষ্টি প্রদান করে বাস্তব বিশ্বের
                        প্রকল্প এবং আমার দক্ষতা বৃদ্ধি ফ্রন্টএন্ড উন্নয়ন।
                    </p>
                </div>
            </div>

            {/* Experience Section */}
            <div name="Experience" className="w-full">
                <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                    <div className="pb-4 md:pb-8 pt-4 md:pt-0">
                        <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-[#d1d5db] dark:border-[#374151] font-bnheading text-black dark:text-white">
                            অভিজ্ঞতা
                        </p>
                        <p className="text-lg mt-3 md:text-xl md:mt-4 ">
                            এই প্রযুক্তিগুলির সাথে আমি কাজ করেছি:
                        </p>
                    </div>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                        {logo.map(({id, img, nam, style, url}) => (
                            <a
                                key={id}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={
                                    "shadow-md flex flex-col justify-center items-center hover:scale-105 duration-500 py-2 " +
                                    style
                                }
                            >
                                <img
                                    src={img}
                                    alt={nam}
                                    className="w-8 mx-auto md:w-20"
                                />
                                <p className="mt-4">{nam}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
