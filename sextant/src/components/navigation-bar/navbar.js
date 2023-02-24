import React from "react"
import "./navbar.css"

export default function NavBar()
{
    return(
        <div className='header-banner'>
        <h1>sextant</h1>
        <div className='navbar'>
          <ul>
            <li>Home</li>
            <li>Dashboard</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    )
}