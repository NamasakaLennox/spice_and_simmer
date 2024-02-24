import React, { useEffect, useState } from "react";
import { DisplayResults } from "../Components/DisplayResults/DisplayResults";

export const Favourites = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const id = "2a0eabf3-f034-4d26-9487-5ad4d843a55d";

    fetch(`http://localhost:5000/api/v1/favourites/${id}`, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => setResults(data));
  }, []);
  return (
    <div>
      <DisplayResults results={results} />
    </div>
  );
};
