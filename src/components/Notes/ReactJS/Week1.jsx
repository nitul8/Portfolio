import React from "react";
import Code from "../Code";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {oneDark} from "react-syntax-highlighter/dist/esm/styles/prism";

import pic from "./components.png";

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
                        <Code>"file-name.jsx"</Code>
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
                                <Code className="font-light">'className'</Code>.
                            </li>
                            <li className="font-semibold">
                                Elements must be closed.
                            </li>
                        </ol>
                    </p>
                </section>

                {/* Components */}
                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4 font-heading text-black dark:text-white">
                        Components
                    </h2>
                    <p className="text-lg">
                        <strong>Components</strong> are independent and reusable
                        bits of code. They are{" "}
                        <strong>JavaScript or JSX files</strong>. They serve the
                        same purpose as <strong>JS functions</strong>. But works
                        in isolation and returns{" "}
                        <strong>HTML via a render function</strong>.
                    </p>
                    <div className="flex justify-center">
                        <img src={pic} alt="Components Pic" className="w-96" />
                    </div>
                    <p className="text-lg">
                        Just like this <strong>React App</strong> is divided
                        into multiple components which we can use multiple times
                        as we need it. And it helps us in editing and changing
                        in a particular part of App rather than changing the
                        whole App.
                    </p>
                    <br />
                    <p className="text-lg">
                        <strong>Types of Components in React:</strong>
                        <ol className="list-decimal list-inside text-lg pl-5 space-y-2">
                            <li>
                                <span className="font-semibold">
                                    Functional Components
                                </span>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Written as plain JavaScript functions.
                                    </li>
                                    <li>
                                        Use React hooks (e.g.,{" "}
                                        <Code>useState</Code>,
                                        <Code>useEffect</Code>) to manage state
                                        and lifecycle methods.
                                    </li>
                                    <li>Lightweight and easier to read.</li>
                                </ul>
                                <SyntaxHighlighter
                                    language="jsx"
                                    style={oneDark}
                                    className="rounded mt-4 text-sm"
                                >
                                    {`import React from "react";

export const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};`}
                                </SyntaxHighlighter>
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Class Components
                                </span>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Created using ES6 classes that extend{" "}
                                        <Code>React.Component</Code>.
                                    </li>
                                    <li>
                                        Have access to lifecycle methods like{" "}
                                        <Code>componentDidMount</Code> and{" "}
                                        <Code>shouldComponentUpdate</Code>.
                                    </li>
                                    <li>
                                        Use <Code>this.state</Code> to manage
                                        state.
                                    </li>
                                </ul>
                                <SyntaxHighlighter
                                    language="jsx"
                                    style={oneDark}
                                    className="rounded mt-4 text-sm"
                                >
                                    {`import React,{Component} from "react";

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Greeting;`}
                                </SyntaxHighlighter>
                            </li>
                        </ol>
                        <ul className="list-disc list-inside">
                            <span className="font-semibold">
                                Simple Concept:
                            </span>
                            <ul className="list-disc list-inside">
                                <li>
                                    You have noticed that we have used two
                                    methods to export the components.
                                    <br />
                                    i. One using{" "}
                                    <Code>export constant . . .</Code>
                                    <br />
                                    ii. Anther using{" "}
                                    <Code>export default component-name</Code>
                                </li>
                                <li>
                                    If we use first method we have to use the{" "}
                                    <Code>component-name</Code> to call this
                                    component in another file.
                                </li>
                                <li>
                                    If we use second method we can use any name
                                    to call the component in another file.
                                </li>
                            </ul>
                        </ul>
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
