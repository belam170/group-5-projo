import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Recipe from './Recipe';

const recipes = [
  {
    name: 'Spaghetti Bolognese',
    ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'onion', 'garlic', 'salt', 'pepper'],
    instructions: ['Cook spaghetti according to package instructions', 'Brown ground beef in a pan', 'Add onion and garlic and cook until soft', 'Add tomato sauce and season with salt and pepper', 'Simmer for 10 minutes', 'Serve sauce over spaghetti']
  },
  {
    name: 'Chicken Curry',
    ingredients: ['chicken', 'curry powder', 'coconut milk', 'onion', 'garlic', 'ginger', 'salt', 'pepper'],
    instructions: ['Cook chicken in a pan', 'Remove chicken and set aside', 'Add onion, garlic, and ginger to the pan and cook until soft', 'Add curry powder and cook for 1 minute', 'Add coconut milk and bring to a simmer', 'Add chicken back to the pan and simmer for 10 minutes', 'Serve over rice']
  }
];

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(0);

  const handleRecipeClick = (index) => {
    setSelectedRecipe(index);
  };

  return (
    <div className="app">
      <Sidebar recipes={recipes} onRecipeClick={handleRecipeClick} />
      <Recipe recipe={recipes[selectedRecipe]} />
    </div>
  );
};

export default App;

