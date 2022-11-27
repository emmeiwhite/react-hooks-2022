import React from "react";

/** 1) useState() Hook:
 * -> It is a function from React
 * -> useState() hook is used to preserve our local state (component level state)
 * -> useState() hook re-renders the component when invoked
 * -> useState() hook returns an array with 2 elements - a value and a function
 */

const ErrorExample = () => {
  let title = "Hello World!";

  const handleTitle = () => {
    title = "Hi! Welcome!!";
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
