import React, { useState } from "react";
import { data } from "./../../../data";

const UseStateBasics = () => {
  // Let me declare our state of array to preserve our data on each re-render

  const [people, setPeople] = useState(data);

  const handleClick = (id) => {
    const updatedPeople = people.filter((person) => person.id !== id);
    setPeople(updatedPeople);
  };

  return (
    <section className="container">
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => {
                handleClick(id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}

      {people.length ? (
        <button className="btn" onClick={() => setPeople([])}>
          clear all
        </button>
      ) : (
        <button className="btn" onClick={() => setPeople(data)}>
          show all
        </button>
      )}
    </section>
  );
};

export default UseStateBasics;
