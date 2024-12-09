import React from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {oneDark} from "react-syntax-highlighter/dist/esm/styles/prism";

const Week1 = () => {
    return (
        <div
            name="Notes"
            className="w-full font-body bg-white dark:bg-black text-[#4b5563] dark:text-[#9ca3af] pt-28"
        >
            <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center items-center">
                <h1 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-400 mb-6 font-heading text-black dark:text-white">
                    Week - 1
                </h1>

                {/* Topics */}
                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4 font-heading text-black dark:text-white">
                        Topics:
                    </h2>
                    <ol className="list-decimal list-inside text-lg pl-5 space-y-2">
                        <li>JSX</li>
                        <li>Components</li>
                        <li>Props</li>
                        <li>State</li>
                        <li>Lifecycle Methods</li>
                        <li>Handling Events</li>
                    </ol>
                </section>

                {/* JSX */}
                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4 font-heading text-black dark:text-white">
                        JSX (JavaScript Extension)
                    </h2>
                    <p className="text-lg">
                        <strong>JSX (JavaScript XML):</strong> JSX is a syntax
                        extension for JavaScript that enables writing HTML-like
                        code directly inside JavaScript files. It is widely used
                        in React to define the structure of user interfaces (UI)
                        in a more readable and declarative way. JSX combines
                        HTML-like syntax with JavaScript, making it easier to
                        build and manage UI components.
                        <br />
                        <strong>File Naming Convention:</strong> JSX files are
                        typically named using the format{" "}
                        <code className="text-red-600 text-sm">
                            "file-name.jsx"
                        </code>
                    </p>
                    <br />
                    <p className="text-lg">
                        <strong>Rules for writing JSX:</strong>
                        <ol className="list-decimal list-inside text-lg pl-5 space-y-2">
                            <li>
                                <span className="font-semibold">
                                    HTML Code must be wrapped into one top-level
                                    element.
                                </span>
                                <SyntaxHighlighter
                                    language="jsx"
                                    style={oneDark}
                                    className="rounded mt-4 text-sm"
                                >
                                    {`// This kind of JSX is not allowed 
const App = () => {
    return (
        <h1>Hello World!!</h1>
        <p>Welcome to this React tutorial</p>
    );
};

// Corrected version
const App = () => {
    return (
        <div>
            <h1>Hello World!!</h1>
            <p>Welcome to this React tutorial</p>
        </div>
    );
};

/*
Elements must be wrapped.
If we don't want to waste space using a div tag,
we can use an empty tag <> </>, also called fragments.
*/`}
                                </SyntaxHighlighter>
                            </li>
                            <li>
                                <span className="font-semibold">
                                    JS expression in JSX must be wrapped in{" "}
                                    <code>{`{}`}</code>.
                                </span>

                                <SyntaxHighlighter
                                    language="jsx"
                                    style={oneDark}
                                    className="rounded mt-4 text-sm"
                                >
                                    {`// Example - 1
const App = () => {
    return (
    <>
      <h1>5 + 5 = {5+5}</h1> //inside {} is JavaScript
    </>
    );
};

// Example - 2
const App = () => {
    const x = 10;
    return (
    <>
      <h1>{x>20 ? "Greater" : "Smaller"}</h1>
    </>
    );
};`}
                                </SyntaxHighlighter>
                            </li>
                            <li className="font-semibold">
                                Attribute `class` is{" "}
                                <code className="text-red-500 text-sm">
                                    'className'
                                </code>
                                .
                            </li>
                            <li className="font-semibold">
                                Elements must be closed.
                            </li>
                        </ol>
                    </p>
                </section>
                <p className="text-lg">
                    To get these notes on notion.so{" "}
                    <a
                        href="https://www.notion.so/WEEK-1-157cecee08d6807799c7ef0fb66a110e?pvs=4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-500 hover:text-blue-700"
                    >
                        click here
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

export default Week1;
