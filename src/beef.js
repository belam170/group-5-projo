// beefRecipes.js

async function fetchBeefRecipes() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef');
    const data = await response.json();
    return data.meals;
  }
  
  export default fetchBeefRecipes;
  