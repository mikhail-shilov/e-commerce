import React from 'react'
import { useSelector } from 'react-redux'
import { changeSortMode, setDescendingOrder } from '../redux/reducers/basket'
import BasketCard from './basket/BasketCard'
import SubHeader from './SubHeader'

const Basket = () => {
  const rates = useSelector((state) => state.currency.rates)
  const activeCurrency = useSelector((state) => state.currency.activeCurrency)

  const goods = useSelector((state) => state.basket.goods)
  const total = useSelector((state) => state.basket.total)

  const cards = goods.map(good => (
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
    <div className="basket flex flex-col h-100 w-full px-14 text-center">
      <SubHeader
        title='Goods in basket:'
        acSortMode={changeSortMode}
        acOrder={setDescendingOrder}
      />

      <div className='goods flex flex-col px-20 flex-wrap'>
        {cards}
      </div>
      <div className="text-right text-lg mx-20 px-2 py-4">
        Total: {(total * rates[activeCurrency]).toFixed(2)} {activeCurrency}
      </div>
    </div>)
}

export default Basket
