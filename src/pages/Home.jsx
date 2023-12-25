import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { getAllCategories } from '../api'
import Preloader from '../components/Preloader'
import CategoryList from '../components/CategoryList'
import Search from '../components/Search'

const Home = () => {
  const [catalog, setCatalog] = useState([])
  const [filteredCatalog, setFilteredCatalog] = useState([])

  const {pathname, search} = useLocation()
  const navigate = useNavigate()
  console.log(useLocation())

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) => {
        return item.strCategory.toLowerCase().includes(str.toLowerCase())
      })
    )
    navigate({
      pathname,
      search: `?search=${str}`
    })
  }

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories)
      setFilteredCatalog(search ? data.categories.filter((item) => {
        return item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())
      }) : data.categories)
    })
  }, [search])

  return (
    <div>
      <Search
        cb={(str) => {
          handleSearch(str)
        }}
      />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </div>
  )
}

export default Home
