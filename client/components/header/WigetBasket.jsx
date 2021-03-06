import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Placeholder from '../Placeholder'

const WigetBasket = () => {
  const rates = useSelector((state) => state.currency.rates)
  const quanity = useSelector((state) => state.basket.quanity)
  const totalBase = useSelector((state) => state.basket.total)
  const isLoadingBasket = useSelector((state) => state.basket.isLoading)
  const activeCurrency = useSelector((state) => state.currency.activeCurrency)
  
  const total = (totalBase * rates[activeCurrency]).toFixed(2)
  const summaryBasket = `${quanity} goods, total: ${total} ${activeCurrency}`
  const emptyBasket = 'Basket is empty'

  return (
    <div className='flex items-center'>
      {isLoadingBasket ?
        <Placeholder /> :
        <Link to='/basket'>
          {quanity === 0 ? emptyBasket : summaryBasket}
        </Link>}
    </div>
  )
}

export default WigetBasket
