import { Link, NavLink } from 'react-router-dom';
import {link} from '../data'


import './navbar.css';

import Logo from '../img/logo.png'

import React from 'react'

function Navbar() {
  return (
      <nav>
          <div className="container nav_container">
              
              <Link to='/' className='logo'>
                  <img src='logo.png' alt='nav logo' />
              </Link>

              <ul className='nav__links'>
                  {
                      links.map(({name, path}, index) => {
                          return (
                          
                              <li>
                                  <NavLink to={path}> { name } </NavLink>
                              </li>
                  
                      )
                      })
                  }
              </ul>
              
         </div>
   </nav>
  )
}

export default Navbar
