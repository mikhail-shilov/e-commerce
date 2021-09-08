import React from 'react'
import { useDispatch } from 'react-redux'

import { addBasket } from '../../redux/reducers/goods'

const GoodCard = (props) => {
  const dispatch = useDispatch()

  const buttonHandler = () => {
    console.log('Add basket!')
    dispatch(addBasket(props.id))
  }
  return (
    <div className="w-1/4	flex flex-col border text-center">
      <img src={props.image} alt='props.title' />
      <h3>{props.title}</h3>
      <div>Price: {props.price}</div>
      <button
        className='border w-min mt-2 mx-auto px-4'
        type='button'
        onClick={buttonHandler}>
        Add basket
      </button>
    </div>
  )
}

export default GoodCard
