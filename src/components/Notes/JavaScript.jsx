import React from "react";

import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {oneDark} from "react-syntax-highlighter/dist/esm/styles/prism";
import Code from "./Code";

const JavaScript = () => {
    return (
        <div
            name="Notes"
            className="w-full font-body bg-white dark:bg-black text-[#4b5563] dark:text-[#9ca3af]"
        >
            <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center items-center">
                <h1 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-400 mb-6 font-heading text-black dark:text-white">
                    JavaScript Notes
                </h1>

                {/* Print in JavaScript */}
                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4 font-heading text-black dark:text-white">
                        Print output using <Code>console.log</Code> :
                    </h2>
                    <SyntaxHighlighter
                        language="javascript"
                        style={oneDark}
                        className="rounded mt-4 text-sm"
                    >
                        {`console.log('Nitul')

//Output - 'Nitul'`}
                    </SyntaxHighlighter>
                </section>

                {/* Variable */}
                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4 font-heading text-black dark:text-white">
                        Variables :
                    </h2>
                    <SyntaxHighlighter
                        language="javascript"
                        style={oneDark}
                        className="rounded mt-4 text-sm"
                    >
                        {`const num = 10.99`}
                    </SyntaxHighlighter>
                </section>

                {/* Objects */}
                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4 font-heading text-black dark:text-white">
                        Objects :
                    </h2>
                    <SyntaxHighlighter
                        language="javascript"
                        style={oneDark}
                        className="rounded mt-4 text-sm"
                    >
                        {`const product = {
	name = 'pen',
	price = 270,
	color = 'Balck',
}

const profile = {
	name = 'Shradha Khapra',
	isFollowed = false,
	noOfFollowers = 569000,
}`}
                    </SyntaxHighlighter>
                </section>

                {/* for-of & for-in Loop */}
                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4 font-heading text-black dark:text-white">
                        <Code>for-of & for-in Loop</Code> :
                    </h2>
                    <SyntaxHighlighter
                        language="javascript"
                        style={oneDark}
                        className="rounded mt-4 text-sm"
                    >
                        {`//for-of Loop
let str = 'Nitul Das';
let count = 0;
for (let val of str){
    console.log('val = ',val);
    count++;
}
console.log('Number of char = ',count);

//for-in Loop
const profile = {
    fullName: 'Shradha Khapra',
    isFollowed: false,
    noOfFollowers: 569000
};
for (let key in profile){
    console.log('key = ',key, 'value = ',profile[key]);
}`}
                    </SyntaxHighlighter>
                </section>

                {/* Array Example */}
                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4 font-heading text-black dark:text-white">
                        Array Example :
                    </h2>
                    <SyntaxHighlighter
                        language="javascript"
                        style={oneDark}
                        className="rounded mt-4 text-sm"
                    >
                        {`let marks = [20, 10, 45, 67, 90, 99];
let sum = 0;
for (let mark of marks){
    sum +=mark;
}
let avg = sum/marks.length;
console.log(avg);`}
                    </SyntaxHighlighter>
                </section>

                {/* Functions */}
                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4 font-heading text-black dark:text-white">
                        Functions :
                    </h2>
                    <SyntaxHighlighter
                        language="javascript"
                        style={oneDark}
                        className="rounded mt-4 text-sm"
                    >
                        {`// Normal function:

function sum(a,b){
	return a+b;
}

//Arrow function

const sum = (a,b) => {
	return a+b;
}

//forEach():

let arr = [1,2,3,4,5];
arr.forEach( function print(val){ //function as parameter
	console.log(val);
});

arr.forEach((val) => { //arrow function as parameter
    console.log(val);
});`}
                    </SyntaxHighlighter>
                </section>

                {/* Q1. Toggle Theme on click */}
                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4 font-heading text-black dark:text-white">
                        Q1. Toggle Theme on click :
                    </h2>
                    <SyntaxHighlighter
                        language="javascript"
                        style={oneDark}
                        className="rounded mt-4 text-sm"
                    >
                        {`let body = document.querySelector("body");

let btn = document.querySelector(".btn");
let count = 0;
btn.addEventListener("click", () => {
    if (count % 2 === 0) {
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(count);
    count++;
});`}
                    </SyntaxHighlighter>
                </section>

                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4 font-heading text-black dark:text-white">
                        Classes & Objects:
                    </h2>
                    <ul>
                        <li>
                            <h2 className="font-semibold text-xl">
                                Prototype:
                            </h2>
                            <p className="text-lg">
                                A prototype in JavaScript is an internal
                                property that all objects have. It allows
                                objects to inherit methods and properties from
                                other objects. When you create objects using
                                constructor functions or classes, they
                                automatically get access to the prototype of
                                their constructor.
                            </p>
                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                                className="rounded mt-4 text-sm"
                            >
                                {`// Example of prototype
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log("Hello, I'm " + this.name);
}

const person1 = new Person("Nitul");
person1.greet(); // Output: Hello, I'm Nitul`}
                            </SyntaxHighlighter>
                        </li>
                        <li>
                            <h2 className="font-semibold text-xl">
                                <Code className="font-semibold text-xl">
                                    __proto__
                                </Code>{" "}
                                :
                            </h2>
                            <p className="text-lg">
                                <Code>__proto__</Code> is a property that exists
                                on all JavaScript objects and points to their
                                prototype. It's the actual object that is used
                                in the lookup chain to resolve methods and
                                properties. While prototype is the property on
                                constructor functions, <Code>__proto__</Code> is
                                the property on instances.
                            </p>
                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                                className="rounded mt-4 text-sm"
                            >
                                {`// Example of __proto__
const animal = {
    eats: true,
    walk() {
        console.log("Animal walks");
    }
};

const rabbit = {
    jumps: true,
    __proto__: animal
};

console.log(rabbit.eats); // true (inherited)
rabbit.walk(); // "Animal walks" (inherited method)`}
                            </SyntaxHighlighter>
                            <p>
                                <strong>Note</strong>: While{" "}
                                <Code>__proto__</Code> is supported in most
                                browsers, it's recommended to use{" "}
                                <Code>Object.getPrototypeOf()</Code> and{" "}
                                <Code>Object.setPrototypeOf()</Code> for modern
                                JavaScript development as they are the standard
                                methods.
                            </p>
                        </li>
                    </ul>

                    {/*
### Async, Await & Callback:

**Asynchronous:** Due to synchronous programming, sometimes imp instructions get
blocked due to some previous instructions, which causes a delay in the UI.
Asynchronous code execution allows to execute next instructions
immediately and doesn't block the flow.

**`setTimeout():`**

Used to set timer for any work to be done.

```jsx
console.log("One");
console.log("Two");
setTimeout(() => {
	console.log("hello");
}, 2000); //2 sec
console.log("Three");
console.log("Four")
```

**Callback:** A callback is a function passed as an argument to another function, which is executed after the main function has finished its execution. Callbacks are commonly used in asynchronous operations like fetching data or handling user events. Here's a simple example:

```jsx
function hello() {
    console.log("hello");
}

function world(func) {
    func();
    console.log("world");
}

world(hello);
```

**Callback Hell :** Nested callbacks stacked below one another forming a pyramid structure.
(Pyramid of Doom)

This style of programming becomes difficult to understand & manage.

```jsx
function getData(data, getNextData) {
    console.log("Fetching data", data);
    setTimeout(() => {
        console.log("data", data);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});
```

**Promises** is for `‘eventual'` completion of task. It is an object in JS. It is a solution to callback hell. There are three types of promise object `resolve, reject & pending`.

```jsx
//resolve
let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success");
});

//reject
let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    reject("error");
});
```

**Promise Chain:** 

```jsx
function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data);
            resolve("Success");
        }, 2000);
    });
}

console.log("Fetching data 1 ...");
getData(1).then((res) => {
    console.log("Fetching data 2 ...");
    getData(2).then((res) => {
        console.log("Fetching data 3 ...");
        getData(3).then((res) => {
            console.log(res);
        });
    });
});

// Do same thing in other style, simpler style
console.log("Fetching data 1 ...");
getData(1)
    .then((res) => {
        console.log("Fetching data 2 ...");
        return getData(2);
    })
    .then((res) => {
        console.log("Fetching data 3 ...");
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    });
```

**`async-await`:**  async function always returns a promise.

`async function myFunc( ) { .... }`

await pauses the execution of its surrounding async function until the promise is settled.

```jsx
function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data);
            resolve("Success");
        }, 2000);
    });
}

async function getAllData() {
    console.log("Fetching Data 1 ....");
    await getData(1);
    console.log("Fetching Data 2 ....");
    await getData(2);
    console.log("Fetching Data 3 ....");
    await getData(3);
}

getAllData();
```

### IIFE: Immediately Invoked Function Expression

IIFE is a function that is called immediately as soon as it is defined.
                    </> */}
                </section>
            </div>
        </div>
    );
};

export default JavaScript;
