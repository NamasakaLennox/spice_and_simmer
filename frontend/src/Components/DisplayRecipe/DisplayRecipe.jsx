import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeInfo } from "../RecipeInfo/RecipeInfo";
import { Nutrition } from "../Nutrition/Nutrition";
import { Similar } from "../Similar/Similar";

export const DisplayRecipe = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [nutrition, setNutrition] = useState({});
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`http://localhost:5000/api/v1/search/${id}`, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setItem(data);
      });

    fetch(`http://localhost:5000/api/v1/similar/${id}`, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setSimilar(data);
      });
    fetch(`http://localhost:5000/api/v1/nutrition/${id}`, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setNutrition(data);
      });
  }, [id]);

  return (
    <div>
      <RecipeInfo item={item} />
      <Nutrition nutrition={nutrition} />
      <Similar similar={similar} />
    </div>
  );
};
