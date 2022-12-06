import React from 'react'
import { Link  } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h3>
          <Link to="/" className='home'>
            <li className='logo'>RATATOULLIE</li>
          </Link>
          </h3>
        <ul className='nav-links'>
          <Link to="/" className='home'>
            <li>home</li>
          </Link>
          <Link to="/log-in" className='log-in'>
            <li>log-in</li>
          </Link>
          <Link to="/new-recipe" className='newRecipe'>
            <li>add-recipe</li>
          </Link>
          <Link to="/sign-up" className='sign-up'>
          <li>Sign-up</li>
          </Link>
          <Link to="/log-out" className='log-out'>
            <li>log out</li>
          </Link>

        </ul>
    </nav>
  )
}
