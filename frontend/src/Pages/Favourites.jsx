import React, { useEffect, useState } from "react";
import { DisplayResults } from "../Components/DisplayResults/DisplayResults";

export const Favourites = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const id = localStorage.getItem("user_id");

    if (!id) {
      setResults(null);
    } else {
      console.log(id);

      fetch(`http://localhost:5000/api/v1/favourites/${id}`, {
        method: "GET",
      })
        .then((resp) => resp.json())
        .then((data) => setResults(data));
    }
  }, []);
  return (
    <div>
      {results === null ? (
        <h3>You must be logged in to view your favourites</h3>
      ) : (
        <DisplayResults results={results} />
      )}
    </div>
  );
};
