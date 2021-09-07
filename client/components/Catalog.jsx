import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GoodCard from './catalog/GoodCard'

const Catalog = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('Loading goods...')
    dispatch({ type: "DUMMY" })

  }, [])

  const rates = useSelector((state) => state.currency.rates)
  const activeCurrency = useSelector((state) => state.currency.activeCurrency)

  const goods = useSelector((state) => state.goods.goods)

  const goodCards = goods.map(good => (
    <GoodCard
      key={good.id}
      id={good.id}
      title={good.title}
      image={good.image}
      price={(good.price * rates[activeCurrency]).toFixed(2)}
      description={good.description}
    />
  ))

  return (
    <div className="main flex flex-col h-100 w-full border px-14 text-center">
      <h2>Goods:</h2>
      <div className='flex pt-2 px-20 flex-wrap'>
        {goodCards}
      </div>
    </div>)
}

export default Catalog
