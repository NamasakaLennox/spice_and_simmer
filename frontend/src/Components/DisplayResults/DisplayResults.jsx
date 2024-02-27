import React from "react";
import "./DisplayResults.css";
import { Link } from "react-router-dom";

export const DisplayResults = ({ results }) => {
  return (
    <div className="result-container">
      {results.map((item, i) => (
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={`/recipe/${item.id}`}
        >
          <div key={i} className="result-item">
            <img src={item.image} alt="" />

            <p className="item-title">{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
