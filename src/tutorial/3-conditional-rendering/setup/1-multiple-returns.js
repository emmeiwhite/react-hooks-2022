import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarsons";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState({});

  // Now we will retrieve data and show it while we first use a loader
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        console.log("Response code is:");
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          setIsError(true);
          setIsLoading(false);
          throw new Error(response.statusText);
        }
      })
      .then((user) => {
        setUser(user);
        setIsLoading(false);
        console.log(user);
      })
      .catch((error) => {
        console.log("There is an error while fetching data");
      });
  }, []);

  if (isLoading) {
    return <h3>loading ...</h3>;
  }

  if (isError) {
    return <h3>Something went wrong!!!</h3>;
  }

  return (
    <>
      <article className="user">
        <img src={user.avatar_url} alt={user.login} />
        <h3>{user.login}</h3>
      </article>
    </>
  );
};

export default MultipleReturns;
