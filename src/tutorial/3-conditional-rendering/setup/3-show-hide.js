import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [error, setError] = useState(false);

  return (
    <main>
      <button className="btn" onClick={() => setError(!error)}>
        toggle
      </button>
      {error ? <h2>Error ...</h2> : <h2>No Error...</h2>}
    </main>
  );
};

export default ShowHide;
