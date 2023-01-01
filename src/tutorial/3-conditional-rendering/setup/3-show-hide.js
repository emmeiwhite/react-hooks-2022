import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <main className="container">
      <button className="btn" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show && <Item />}
    </main>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect invoked!");
    window.addEventListener("resize", checkSize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <section>
      <h1>Window:</h1>
      <h2>Size: {size} px</h2>
    </section>
  );
};

export default ShowHide;
