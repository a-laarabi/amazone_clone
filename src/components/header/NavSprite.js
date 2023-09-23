import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import './NavSprite.css'

const NavSprite = () => {
  return (
    <div className='nav-sprite flexRow'>
      <div className='nav-left'>
        <GiHamburgerMenu/>
        All
      </div>
      <div className='nav-fill'>
        <a href='#'>Today's Deals</a>
        <a href='#'>Customer Service</a>
        <a href='#'>Registry</a>
        <a href='#'>Gift Cards</a>
        <a href='#'>Sell</a>
      </div>
    </div>
  )
}

export default NavSprite