import React, { useState } from "react";

const UseStateObject = () => {
  // const person = {
  //   name: "Kejriwal",
  //   profession: "CM Delhi",
  //   education: "IIT",
  // };

  const [person, setPerson] = useState({
    name: "Kejriwal",
    profession: "CM Delhi",
    education: "IIT",
  });

  const updatePerson = () => {
    // we use spread operator to update the object. We first copy the object then update any property we want
    setPerson({ ...person, education: "IIT Kharagpur" });
  };
  return (
    <article className="container">
      <h1>{person.name}</h1>
      <h2>{person.profession}</h2>
      <h3>{person.education}</h3>

      <br />

      <button className="btn" onClick={updatePerson}>
        Update Education
      </button>
    </article>
  );
};

export default UseStateObject;
