import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <h3>loading</h3>;
  }
  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
