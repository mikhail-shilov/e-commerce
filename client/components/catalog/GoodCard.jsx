import React from 'react'
import { useDispatch } from 'react-redux'

import { addBasket } from '../../redux/reducers/basket'

const GoodCard = (props) => {
  const dispatch = useDispatch()


  const buttonHandler = () => {
    console.log('Add basket!')
    dispatch(addBasket(props.id))
  }

  return (
    <div className="w-1/4	flex flex-col border text-center pb-4">
      <img
        className='w-full h-44 object-cover '
        src={props.image}
        alt='props.title' />
      <h3>{props.title}</h3>
      <div>Price: {props.price}</div>
      <div className='flex-grow flex items-end'>
        <button
          className='border text-sm w-24 mt-2 mx-auto py-2 px-2'
          type='button'
          onClick={buttonHandler}>
          Buy {(props.quanity > 0) ? `(${props.quanity})` : ''}
        </button>
      </div>
    </div>
  )
}

export default GoodCard
