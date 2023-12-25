import React, { useState, useEffect } from 'react'
import {
  Link,
  useNavigate,
  useParams,
  useLocation,
} from 'react-router-dom'

import { getFilteredCategory } from '../api'
import Preloader from '../components/Preloader'
import MealsList from '../components/MealsList'

const Category = () => {
  const { name } = useParams()
  const navigate = useNavigate()
  const [meals, setMeals] = useState([])

  useEffect(() => {
    getFilteredCategory(name).then((data) => {
    //   console.log(data.meals)
      setMeals(data.meals)
    })
  }, [name])

  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
    </>
  )
}

export default Category
