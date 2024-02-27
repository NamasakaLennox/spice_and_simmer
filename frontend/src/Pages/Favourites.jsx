import React, { useEffect, useState } from "react";
import { DisplayResults } from "../Components/DisplayResults/DisplayResults";
import "./CSS/Favourites.css";
import { Link } from "react-router-dom";

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
        .then((data) => {
          if (data.length) {
            setResults(data);
          } else {
            setResults("empty");
          }
        });
    }
  }, []);
  return (
    <div>
      {results === null ? (
        <div className="favourites-error">
          <h3>Oops! You must be logged in to view your favourites</h3>
          <p>
            Click{" "}
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/login"
            >
              <button>Here</button>
            </Link>{" "}
            to log in
          </p>
        </div>
      ) : (
        <div>
          {results === "empty" ? (
            <div className="favourites-error">
              <h3>Oops! You have no items in favourites</h3>
              <p>Search for Recipes and add them to favourites</p>
            </div>
          ) : (
            <DisplayResults results={results} />
          )}
        </div>
      )}
    </div>
  );
};
