import React from 'react'
import { useSelector } from 'react-redux'
import GoodCard from './catalog/GoodCard'
import Pagination from './catalog/Pagination'
import SubHeader from './SubHeader'
import Placeholder from './Placeholder'

const Catalog = () => {
  const rates = useSelector((state) => state.currency.rates)
  const activeCurrency = useSelector((state) => state.currency.activeCurrency)
  const goods = useSelector((state) => state.goods.catalog.goods)
  const isLoadingCatalog = useSelector((state) => state.goods.catalog.isLoading)
  const basketLocal = useSelector((state) => state.goods.basketLocal)

  const goodCards = goods.map(good => (
    <GoodCard
      key={good.id}
      id={good.id}
      title={good.title}
      image={good.image}
      price={(good.price * rates[activeCurrency]).toFixed(2)}
      description={good.description}
      quanity={(typeof basketLocal[good.id] !== 'undefined') && basketLocal[good.id]}
    />
  ))

  return (
    <div className="main flex flex-col h-100 w-full h-screen px-14 text-center">
      <SubHeader title='Goods:' />
      {!isLoadingCatalog && <Pagination />}
      <div className='flex w-full flex-grow content-start pt-2 px-20 flex-wrap'>
        {isLoadingCatalog ? <Placeholder /> : goodCards}
      </div>
    </div>)
}

export default Catalog
