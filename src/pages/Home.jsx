import React from 'react'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Hero from "../components/Hero"
import OurPolicy from '../components/OurPolicy'
import Newsletter from '../components/Newsletter'
const Home = () => {
  return (
    <div>
        <Hero/>
        <LatestCollection/>
        <BestSeller/>
        <OurPolicy/>
        <Newsletter/>
    </div>
  )
}

export default Home