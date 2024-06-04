import React, { useState, useEffect } from "react";
import IngredientDisplay from "./IngredientDisplay";
import SearchBar from "./SearchBar";
import dummyIngredients from "../../dummyIngredients";
import Recipes from "../Reciepes/Recipes";
import "./Ingredients.css";

const IngredientInput = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleSelectIngredient = (ingredient) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    } else {
      alert("Ingredient already selected!");
    }
    setSearchQuery("");
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleRemoveIngredient = (ingredient) => {
    const updatedIngredients = selectedIngredients.filter(
      (item) => item !== ingredient
    );
    setSelectedIngredients(updatedIngredients);
  };

  const [filteredIngredients, setFilteredIngredients] = useState();

  useEffect(() => {
    if (searchQuery) {
      setFilteredIngredients(
        dummyIngredients.filter((ingredient) =>
          ingredient.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredIngredients(null);
    }
  }, [searchQuery]);

  const handleLogIngredients = () => {
    // Construct the request body with selected ingredients
    const requestBody = {
      ingredients: selectedIngredients,
    };
    setIsLoading(true);
    setRecipes(null);

    // Send a POST request to the Flask server
    fetch("http://127.0.0.1:5000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setRecipes(data.recipes);
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  };

  return (
    <div className="ingredient-input">
      {selectedIngredients?.length === 0 && (
        <div className="instruction">Please choose ingredients!</div>
      )}

      <div className="search-bar">
        <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
      </div>

      <div className="ingredient-display">
        <IngredientDisplay
          ingredients={filteredIngredients}
          onSelectIngredient={handleSelectIngredient}
        />
      </div>
      {selectedIngredients?.length > 0 && (
        <div className="selected-ingredients-container">
          <h2>Selected Ingredients</h2>
          <div className="selected-ingredients-list">
            {selectedIngredients?.map((ingredient, index) => (
              <div key={index} className="selected-ingredient-item">
                <span className="ingredient-name">{ingredient}</span>
                <button
                  onClick={() => handleRemoveIngredient(ingredient)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedIngredients?.length > 0 && (
        <button
          className={`log-button ${
            selectedIngredients.length < 3 ? "disabled" : ""
          }`}
          disabled={selectedIngredients.length < 3}
          onClick={handleLogIngredients}
        >
          Show Recipes
        </button>
      )}

      {recipes?.length > 0 || isLoading ? (
        <Recipes isLoading={isLoading} recipes={recipes} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default IngredientInput;
