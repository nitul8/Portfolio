import React from "react";

const Notes = () => {
    return (
        <div
            name="Notes"
            className="w-full font-body bg-white dark:bg-black text-[#4b5563] dark:text-[#9ca3af] pt-28"
        >
            <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center items-center">
                <h1 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-400 mb-6 font-heading text-black dark:text-white">
                    C Programming Notes
                </h1>

                {/* Introduction to C */}
                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4 font-heading text-black dark:text-white">
                        Introduction to C
                    </h2>
                    <p className=" text-lg">
                        C is a general-purpose programming language that is
                        extremely popular, simple, and flexible to use.
                        Developed in the 1970s by Dennis Ritchie, it has paved
                        the way for many modern languages.
                    </p>
                </section>

                {/* Basic Syntax */}
                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4 font-heading text-black dark:text-white">
                        Basic Syntax
                    </h2>
                    <p className=" text-lg">
                        Every C program starts with a `main()` function.
                        Statements in C must end with a semicolon. A simple
                        program looks like this:
                    </p>
                    <pre className="bg-gray-700 dark:bg-gray-300 p-4 rounded mt-4 text-white dark:text-black">
                        <code>
                            {`#include <stdio.h>
int main() {
    printf("Hello, World!");
    return 0;
}`}
                        </code>
                    </pre>
                </section>

                {/* Data Types */}
                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4 font-heading text-black dark:text-white">
                        Data Types
                    </h2>
                    <p className="text-lg">
                        C has several data types, including:
                    </p>
                    <ul className="list-disc list-inside ml-6 ">
                        <li>
                            <strong>int</strong>: Integer numbers
                        </li>
                        <li>
                            <strong>float</strong>: Floating point numbers
                        </li>
                        <li>
                            <strong>char</strong>: Single character
                        </li>
                        <li>
                            <strong>double</strong>: Double-precision floating
                            point numbers
                        </li>
                    </ul>
                </section>

                {/* Control Structures */}
                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4 font-heading text-black dark:text-white">
                        Control Structures
                    </h2>
                    <p className=" text-lg">
                        C uses control structures like `if`, `for`, and `while`
                        loops to control the flow of the program.
                    </p>
                    <pre className="bg-gray-700 dark:bg-gray-300 p-4 rounded mt-4 text-white dark:text-black">
                        <code>
                            {`if (condition) {
    // Code to execute if condition is true
} else {
    // Code to execute if condition is false
}`}
                        </code>
                    </pre>
                </section>

                {/* Functions */}
                <section className="mb-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4 font-heading text-black dark:text-white">
                        Functions
                    </h2>
                    <p className="text-lg">
                        Functions in C allow code to be reused. The basic syntax
                        is:
                    </p>
                    <pre className="bg-gray-700 dark:bg-gray-300 p-4 rounded mt-4 text-white dark:text-black">
                        <code>
                            {`return_type function_name(parameters) {
    // Function body
}`}
                        </code>
                    </pre>
                </section>
            </div>
        </div>
    );
};

export default Notes;
