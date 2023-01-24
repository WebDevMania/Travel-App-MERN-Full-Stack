import React from 'react'
import About from '../about/About'
import Types from '../types/Types'
import SuggestedPlaces from '../suggestedPlaces/SuggestedPlaces'
import classes from './home.module.css'

const Home = () => {
  return (
    <section id='#' className={classes.container}>
        <About />
        <Types />
        <SuggestedPlaces />
    </section>
  )
}

export default Home