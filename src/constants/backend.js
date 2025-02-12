import nodejs from "../assets/logo/nodejs.png";
import expressjs from "../assets/logo/express-js.png";
import mongodb from "../assets/logo/mongodb.png";
import nPm from "../assets/logo/npm.png";

const logo = [
    {
        id: 1,
        img: nodejs,
        nam: "Node.js",
        style: "shadow-green-500",
        url: "https://nodejs.org/en",
    },
    {
        id: 2,
        img: expressjs,
        nam: "Express.js",
        style: "shadow-black dark:shadow-white",
        url: "https://expressjs.com/",
    },
    {
        id: 3,
        img: mongodb,
        nam: "MongoDB",
        style: "shadow-green-600",
        url: "https://www.mongodb.com/",
    },
    {
        id: 4,
        img: nPm,
        nam: "NPM",
        style: "shadow-red-500",
        url: "https://www.npmjs.com/",
    },
];

export default logo;
