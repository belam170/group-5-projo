import React, { useEffect, useState } from 'react'

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [instructions, setInstructions] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (searchTerm) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(res => res.json())
        .then(data => {
          if (data.meals) {
            setSearchResults(data.meals)
            setErrorMessage('')
          } else {
            setSearchResults([])
            setErrorMessage('No results found')
          }
        })
        .catch(error => {
          setSearchResults([])
          setErrorMessage('An error occurred while fetching data')
          console.error(error)
        })
    }
  }, [searchTerm])

  function handleSubmit(e) {
    e.preventDefault()
    setSearchTerm(e.target.elements.search.value)
  }

  function handleInstructionsClick(id) {
    if (instructions === id) {
      setInstructions(false)
    } else {
      setInstructions(id)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" id="add" />
        <button type="submit" id="but">Search</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}

      {searchResults.map(meal => (
        <div key={meal.idMeal} className="card">
          <p>{meal.strMeal}</p>
          <img src={meal.strMealThumb} alt="unavailable" />
          <button onClick={() => handleInstructionsClick(meal.idMeal)}>Get Recipe</button>
          {instructions === meal.idMeal && (
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
