import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Pagination = () => {
  const pages = useSelector(state => state.goods.catalog.pages)
  const links = new Array(pages).fill(0).map((item, index) => (
    <Link key={index} to={`/${index + 1}`} className='w-10 px-1 border'>
      {index + 1}
    </Link>))
  return (
    <div className="flex flex-wrap justify-center text-center pb-4">
      {links}
    </div>
  )
}

export default Pagination
