import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Placeholder from '../Placeholder'

const WigetBasket = () => {
  const quanity = useSelector((state) => state.goods.basket.quanity)
  const total = useSelector((state) => state.goods.basket.total)
  const rates = useSelector((state) => state.currency.rates)
  const isLoadingBasket = useSelector((state) => state.goods.basket.isLoading)
  const activeCurrency = useSelector((state) => state.currency.activeCurrency)
  return (
    <div className='flex items-center'>
      {isLoadingBasket ? <Placeholder /> : <Link to='/basket'>{quanity} товаров, на сумму {(total * rates[activeCurrency]).toFixed(2)} {activeCurrency}</Link>}
    </div>
  )
}

export default WigetBasket
