import React from "react";
// import RecipeCard from "./RecipeCard";
import Loader from "../Loader/Loader";
import "./Recipes.css";

const Recipes = ({ recipes, isLoading }) => {
  console.log(recipes);
  return (
    <div className="recipes-container">
      <h1>Recipes</h1>
      {isLoading && <Loader />}

      {recipes?.map((recipe, index) => (
        <div key={index} className="recipe">
          <h2>
            {recipe.recipe_num}. {recipe.recipe_name}
          </h2>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <ol>
            {recipe.instructions.map((instruction, i) => (
              <li key={i}>{instruction}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
