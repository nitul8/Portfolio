import {FaNodeJs, FaNpm} from "react-icons/fa";
import {SiExpress, SiMongodb} from "react-icons/si";

const logo = [
    {
        id: 1,
        icon: <FaNodeJs className="inline mr-1 text-green-500" />,
        nam: "Node.js",
        style: "shadow-green-500",
        url: "https://nodejs.org/en",
    },
    {
        id: 2,
        icon: <SiExpress className="inline mr-1 text-black" />,
        nam: "Express.js",
        style: "shadow-black dark:shadow-white",
        url: "https://expressjs.com/",
    },
    {
        id: 3,
        icon: <SiMongodb className="inline mr-1 text-green-600" />,
        nam: "MongoDB",
        style: "shadow-green-600",
        url: "https://www.mongodb.com/",
    },
    {
        id: 4,
        icon: <FaNpm className="inline mr-1 text-red-500" />,
        nam: "NPM",
        style: "shadow-red-500",
        url: "https://www.npmjs.com/",
    },
];

export default logo;
