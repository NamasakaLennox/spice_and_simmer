import React from "react";
import "./Similar.css";
import { Link } from "react-router-dom";

export const Similar = ({ similar }) => {
  return similar.length ? (
    <div className="similar">
      <h2>Similar Dishes</h2>
      <hr />
      {similar.map((item, i) => (
        <div key={i} className="similar-element">
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/recipe/${item.id}`}
          >
            <h3>{item.title}</h3>
          </Link>

          <p>Ready in {item.readyInMinutes} minutes.</p>
          <p>Servings: {item.servings}</p>
        </div>
      ))}
    </div>
  ) : (
    <p>Fetching Similar Recipes</p>
  );
};
