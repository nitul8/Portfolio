import React from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa6";
import {IoIosMail} from "react-icons/io";
import {MdMan4} from "react-icons/md";

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            link: "https://www.linkedin.com/in/nitul-das-499510208/",
            icon: (
                <>
                    Linkedin <FaLinkedin size={30} />
                </>
            ),
            style: "rounded-tr-md",
        },
        {
            id: 2,
            link: "https://www.github.com/nitul8/",
            icon: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
        },
        {
            id: 3,
            link: "mailto:ndas6732@gmail.com",
            icon: (
                <>
                    Mail <IoIosMail size={30} />
                </>
            ),
        },
        {
            id: 4,
            link: "/Web_dev_Resume.pdf",
            icon: (
                <>
                    Resume <MdMan4 size={30} />
                </>
            ),
            style: "rounded-br-md",
            downloaded: true,
        },
    ];
    return (
        <div className="hidden xl:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({id, link, icon, style, downloaded}) => (
                    <li
                        key={id}
                        className={
                            "flex justify-between items-center w-36  pl-4 pr-1 py-1 bg-gray-400 h-fit text-xl hover:rounded-md ml-[-100px] hover:ml-[-10px] duration-300" +
                            " " +
                            style
                        }
                    >
                        <a
                            href={link}
                            className="flex justify-between items-center w-full text-white"
                            downloaded={downloaded}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {icon}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
