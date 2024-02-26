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
          <h2>{item.title}</h2>
          <hr />
          <img src={item.image} alt="" className="recipe-image" />
          <p>
            Health Score: <span>{item.healthScore}</span>
          </p>
          <p>
            Ready in <span>{item.readyInMinutes}</span> minutes
          </p>
          <p>
            Servings: <span>{item.servings}</span> people
          </p>
          <button onClick={handleClick}>Add To Favourites</button>
          <h3>Recipe Summary</h3>
          <p>{parse(item.summary)}</p>
          <h3>Ingredients</h3>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Units</th>
              </tr>
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
          <h3>Preparation Instructions</h3>
          <div>{parse(item.instructions)}</div>
        </div>
      ) : (
        <>
          <p>Fetching Recipe Information...</p>
        </>
      )}
    </div>
  );
};
