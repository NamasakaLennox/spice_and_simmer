import React from "react";
import "./RecipeInfo.css";
import parse from "html-react-parser";

export const RecipeInfo = ({ item }) => {
  const handleClick = () => {
    const id = localStorage.getItem("user_id");
    if (!id) {
      alert("You must be logged in to add to favourites");
    } else {
      item["userId"] = id;
      fetch("http://localhost:5000/api/v1/add_favourites/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((resp) => resp.json())
        .then((data) => {
          alert(data.message);
        });
    }
  };
  return (
    <div>
      {Object.keys(item).length ? (
        <div className="recipe-container">
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
            <p
              className="m-0 ms-3 fs-1 fw-semibold"
              style={{ color: "#3f3a3a" }}
            >
              {item.title}
            </p>
          </div>
          {/* <h2></h2> */}
          <hr />
          <div className="recipe-top">
            <div className="recipe-top-left">
              <img src={item.image} alt="" className="recipe-image" />
            </div>
            <div className="recipe-top-right">
              <p>
                Health Score: <span>{item.healthScore}%</span>
              </p>
              <p>
                Ready in <span>{item.readyInMinutes} minutes</span>
              </p>
              <p>
                Servings: <span>{item.servings} people</span>
              </p>
              <p>
                Price Per Serving:{" "}
                <span>Ksh. {Math.floor(item.pricePerServing * 1.45)}</span>
              </p>
              <button onClick={handleClick}>Add To Favourites</button>
            </div>
          </div>

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
            <p
              className="m-0 ms-3 fs-1 fw-semibold"
              style={{ color: "#3f3a3a" }}
            >
              Recipe Summary
            </p>
          </div>
          <div className="recipe-summary">
            <p className="text">{parse(item.summary)}</p>
          </div>
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
            <p
              className="m-0 ms-3 fs-1 fw-semibold"
              style={{ color: "#3f3a3a" }}
            >
              Ingredients
            </p>
          </div>
          <table className="ingredients-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Units</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(item.extendedIngredients).map((key, i) => (
                <tr key={i}>
                  <td>{item.extendedIngredients[key]["nameClean"]}</td>
                  <td>
                    {
                      item.extendedIngredients[key]["measures"]["metric"][
                        "amount"
                      ]
                    }
                  </td>
                  <td>
                    {
                      item.extendedIngredients[key]["measures"]["metric"][
                        "unitLong"
                      ]
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

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
            <p
              className="m-0 ms-3 fs-1 fw-semibold"
              style={{ color: "#3f3a3a" }}
            >
              Preparation Instructions
            </p>
          </div>

          <div className="recipe-prep">{parse(item.instructions)}</div>
        </div>
      ) : (
        <div className="loading">
          <p>Fetching Recipe Information...</p>
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};
