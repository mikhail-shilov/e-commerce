import React from 'react'
import { Link } from 'react-router-dom'

import WigetBasket from './header/WigetBasket'
import WigetSorting from './header/WigetSorting'
import WigetСurrency from './header/WigetСurrency'

const Header = () => (
  <div className="header flex flex-col h-100 w-full border px-14">
    <div className="flex">
      <h1 className='flex-grow' id='brand-name'><Link to='/'>Horns&hooves</Link></h1>
      <WigetBasket />
      <WigetСurrency />
    </div>
    <div className='flex justify-center'>
      <WigetSorting />
    </div>
  </div>
)

export default Header
