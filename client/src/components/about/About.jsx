import React from "react"
import classes from "./about.module.css"
import img1 from "../../assets/img1.jpg"
import { GiPalmTree } from "react-icons/gi"
import { FaUmbrellaBeach } from "react-icons/fa"
import { BiHappy } from "react-icons/bi"
import { useState } from "react"
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom"
import { search } from "../../redux/searchSlice"

const About = () => {
  const [type, setType] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSearch = () => {
      const startDateFormatted = new Date(startDate)
      const endDateFormatted = new Date(endDate)
      console.log(startDateFormatted, endDateFormatted)
      dispatch(search({type, startDate, endDate}))
      navigate(`/types/${type}`)
  }

  return (
    <section id='about' className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.imgWrapper}>
          <img src={img1} alt="" />
        </div>
        <div className={classes.titles}>
          <h5 className={classes.subtitle}>Your dream vacation awaits you</h5>
          <h2 className={classes.title}>
            Book now for <span>20% off!</span>
          </h2>
        </div>
        <div className={classes.inputsContainer}>
          <div className={classes.inputContainer}>
            <span>Type <GiPalmTree className={classes.icon}/></span>
            <select onChange={(e) => setType(e.target.value)}>
              <option disabled>Select type</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="penthouse">Penthouse</option>
              <option value="bungalow">Bungalow</option>
            </select>
          </div>
          <div className={classes.inputContainer}>
            <span>First day <BiHappy className={classes.icon}/></span>
            <input type="text" placeholder="Type date..." onChange={(e) => setStartDate(e.target.value)}/>
          </div>
          <div className={classes.inputContainer}>
            <span>Last day <FaUmbrellaBeach className={classes.icon}/></span>
            <input type="text" placeholder="Type date..." onChange={(e) => setEndDate(e.target.value)}/>
          </div>
          <button onClick={handleSearch} className={classes.bookBtn}>Search</button>
        </div>
      </div>
    </section>
  )
}

export default About
