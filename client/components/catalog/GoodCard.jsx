import React from 'react'
import { useDispatch } from 'react-redux'
import api, { recordConstructor, recordTypes } from '../../api/api'

import { addBasket } from '../../redux/reducers/basket'

const GoodCard = (props) => {
  const dispatch = useDispatch()

  const { id, title, price, image, quanity } = props

  const buttonHandler = () => {
    dispatch(addBasket(id))
    api.postLog(recordConstructor(recordTypes.add, id))
  }

  return (
    <div className="w-1/4	flex flex-col border text-center pb-4">
      <img
        className='w-full h-44 object-cover '
        src={image}
        alt={title} />
      <h3>{title}</h3>
      <div>Price: {price}</div>
      <div className='flex-grow flex items-end'>
        <button
          className='border text-sm w-24 mt-2 mx-auto py-2 px-2'
          type='button'
          onClick={buttonHandler}>
          Buy {(quanity > 0) ? `(${quanity})` : ''}
        </button>
      </div>
    </div>
  )
}

export default GoodCard
