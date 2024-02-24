import React from "react";
import "./Nutrition.css";

export const Nutrition = ({ nutrition }) => {
  return Object.keys(nutrition).length ? (
    <div>
      <h2>Nutritional Information</h2>
      <hr />
      <p>
        Calories: <span>{nutrition.calories}</span>
      </p>
      <p></p>
    </div>
  ) : (
    <p>Fetching Nutritional Information</p>
  );
};
