import React from 'react'
import { Link  } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h3 className='logo' >RATATOULIE</h3>
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
          <Link to="/log-out" className='log-out'>
            <li>log out</li>
          </Link>

        </ul>
    </nav>
  )
}
