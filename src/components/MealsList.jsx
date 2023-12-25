import React from 'react'

import Meal from './Meal'

const MealsList = ({meals}) => {
    console.log(meals)
  return (
    <div className='list'>
        {meals.map((meal) => {
            return <Meal key={meal.idMeal} {...meal}/>
        })}
    </div>
  )
}

export default MealsList