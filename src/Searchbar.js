import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [instructions, setInstructions] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [like, setLike] = useState(null)
  const [dislike, setDislike] = useState(null)

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

  function handleLiker(id) {
    if (like === id) {
      setLike(false)
    } else {
      setLike(id)
      setTimeout(() => {
        setLike(false)
      }, 900)
    }
  }

  function handleDisliker(id) {
    if (dislike === id) {
      setDislike(false)
    } else {
      setDislike(id)
      setTimeout(() => {
        setDislike(false)
      }, 800)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" id="add" placeholder='search here'/>
        <button type="submit" id="but">Search</button>
      </form>
    <img id="beaut" src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="not available" />
      {errorMessage && <p>{errorMessage}</p>}

      {searchResults.map(meal => (
        <div key={meal.idMeal} className="card">
          <p>{meal.strMeal}</p>
          <img src={meal.strMealThumb} alt="unavailable" />
          <button id="green"onClick={() => handleLiker(meal.idMeal)}><FontAwesomeIcon icon={faThumbsUp} /></button>
          {like === meal.idMeal && <p>Thanks</p>}
          <button id="red" onClick={() => handleDisliker(meal.idMeal)}><FontAwesomeIcon icon={faThumbsDown} /></button>
          {dislike && <p>Sorry if you had  bad experience</p>}
          <button  onClick={() => handleInstructionsClick(meal.idMeal)}>Get Recipe</button>
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
