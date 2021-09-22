import React from 'react'
import { useSelector } from 'react-redux'
import GoodCard from './catalog/GoodCard'
import Pagination from './catalog/Pagination'
import SubHeader from './SubHeader'
import Placeholder from './Placeholder'
import { changeSortMode, setDescendingOrder } from '../redux/reducers/catalog'

const Catalog = () => {
  const rates = useSelector((state) => state.currency.rates)
  const activeCurrency = useSelector((state) => state.currency.activeCurrency)
  const goods = useSelector((state) => state.catalog.goods)
  const isLoadingCatalog = useSelector((state) => state.catalog.isLoading)
  const basketLocal = useSelector((state) => state.basket.basketLocal)

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
      <SubHeader title='Goods:' acSortMode={changeSortMode} acOrder={setDescendingOrder}/>
      {!isLoadingCatalog && <Pagination />}
      <div className='list-of-goods flex w-full flex-grow content-start pb-4 px-20 flex-wrap'>
        {isLoadingCatalog ? <Placeholder /> : goodCards}
      </div>
      {!isLoadingCatalog && <Pagination />}
    </div>)
}

export default Catalog
