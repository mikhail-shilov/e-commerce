import React from 'react'
import { useDispatch } from 'react-redux'

import { addBasket, removeGood } from '../../redux/reducers/goods'

const GoodCard = (props) => {
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
    <div className="w-1/4	flex flex-col border text-center pb-4">
      <img
        className='w-full h-44 object-cover '
        src={props.image}
        alt='props.title' />
      <h3>{props.title}</h3>
      <div>Price: {props.price}</div>
      <button
        className='border w-min mt-2 mx-auto px-4'
        type='button'
        onClick={buttonHandler}>
        Add basket
      </button>
      <button
        className='border w-min mt-2 mx-auto px-4'
        type='button'
        onClick={buttonHandler2}>
        Remove basket
      </button>
    </div>
  )
}

export default GoodCard
