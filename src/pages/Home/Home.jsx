// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/exploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownloads/AppDownload'

const Home = () => {
  const [category,setCategory] = useState("All")

  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDownload />
    </div>
  )
}

export default Home