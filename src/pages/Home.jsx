import React from 'react'
import AgentCard from '../componets/AgentCard'
import Carousels from '../componets/Carousel'
import Navbar from '../componets/Navbar'
import DashboardLayout from '../Layout/dashboard'
import ProductCards from './ProductCards'

const Home = () => {
  return (
    <>
        <Navbar />
        <Carousels />
        <ProductCards /> 
        <AgentCard />
        {/* <DashboardLayout /> */}
    </>
  )
}

export default Home