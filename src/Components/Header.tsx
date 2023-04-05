import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { STATIC_VALUES } from '../constants'

export default function Header () {
  return (
    <div className='position-sticky background-aquamarine shadow' id='header'>
      <nav className='navbar navbar-expand-lg navbar-light bgblur no-padding'>
        <div className='container-fluid'>
          <Link className='caveat-cursive navbar-brand fs-1 p-2 ms-5 text-reset' to='/'>{STATIC_VALUES.fullName}</Link>
          <div>
            <button className='navbar-toggler right' type='button' data-target='#navbarSupportedContent' data-toggle='collapse' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='navbar-nav collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav me-4 mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <Link className='nav-item nav-link p-3 fs-6 mt-2 text-reset roboto-regular-500' to='/'>About Me</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-item nav-link p-3 fs-6 mt-2 text-reset roboto-regular-500' to='/experience'>Experience</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-item nav-link p-3 fs-6 mt-2 text-reset roboto-regular-500' to='/projects'>Projects</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-item nav-link p-3 fs-6 mt-2 text-reset roboto-regular-500' to='/education'>Education</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-item nav-link p-3 fs-6 mt-2 text-reset roboto-regular-500' to='/contact'>Contact Me</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}
