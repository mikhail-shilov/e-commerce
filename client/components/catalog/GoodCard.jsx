import React from 'react'

const GoodCard = (props) => (
  <div className="w-1/4	flex flex-col border text-center">
    <img src={props.image} alt='props.title'/>
    <h3>{props.title}</h3>
    <div>Price: {props.price}</div>
    <button className='border w-min mt-2 mx-auto px-4' type='button'>Add basket</button>
  </div>
)

export default GoodCard
