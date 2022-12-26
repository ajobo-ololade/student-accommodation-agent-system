import { Container } from '@mui/material'
import React from 'react'
import AgentCard from '../componets/AgentCard'
import Example from '../componets/CardScroll'
import Carousels from '../componets/Carousel'
import Navbar from '../componets/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousels />
      <Example />
      <Container>
        <AgentCard />
      </Container>
    </>
  )
}

export default Home