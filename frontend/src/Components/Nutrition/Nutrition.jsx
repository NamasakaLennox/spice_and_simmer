import React from "react";
import "./Nutrition.css";

export const Nutrition = ({ nutrition }) => {
  return Object.keys(nutrition).length ? (
    <div className="nutrition-container">
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
          Nutritional Information
        </p>
      </div>

      <div className="summary">
        <p>
          Calories: <span>{nutrition.calories}</span>
        </p>
        <p>
          Carbohydrates: <span>{nutrition.carbs}</span>
        </p>
        <p>
          Fat: <span>{nutrition.fat}</span>
        </p>
        <p>
          Protein: <span>{nutrition.protein}</span>
        </p>
      </div>
      <div className="nutrients-tables">
        <div className="nutrients-good">
          <h3>Good For Your Health</h3>
          <table className="nutrients-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Percentage of Daily Needs(%)</th>
              </tr>
            </thead>

            <tbody>
              {nutrition.good.map((item, i) => (
                <tr key={i}>
                  <td>{item.title}</td>
                  <td>{item.amount}</td>
                  <td>{item.percentOfDailyNeeds}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="nutrients-bad">
          <h3>Bad For Your Health</h3>
          <table className="nutrients-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Percentage of Daily Needs(%)</th>
              </tr>
            </thead>

            <tbody>
              {nutrition.bad.map((item, i) => (
                <tr key={i}>
                  <td>{item.title}</td>
                  <td>{item.amount}</td>
                  <td>{item.percentOfDailyNeeds}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <div className="loading">
      <p>Fetching Nutritional Information...</p>
      <div className="loader"></div>
    </div>
  );
};
