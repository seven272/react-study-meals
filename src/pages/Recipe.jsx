import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMealById } from '../api'
import Preloader from '../components/Preloader'

const Recipe = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    getMealById(id).then((data) => {
      setRecipe(data.meals[0])
    })
  }, [id])

  console.log(recipe)
  return (
    <div>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6>Категория: {recipe.strCategory}</h6>
          {recipe.strArea ? <h6>Регион: {recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>

          <table className="centred">
            <thead>
              <tr>
                <th>Ингридиент:</th>
                <th>Количество:</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes('Ingredient') && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  )
                }
                return null
              })}
            </tbody>
          </table>

          {recipe.strYoutube ? (
            <div className="row">
              <h5 style={{margin: '2rem 0 1.5rem 0'}}>Видео рецепт: </h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
              ></iframe>
            </div>
          ) : null}
        </div>
      )}
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  )
}

export default Recipe
