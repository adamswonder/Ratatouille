import React from 'react'
import { Link  } from 'react-router-dom'
import "./Navbar.css"



export default function Navbar({user ,setUser}) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }


  return (
    <nav className='navbar'>
        <h3>
          <Link to="/" className='home'>
            <li className='logo'>RATATOULLIE</li>
          </Link>
          </h3>
        <ul className='nav-links'>
          <Link to="/" className='home'>
            <li>HOME</li>
          </Link>
          <Link to="/log-in" className='log-in'>
            <li>LOG IN</li>
          </Link>
          <Link to="/new-recipe" className='newRecipe'>
            <li>ADD RECIPE</li>
          </Link>
          <Link to="/sign-up" className='sign-up'>
          <li>Sign-up</li>
          </Link>
          <Link to="/log-out" className='log-out'
            variant="outline" onClick={handleLogoutClick}>
            <li>LOG OUT</li>
          </Link>

        </ul>
    </nav>
  )
}
