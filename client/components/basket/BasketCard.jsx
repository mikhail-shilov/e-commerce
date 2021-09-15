import React from 'react'
import { useDispatch } from 'react-redux'

import { addBasket, removeGood } from '../../redux/reducers/goods'

const BasketCard = (props) => {
  const dispatch = useDispatch()

  const buttonHandler = () => {
    console.log('Add basket!')
    dispatch(addBasket(props.id))
  }

  const buttonHandler2 = () => {
    console.log('Remove basket!')
    dispatch(removeGood(props.id))
  }

  return (
    <div className="w-full flex items-center border text-center">
      <img
        className='w-1/4 h-44 object-cover'
        src={props.image}
        alt='props.title' />
      <div className="flex flex-col flex-grow p-4">
        <h3>{props.title}</h3>
        <div>Price: {props.price}</div>
      </div>
      <div className="flex items-center p-4">
        <button
          className='border w-min mx-auto px-4'
          type='button'
          onClick={buttonHandler}>
          +
        </button>
        <div className='px-4'>
          {props.quanity}
        </div>
        <button
          className='border w-min h-min mx-auto px-4'
          type='button'
          onClick={buttonHandler2}>
          -
        </button>
      </div>
    </div>
  )
}

export default BasketCard
