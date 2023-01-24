import React from 'react'
import classes from './signup.module.css'
import img from '../../assets/img3.jpg'
import { useDispatch } from 'react-redux' 
import { register } from '../../redux/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleRegister = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`http://localhost:5000/auth/register`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ username, email, password })
      })
      const data = await res.json()
      dispatch(register(data))
      navigate('/')
    } catch (error) {
      setError(prev => true)
      setTimeout(() => {
        setError(prev => false)
      }, 2500)
      console.error(error)
    }
  }

  return (
    <div className={classes.signUpContainer}>
      <div className={classes.signupWrapper}>
        <div className={classes.signupLeftSide}>
          <img src={img} className={classes.leftImg} />
        </div>
        <div className={classes.signupRightSide}>
          <h2 className={classes.title}>Sign Up</h2>
          <form onSubmit={handleRegister} className={classes.signupForm}>
            <input type="text" placeholder="Type username" onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Type email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Type password" onChange={(e) => setPassword(e.target.value)} />
            <button className={classes.submitBtn}>Sign Up</button>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
          </form>
          {error && 
           <div className={classes.errorMessage}>
                Wrong credentials! Try different ones.
            </div>
            }
        </div>
      </div>
    </div>
  )
}

export default Signup