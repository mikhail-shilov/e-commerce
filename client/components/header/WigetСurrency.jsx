import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { USD, EUR, CAD, RUB, updateCurrency } from '../../redux/reducers/currency'


const WigetСurrency = () => {
  const dispatch = useDispatch()

  const activeCurrency = useSelector((state) => state.currency.activeCurrency)
  const setCurrency = (currency) => {
    dispatch(updateCurrency(currency))
  }

  const currencies = [USD, EUR, CAD, RUB]

  const CurrencySelector = (props) => {
    const { active, title } = props

    const classes = `px-2 py-1 ${(active === title) && 'bg-gray-400'}`
    return (
      <button
        className={classes}
        type='button'
        onClick={() => { setCurrency(title) }}
      >
        {title}
      </button>
    )
  }

  const selectors = currencies.map(item => <CurrencySelector active={activeCurrency} key={item} title={item} />)

  return (
    <div className='flex border ml-8'>
      {selectors}
    </div>)
}

export default WigetСurrency
