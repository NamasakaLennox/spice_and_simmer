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
      <p>
        Carbohydrates: <span>{nutrition.carbs}</span>
      </p>
      <p>
        Fat: <span>{nutrition.fat}</span>
      </p>
      <p>
        Protein: <span>{nutrition.protein}</span>
      </p>
      <div>
        <h3>Good</h3>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Percentage of Daily Needs(%)</th>
            </tr>
            {nutrition.good.map((item, i) => (
              <tr key={i}>
                <td>{item.title}</td>
                <td>{item.amount}</td>
                <td>{item.percentOfDailyNeeds}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Bad</h3>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Percentage of Daily Needs(%)</th>
            </tr>
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
  ) : (
    <p>Fetching Nutritional Information</p>
  );
};
