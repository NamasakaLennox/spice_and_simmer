import React from "react";

export const SearchResults = () => {
  return (
    <div>
      <div className="search-container">
        <h1>Search For Recipes</h1>
        <p>Fill at least one field, not all fields are mandatory</p>
        <div className="search-fields">
          <div className="search-field-item">
            <label htmlFor="name">Recipe</label>
            <input type="text" placeholder="Type food name here" name="name" />
          </div>
          <div className="search-field-item">
            <label htmlFor="name">Cuisine</label>
            <input type="text" placeholder="Enter text here" name="name" />
          </div>
          <div className="search-field-item">
            <label htmlFor="diet">Diet Preference</label>
            <select name="diet" id="">
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="gluten_free">Gluten Free</option>
              <option value="ketogenic">Ketogenic</option>
              {/* more diets to be added */}
            </select>
          </div>
          <div className="search-field-item">
            <label htmlFor="meal">Meal</label>
            <input type="text" placeholder="Search By Meal" name="meal" />
          </div>
        </div>
        {/* get random recipe*/}
      </div>
    </div>
  );
};
