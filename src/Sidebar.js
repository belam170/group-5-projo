import React from 'react';

const Sidebar = ({ recipes, onRecipeClick }) => {
  return (
    <div className="sidebar">
      <h2>Recipes</h2>
      <ul>
        {["beef","chicken","lamb"].map((recipe, index) => (
          <li key={index} onClick={() => onRecipeClick(index)}>
            {recipe.name}
          </li>
        ))}
      </ul>
        

    </div>
  );
};


export default Sidebar;
