import React from 'react'

import '../css/navbar.css'
export default function Navbar() {
  return (
    <>
    <div id='navbar'>
    <input type='checkbox' id='toggler' />
    <label htmlFor='toggler' id='tog'>
    <div id='menu'>toggler</div>
    <div id='close'>close</div>
    </label>

    <div id='navmenu'>
        <p>kaisehoga</p>
        <p>kaisehoga</p>
        <p>kaisehoga</p>
        <p>kaisehoga</p>
    </div>

    </div>
    </>
  )
}
