import React from "react";
import Setup from "./tutorial/1-useState/setup/1-error-example";

/** 1) useState() Hook:
 * -> It is a function from React
 * -> useState() hook is used to preserve our local state (component level state)
 * -> useState() hook re-renders the component when invoked
 * -> useState() hook returns an array with 2 elements - a value and a function
 */
function App() {
  return (
    <div className="container">
      <Setup />
    </div>
  );
}

export default App;
