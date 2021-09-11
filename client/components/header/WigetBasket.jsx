import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const WigetBasket = () => {
  const basket = useSelector((state) => state.goods.basket)
  const total = useSelector((state) => state.goods.total)
  const rates = useSelector((state) => state.currency.rates)
  const activeCurrency = useSelector((state) => state.currency.activeCurrency)


  return (
    <div>
      <Link to='/basket'>{Object.keys(basket).length} товаров, на сумму {(total * rates[activeCurrency]).toFixed(2)} {activeCurrency}</Link>
    </div>
  )
}

export default WigetBasket
