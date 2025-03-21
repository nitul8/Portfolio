import {FaCss3Alt, FaHtml5, FaJs, FaReact} from "react-icons/fa6";
import {RiTailwindCssFill, RiNextjsFill} from "react-icons/ri";
import {SiTypescript} from "react-icons/si";

const logo = [
    {
        id: 1,
        icon: <FaHtml5 className="inline mr-1 text-orange-500" />, // Wrap JSX in a function
        nam: "HTML",
        style: "shadow-orange-500",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        id: 2,
        icon: <FaCss3Alt className="inline mr-1 text-blue-600" />,
        nam: "CSS",
        style: "shadow-indigo-400",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        id: 3,
        icon: <FaJs className="inline mr-1 text-yellow-400" />,
        nam: "JavaScript",
        style: "shadow-yellow-600",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        id: 4,
        icon: <FaReact className="inline mr-1 text-blue-400" />,
        nam: "React JS",
        style: "shadow-blue-600",
        url: "https://react.dev/",
    },
    {
        id: 5,
        icon: <RiTailwindCssFill className="inline mr-1 text-teal-400" />,
        nam: "Tailwind CSS",
        style: "shadow-blue-400",
        url: "https://tailwindcss.com/",
    },
    {
        id: 6,
        icon: (
            <RiNextjsFill className="inline mr-1 text-black dark:text-white" />
        ),
        nam: "Next JS",
        style: "shadow-black dark:shadow-white",
        url: "https://nextjs.org/",
    },
    {
        id: 7,
        icon: <SiTypescript className="inline mr-1 text-blue-400" />,
        nam: "TypeScript",
        style: "shadow-blue-600",
        url: "https://www.typescriptlang.org/",
    },
];

export default logo;
