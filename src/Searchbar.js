import React, { useEffect, useState } from 'react'

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [instructions, setInstructions] = useState(false)

  useEffect(() => {
    if (searchTerm) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(res => res.json())
        .then(data => setSearchResults(data.meals))
        .catch(error => console.error(error))
    }
  }, [searchTerm])

  function handleSubmit(e) {
    e.preventDefault()
    setSearchTerm(e.target.elements.search.value)
  }

  function handleInstructionsClick() {
    setInstructions(!instructions)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" id="add"/>
        <button type="submit" id="but">Search</button>
      </form>
      
      
      {searchResults.map(meal => (
        <div key={meal.idMeal} className="card">
          <p>{meal.strMeal}</p>
          <img src={meal.strMealThumb} alt="unavailable" />
          <button onClick={handleInstructionsClick}>Get Recipe</button>
          {instructions && (
            <div className="box">
              <h3>Instructions:</h3>
              <p>{meal.strInstructions}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    
  )
}