import React from 'react'
import { Link } from 'react-router-dom'

const Meal = ({idMeal, strMeal, strMealThumb}) => {
  return (
    <div className="card">
    <div className="card-image">
      <img src={strMealThumb} alt={idMeal} />
    </div>
    <div className="card-content">
      <span className="card-title">{strMeal}</span>
    </div>
    <div className="card-action">
      <Link to={`/meal/${idMeal}`} className="btn">
        Смотреть блюдо
      </Link>
    </div>
  </div>
  )
}

export default Meal