import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchPage } from '../../redux/reducers/goods'

const GAP = 'gap'
const ACTIVE = 'active'

const Pagination = () => {
  const dispatch = useDispatch()
  const pages = useSelector(state => state.goods.catalog.pages)
  const page = useSelector(state => state.goods.catalog.page)

  const [pageStatuses, updateStatuses] = useState([{ page: 1 }])

  useEffect(() => {
    let arrWithNumbers = []
    let gapStart = null
    let gapEnd = null
    for (let index = 1; index <= pages; index += 1) {
      if (index <= 3 || index > pages - 3 || (index >= page - 2 && index <= page + 2)) {
        if (gapStart !== null) {
          const centerOfGap = gapEnd - Math.floor((gapEnd - gapStart) / 2)
          arrWithNumbers = [...arrWithNumbers, { page: centerOfGap, status: GAP }]
          gapStart = null
          gapEnd = null
        }
        const newItem = { page: index }
        if (index === page) newItem.status = ACTIVE
        arrWithNumbers = [...arrWithNumbers, newItem]
      } else {
        if (gapStart === null) { gapStart = index }
        gapEnd = index
      }
    }
    updateStatuses(arrWithNumbers)
  }, [pages, page])

  const clickHandler = (pageNumber) => {
    dispatch(switchPage(pageNumber))
  }

  const filteredLinks = pageStatuses.map((item) => (
    <button
      key={item.page}
      type='button'
      onClick={() => { clickHandler(item.page) }}
      className={`w-10 px-1 border ${item.status === ACTIVE && 'bg-gray-400'}`}>
      {item.status === GAP ? '...' : item.page}
    </button>))

  return (
    <div className="flex flex-wrap justify-center text-center pb-4">
      {filteredLinks}
    </div>
  )
}

export default Pagination
