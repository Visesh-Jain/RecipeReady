import React from "react";

const IngredientDisplay = ({ ingredients, onSelectIngredient }) => {
  return (
    <div className="ingredient-display-container">
      <ul className="ingredient-list">
        {ingredients?.map((ingredient, index) => (
          <li
            key={index}
            className="ingredient-item"
            onClick={() => onSelectIngredient(ingredient)}
          >
            <span className="ingredient-name">{ingredient}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientDisplay;
