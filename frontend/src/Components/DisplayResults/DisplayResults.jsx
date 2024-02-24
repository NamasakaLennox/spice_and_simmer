import React from "react";
import "./DisplayResults.css";
import { Link } from "react-router-dom";

export const DisplayResults = ({ results }) => {
  return (
    <div className="result-container">
      {results.map((item, i) => (
        <div key={i} className="result-item">
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/recipe/${item.id}`}
          >
            <img src={item.image} alt="" />
          </Link>
          <p className="item-title">{item.title}</p>
        </div>
      ))}
    </div>
  );
};
