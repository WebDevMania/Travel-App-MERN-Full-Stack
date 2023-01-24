import React, { useState } from "react"
import classes from "./typeDetail.module.css"
import img from "../../assets/img3.jpg"
import { AiFillStar } from "react-icons/ai"
import { useEffect } from "react"
import { useRef } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import { getDatesInRange, isUnavailable } from "../../utils/dateFunc"

const TypeDetail = () => {
  const {startDate: startDateRedux, endDate: endDateRedux} = useSelector((state) => state.search)
  console.log(useSelector((state) => state.search))
  console.log(startDateRedux)
  const [roomDetails, setRoomDetails] = useState("")
  const [startDate, setStartDate] = useState(startDateRedux || "")
  const [endDate, setEndDate] = useState(endDateRedux || "")
  const [username, setUsername] = useState("")
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const [email, setEmail] = useState("")
  const { token } = useSelector((state) => state.auth)
  const { id } = useParams()
  const containerRef = useRef()

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await fetch(`http://localhost:5000/room/find/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
          method: "get"
        })

        const room = await res.json()
        setRoomDetails(room)

      } catch (error) {
        console.error(error)
      }
    }
    fetchRoom()
  }, [id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const yourBookedDates = getDatesInRange(startDate, endDate)

    const isUnavailableDates = isUnavailable(roomDetails, yourBookedDates)

    if (isUnavailableDates) {
      const lastAvailableDate = new Date(roomDetails.unavailableDates[roomDetails.unavailableDates.length - 1])
      const lastAvailableDay = lastAvailableDate.getDate()
      const lastAvailableMonth = lastAvailableDate.getMonth()

      // + 1 cuz it shows months in index (example: 2rd month -> february = 1)
      const formattedMonth = (lastAvailableMonth + 1) > 9 ? `${lastAvailableMonth + 1}` : `0${lastAvailableMonth + 1}`
      const formattedDay = lastAvailableDay > 9 ? `${lastAvailableDay}` : `0${lastAvailableDay}`

      const formattedDayAndMonth = `
       ${formattedDay}
       ${formattedMonth}`
      setError(formattedDayAndMonth)
      setTimeout(() => {
        setError(false)
      }, 3500)

      return
    }


    try {
      const res = await fetch(`http://localhost:5000/room/bookRoom/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        method: "PUT",
        body: JSON.stringify({ username, email, unavailableDates: yourBookedDates })
      })

      setSuccess(true)

      setTimeout(() => {
        setSuccess(false)
      }, 3500)

      const updatedRoom = await res.json()
      setRoomDetails(updatedRoom)

    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div ref={containerRef} className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <div className={classes.imgWrapper}>
            <img src={img} alt="" />
          </div>
        </div>
        <div className={classes.right}>
          <h2 className={classes.title}>{roomDetails.title}</h2>
          <p className={classes.type}>Type: <span>{roomDetails.type}</span></p>
          <div className={classes.review}>
            Review: <AiFillStar className={classes.icon} /> {roomDetails.review} (12)
          </div>
          <p className={classes.desc}>
            <span>Description: </span>
            {roomDetails.desc}
          </p>
          <div className={classes.priceAndCountry}>
            <span>Country: Indonesia</span>
            <span>
              <span className={classes.price}>{roomDetails.price}$ </span>/ per person
            </span>
          </div>
          <form className={classes.typeDetailForm} onSubmit={handleSubmit}>
            <h3 className={classes.subtitle}>Enter information here</h3>
            <input value={username} type="text" placeholder="Full name" onChange={(e) => setUsername(e.target.value)} />
            <input value={email} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <div style={{ display: 'flex', gap: '16px' }}>
              <input value={startDate} type="date" onChange={(e) => setStartDate(e.target.value)} />
              <input value={endDate} type="date" onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <button type="submit" className={classes.bookNow}>Book now</button>
          </form>
          {error &&
            <div className={classes.errorMessage}>
              Your date is in the booked range!
              Last booked day is {error}
            </div>
          }
          {success &&
            <div className={classes.successMessage}>
              Success! You booked from {startDate} to {endDate}
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default TypeDetail
