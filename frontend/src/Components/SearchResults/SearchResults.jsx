import React, { useState } from "react";
import { DisplayResults } from "../DisplayResults/DisplayResults";
import "./SearchResults.css";

const cuisine_list = [
  "",
  "African",
  "Asian",
  "American",
  "British",
  "Cajun",
  "Caribbean",
  "Chinese",
  "French",
  "Indian",
  "Italian",
  "Mexican",
  "Middle Eastern",
  "Spanish",
  "Thai",
];

const diet_pref = [
  "",
  "Gluten Free",
  "Ketogenic",
  "Vegetarian",
  "Lacto-Vegetarian",
  "Ovo-Vegetarian",
  "Vegan",
  "Pescetarian",
  "Paleo",
  "Primal",
];

const intolerances = [
  "",
  "Dairy",
  "Egg",
  "Gluten",
  "Grain",
  "Peanut",
  "Seafood",
  "Sesame",
  "Shellfish",
  "Soy",
  "Sulfite",
  "Tree Nut",
  "Wheat",
];

export const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState({
    query: "",
    cuisine: "",
    diet: "",
    intolerances: "",
  });

  const changeHandler = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleRandomClick = async () => {
    let response;

    await fetch("http://localhost:5000/api/v1/random", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        response = data["recipes"];
        setResults(response);
      });
  };

  const handleClick = async () => {
    let response;

    await fetch("http://localhost:5000/api/v1/search", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(search),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        response = data["results"];
        setResults(response);
      });

    setSearch({
      query: "",
      cuisine: "",
      diet: "",
      intolerances: "",
    });
  };
  return (
    <div>
      <div className="search-container">
        <h1>Search For Recipes</h1>
        <div className="search-random">
          <h2>Get A Random Recipe</h2>
          <hr />
          <p>
            Click <button onClick={handleRandomClick}>here</button> to get a
            random recipe
          </p>
        </div>
        <h2>Custom Recipe Search</h2>
        <hr />
        <p>Fill at least one field, not all fields are mandatory</p>
        <div className="search-fields">
          <div className="search-field-item">
            <label htmlFor="name">Recipe</label>
            <input
              value={search.query}
              onChange={changeHandler}
              type="text"
              placeholder="Type food name here"
              name="query"
            />
          </div>
          <div className="search-field-item">
            <label htmlFor="name">Cuisine</label>
            <select
              value={search.cuisine}
              onChange={changeHandler}
              name="cuisine"
              className="selector"
            >
              {cuisine_list.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="search-field-item">
            <label htmlFor="diet">Diet Preference</label>
            <select
              value={search.diet}
              onChange={changeHandler}
              name="diet"
              className="selector"
            >
              {diet_pref.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="search-field-item">
            <label htmlFor="intolerances">Intolerances</label>
            <select
              value={search.intolerances}
              onChange={changeHandler}
              name="intolerances"
              className="selector"
            >
              {intolerances.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="search-button">
            <button onClick={handleClick}>Search</button>
          </div>
        </div>
      </div>
      <div>
        {results ? (
          <div className="search-display">
            <h2>Search results</h2>
            <DisplayResults results={results} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
