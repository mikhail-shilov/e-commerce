import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BasketCard from './basket/BasketCard'
import SubHeader from './SubHeader'

const Basket = () => {
  const dispatch = useDispatch()


  const rates = useSelector((state) => state.currency.rates)
  const activeCurrency = useSelector((state) => state.currency.activeCurrency)

  const basket = useSelector((state) => state.goods.basket)


  useEffect(() => {
    console.log('Loading goods...')
    dispatch({ type: "DUMMY" })
  })


  const cards = basket.goods.map(good => (
    <BasketCard
      key={good.id}
      id={good.id}
      title={good.title}
      image={good.image}
      price={(good.price * rates[activeCurrency]).toFixed(2)}
      quanity={good.quanity}
    />
  ))

  return (
    <div className="main flex flex-col h-100 w-full border px-14 text-center">
      <SubHeader title='Goods in basket:' />
      <div className='flex flex-col pt-2 px-20 flex-wrap'>
        {cards}
      </div>
      <div className="border text-right text-lg mx-20 px-2 py-4">
        Total: {(basket.total * rates[activeCurrency]).toFixed(2)} {activeCurrency}
      </div>
    </div>)
}

export default Basket
