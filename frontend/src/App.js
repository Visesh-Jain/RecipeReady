import React from "react";
import IngredientInput from "./Components/Ingredients/IngredientInput";
import "./App.css"; // Import your CSS file for styling

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
