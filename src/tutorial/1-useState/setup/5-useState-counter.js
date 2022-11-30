import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    setValue((prevState) => {
      return prevState + 1;
    });
  };

  const handleDecrease = () => {
    setValue((prevState) => {
      return prevState - 1;
    });
  };
  return (
    <section className="container">
      <h1>VALUE</h1>
      <h1 style={{ fontSize: "120px" }}>{value}</h1>
      <div>
        <button className="btn" onClick={handleIncrease}>
          decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          reset
        </button>
        <button className="btn" onClick={handleDecrease}>
          increase
        </button>
      </div>
    </section>
  );
};

export default UseStateCounter;
