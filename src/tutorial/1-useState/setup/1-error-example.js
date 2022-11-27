import React, { useState } from "react";

/** 1) useState() Hook:
 * -> It is a function from React
 * -> useState() hook is used to preserve our local state (component level state)
 * -> useState() hook re-renders the component when invoked
 * -> useState() hook returns an array with 2 elements - a value and a function
 */

const ErrorExample = () => {
  const [title, setTitle] = useState("Hello World!");

  const handleTitle = () => {
    if (title === "Hello World!") {
      setTitle("Hi! Welcome");
    } else {
      setTitle("Hello World!");
    }

    console.log(title);
  };
  return (
    <section className="container">
      <h2>{title}</h2>
      <button className="btn" onClick={handleTitle}>
        change title
      </button>
    </section>
  );
};

export default ErrorExample;
