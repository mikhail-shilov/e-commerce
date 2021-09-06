import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { USD, EUR, CAD, updateCurrency } from '../redux/reducers/currency'


const WigetСurrency = () => {
  const activeCurrency = useSelector((state) => state.currency.activeCurrency)

  const dispatch = useDispatch()
  const setCurrency = (currency) => {
    dispatch(updateCurrency(currency))
  }

  return (
    <div className='flex border gap-4 px-1 ml-8 '>
      <button type='button' >Now: {activeCurrency}!</button>
      <button type='button' onClick={() => { setCurrency(USD) }}>{USD}</button>
      <button type='button' onClick={() => { setCurrency(EUR) }}>{EUR}</button>
      <button type='button' onClick={() => { setCurrency(CAD) }}>{CAD}</button>
    </div>)
}

export default WigetСurrency
