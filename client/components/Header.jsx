import React from 'react'
import { Link } from 'react-router-dom'

import WigetBasket from './header/WigetBasket'
import WigetСurrency from './header/WigetСurrency'

const Header = () => (
  <div className="header flex flex-col h-100 w-full border py-2 px-14 mb-4">
    <div className="flex">
      <h1 className='flex-grow text-2xl' id='brand-name'><Link to='/'>Horns&hooves</Link></h1>
      <WigetBasket />
      <WigetСurrency />
    </div>
  </div>
)

export default Header
