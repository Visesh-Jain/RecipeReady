import React from "react";
import IngredientInput from "./Components/Ingredients/IngredientInput";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>RecipeReady</h1>
      </header>
      <IngredientInput />
    </div>
  );
};

export default App;
