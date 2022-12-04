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

  /* 2)  We cannot place a react hook into the if/else conditional,
  
  This will generate an Error ! This is a rule. */
  /*
  if (value > 2) {
    useEffect(() => {
      console.log(`Value is above ${value}`);
    });
  }
*/

  /** useEffect() has a second argument as dependency list.
   *  When the second argument is an Empty Array, useEffect is invoked only once!
   *  And we pass value or values to that list and each time the value changes
   *  the component re-renders.
   *
   *  We can also use multiple useEffects in our component
   */

  useEffect(() => {
    if (value > 2) {
      console.log(`Value is above ${value}`);
    }
  }, []);

  useEffect(() => {
    console.log(`The second useEffect is invoked and value is: ${value}`);
  }, [value]);
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
