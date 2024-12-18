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

                {/* Props */}
                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4 font-heading text-black dark:text-white">
                        Props
                    </h2>
                    <p className="text-lg">
                        React is a component based library, which divides the UI
                        into little reusable pieces. In some cases those
                        components need to communicate and the way to pass data
                        between components is by <strong>using props</strong>.{" "}
                        <strong>Props</strong> is a special keyword in React
                        stands for <strong>Properties</strong> and is being used
                        for data transfer from on component to another. But the
                        important part here is that the data with props are
                        being passed through in a{" "}
                        <strong>uni-directional flow</strong>.
                    </p>
                    <br />
                    <div className="text-lg">
                        <strong>Example 1:</strong>
                    </div>
                    <SyntaxHighlighter
                        language="jsx"
                        style={oneDark}
                        className="rounded mt-4 text-sm"
                    >
                        {`import React, {Component} from "react";

class Example1 extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}, Let's learn together.</h1>
            </div>
        );
    }
}
export default Example1;`}
                    </SyntaxHighlighter>
                    <p className="text-lg">
                        In Example 1, we've used a class component to utilise
                        props. The <Code>App.js</Code> file serves as the
                        parent, while other components act as its children. When
                        working with class components, we define a constructor
                        to initialise the component and access{" "}
                        <Code>props</Code>, enabling dynamic and reusable code
                        structures. This approach showcases the power of React's
                        component-based architecture, making it easy to manage
                        and pass data efficiently between components.
                    </p>
                    <br />
                    <div className="text-lg">
                        <strong>Example 2:</strong>
                    </div>
                    <SyntaxHighlighter
                        language="jsx"
                        style={oneDark}
                        className="rounded mt-4 text-sm"
                    >
                        {`import React from "react";

const Example2 = (props) => {
    return (
        <div>
            <h1>Hello {props.name}, Let's learn together.</h1>
        </div>
    );
};

export default Example2;`}
                    </SyntaxHighlighter>
                    <p className="text-lg">
                        In Example 2, we’ve used a function component to utilise
                        props. Similar to Example 1, the <Code>App.js</Code>{" "}
                        file acts as the parent, while other components function
                        as its children. With function components, props can be
                        directly accessed as an argument in the function call,
                        making the code simpler and more concise.
                    </p>
                    <br />
                    <div className="text-lg">
                        <strong>App.js file:</strong>
                    </div>
                    <SyntaxHighlighter
                        language="jsx"
                        style={oneDark}
                        className="rounded mt-4 text-sm"
                    >
                        {`import React from "react";

//import Components
import Example1 from "./Props/Example1";
import Example2 from "./Props/Example2";

const App = () => {
    return (
        <>
            <Example1 name="Neel" />
            <Example2 name="Arti" />
        </>
    );
};

export default App;`}
                    </SyntaxHighlighter>
                    <br />
                    <div className="text-lg">
                        <strong>Output:</strong>
                    </div>
                    <p className="text-black text-sm bg-gray-200">
                        <h1>
                            <strong> Hello Neel, Let's learn together.</strong>
                        </h1>
                        <h1>
                            <strong> Hello Arti, Let's learn together.</strong>
                        </h1>
                    </p>
                    <br />
                </section>

                {/* State */}
                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4 font-heading text-black dark:text-white">
                        State
                    </h2>
                    <p className="text-lg">
                        <strong>State</strong> is a built-in object of the React
                        components. The state object is used to store all the
                        data that belongs to the component only. The state is
                        only accessible inside the component it belongs to.
                        State is mutable, it can be changed as per the need.
                        Whenever the state object changes the object is
                        re-rendered. To use state inside class components
                        <Code>this.state</Code> is used. And to use state
                        component inside the functional component{" "}
                        <Code>useState</Code> hook is used.
                    </p>
                    <br />
                    <div className="text-lg">
                        <strong>
                            Example - 3 (Using state in class components):
                        </strong>
                    </div>
                    <SyntaxHighlighter
                        language="jsx"
                        style={oneDark}
                        className="rounded mt-4 text-sm"
                    >
                        {`import React, {Component} from "react";

class Example3 extends Component {
    constructor(props) {
        super(props);

        this.state = {count: 0};
    }
    render() {
        return (
            <div>
                <div>Count = {this.state.count}</div>
                <button
                    onClick={() => this.setState({count: this.state.count + 1})}
                >
                    Increase
                </button>
                <button
                    onClick={() => this.setState({count: this.state.count - 1})}
                >
                    Decrease
                </button>
            </div>
        );
    }
}
export default Example3;`}
                    </SyntaxHighlighter>
                    <br />
                    <br />
                    <div className="text-lg">
                        <strong>
                            Example - 4 (Using state in functional components):
                        </strong>
                    </div>
                    <SyntaxHighlighter
                        language="jsx"
                        style={oneDark}
                        className="rounded mt-4 text-sm"
                    >
                        {`import React, {useState} from "react";

const Example4 = () => {
    const [count, setCount] = useState(0); //We will discuss about this more in hook
    return (
        <div>
            <div>Count = {count}</div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
};

export default Example4;`}
                    </SyntaxHighlighter>
                    <br />
                    <br />
                    <div className="text-lg">
                        <strong>App.js file:</strong>
                    </div>
                    <SyntaxHighlighter
                        language="jsx"
                        style={oneDark}
                        className="rounded mt-4 text-sm"
                    >
                        {`import React from "react";

//import components
import Example3 from "./States/Example3";
import Example4 from "./States/Example4";

const App = () => {
    return (
        <>
            <Example3 />
            <Example4 />
        </>
    );
};

export default App;`}
                    </SyntaxHighlighter>
                    <br />
                    <br />
                </section>

                {/* Lifecycle Methods */}
                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4 font-heading text-black dark:text-white">
                        Lifecycle Methods
                    </h2>
                    <p className="text-lg">
                        In React, <strong>lifecycle methods</strong> are special
                        methods in class components that get called at specific
                        points during a component's life. These methods allow
                        developers to execute code at particular stages of the
                        component's rendering and updating process.
                    </p>
                    <br />
                    <div className="text-lg">
                        <strong>Types of lifecycle methods -</strong>
                    </div>
                    <div className="text-lg">
                        <strong>
                            1. <Code>componentDidMount()</Code>:
                        </strong>
                    </div>
                    <p className="text-lg">
                        This lifecycle method is called after a component has
                        been mounted to the DOM (rendered for the first time).
                        It's commonly used for initial setup like API calls,
                        subscriptions, or DOM manipulations that need to happen
                        after the component is rendered. It only runs once
                        during the component's lifecycle.
                    </p>
                    <SyntaxHighlighter
                        language="jsx"
                        style={oneDark}
                        className="rounded mt-4 text-sm"
                    >
                        {`** structure of componentDidMount **
componentDidMount() {
    // Perform initial setup, API calls, etc.
    this.setState({ isLoaded: true });
}`}
                    </SyntaxHighlighter>
                    <br />
                    <div className="text-lg">
                        <strong>
                            2. <Code>constructor()</Code>:
                        </strong>
                    </div>
                    <p className="text-lg">
                        The constructor is called before the component is
                        mounted to the DOM. It's the perfect place to initialize
                        state and bind methods. The <Code>super()</Code> call is
                        required as it calls the parent class's constructor and
                        sets up the component properly.
                    </p>
                    <SyntaxHighlighter
                        language="jsx"
                        style={oneDark}
                        className="rounded mt-4 text-sm"
                    >
                        {`** structure of constructor **
constructor(){
	super();
	this.state = (count:0);//example line
}`}
                    </SyntaxHighlighter>
                    <br />
                    <div className="text-lg">
                        <strong>
                            3. <Code>render()</Code>:
                        </strong>
                    </div>
                    <p className="text-lg">
                        The <Code>render()</Code> method is a required lifecycle
                        method in class components. It's responsible for
                        returning the JSX (or React elements) that should be
                        displayed on the screen. This method is called every
                        time a component's state or props change.
                    </p>
                    <SyntaxHighlighter
                        language="jsx"
                        style={oneDark}
                        className="rounded mt-4 text-sm"
                    >
                        {`** structure of render **
render(){
	<>
		<div>Hello</div>
	</>
}`}
                    </SyntaxHighlighter>
                    <br />
                    <div className="text-lg">
                        <strong>
                            4. <Code>componentDidUpdate()</Code>:
                        </strong>
                    </div>
                    <p className="text-lg">
                        This method is called after a component updates (when
                        props or state changes). It's useful for performing side
                        effects like API calls or DOM manipulations after the
                        component has been updated. It receives the previous
                        props and state as arguments, allowing you to compare
                        them with current values.
                    </p>
                    <SyntaxHighlighter
                        language="jsx"
                        style={oneDark}
                        className="rounded mt-4 text-sm"
                    >
                        {`** structure of componentDidUpdate **
componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
        // Perform some action
    }
}`}
                    </SyntaxHighlighter>
                    <br />
                    <p className="text-lg">
                        Lifecycle methods are used in class components. However
                        we can achieve this in functional components using
                        hooks. Way to achieve —
                    </p>
                    <SyntaxHighlighter
                        language="jsx"
                        style={oneDark}
                        className="rounded mt-4 text-sm"
                    >
                        {`//Moiunting
useEffect(() => {
     console.log("Fucnctionational component mounting");
});

//Updating
useEffect(() => {
     console.log("Fucnctionational component updating .. ");
},[number]);`}
                    </SyntaxHighlighter>
                    <br />
                    <br />
                </section>

                {/* Link to notion.so */}
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
