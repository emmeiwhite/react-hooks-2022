import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  /*
  useEffect(() => {
    console.log(value);
    // So, every time the state changes, useEffect() gets invoked!

    document.title = `Message ${value}`;
  });
*/

  /* 2)  We cannot place a react hook into the if/else conditional */
  /*
  if (value > 2) {
    useEffect(() => {
      console.log(`Value is above ${value}`);
    });
  }
*/
  return (
    <section>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        change number
      </button>
    </section>
  );
};

export default UseEffectBasics;
