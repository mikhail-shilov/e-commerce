import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { USD, EUR, CAD, RUB, updateCurrency } from '../redux/reducers/currency'


const WigetСurrency = () => {
  const dispatch = useDispatch()

  const activeCurrency = useSelector((state) => state.currency.activeCurrency)
  const setCurrency = (currency) => {
    dispatch(updateCurrency(currency))
  }

  return (
    <div className='flex border gap-4 px-1 ml-8 '>
      <button type='button' >Now: {activeCurrency}!</button>
      <button type='button' onClick={() => { setCurrency(USD) }}>{USD}</button>
      <button type='button' onClick={() => { setCurrency(EUR) }}>{EUR}</button>
      <button type='button' onClick={() => { setCurrency(CAD) }}>{CAD}</button>
      <button type='button' onClick={() => { setCurrency(RUB) }}>{RUB}</button>
    </div>)
}

export default WigetСurrency
