import React from "react";
import "./Similar.css";
import { Link } from "react-router-dom";

export const Similar = ({ similar }) => {
  return similar.length ? (
    <div className="similar">
      <div
        className="d-flex align-items-center my-5 animate__animated animate__flipInX"
        style={{ height: "60px" }}
      >
        <div
          className="vr"
          style={{
            width: "10px",
            backgroundColor: "#efc81a",
            opacity: "100%",
          }}
        ></div>
        <p className="m-0 ms-3 fs-1 fw-semibold" style={{ color: "#3f3a3a" }}>
          Similar Recipes
        </p>
      </div>

      <div className="similar-container">
        {similar.map((item, i) => (
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/recipe/${item.id}`}
          >
            <div key={i} className="similar-element">
              <img
                src={`https://spoonacular.com/recipeImages/${item.id}-556x370.${item.imageType}`}
                alt=""
              />
              <h3>{item.title}</h3>
              <p>
                Ready in <span>{item.readyInMinutes} minutes.</span>
              </p>
              <p>
                Servings: <span>{item.servings} people</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <div className="loading">
      <p>Fetching Similar Recipes</p>
      <div class="loader"></div>
    </div>
  );
};
