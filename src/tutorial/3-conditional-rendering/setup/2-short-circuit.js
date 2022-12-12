import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hi moon";

  return (
    <article>
      <h1>{firstValue}</h1>
      <h1>{secondValue}</h1>
    </article>
  );
};

export default ShortCircuit;
