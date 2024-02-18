import React from "react";

export const Search = () => {
  return (
    <div className="search">
      <div className="search-container">
        <h1>Search For Recipes</h1>
        <div className="search-fields">
          <div className="search-field-item">
            <label>Search Recipe</label>
            <input type="text" placeholder="Enter text here" name="name" />
          </div>
          <div className="search-field-item">
            <label>Diet Preference</label>
            {/* should be options */}
          </div>
          <div className="search-field-item">
            <label></label>
            <input type="text" placeholder="Search By Meal" name="name" />
          </div>
        </div>
        {/* get random recipe*/}
      </div>
    </div>
  );
};
