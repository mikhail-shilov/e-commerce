import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import GoodCard from './catalog/GoodCard'
import Pagination from './catalog/Pagination'
import SubHeader from './SubHeader'
import Placeholder from './Placeholder'
import {
  changeSortMode,
  setDescendingOrder,
  setLoadingCatalog,
  updateGoods
} from '../redux/reducers/catalog'

const Catalog = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const rates = useSelector((state) => state.currency.rates)
  const activeCurrency = useSelector((state) => state.currency.activeCurrency)

  const onPage = useSelector((state) => state.catalog.onPage)
  const page = useSelector((state) => state.catalog.page)
  const sort = useSelector((state) => state.catalog.sorting)

  const isLoadingCatalog = useSelector((state) => state.catalog.isLoading)
  const goods = useSelector((state) => state.catalog.goods)
  const basketLocal = useSelector((state) => state.basket.basketLocal)

  useEffect(() => {
    dispatch(setLoadingCatalog(true))
    const query = `/api/v1/goods/${page}?onpage=${onPage}&sort=${sort.mode}&desc=${sort.isDescOrder}`
    axios.get(query).then((result) => {
      dispatch(updateGoods(result.data.data.goods, result.data.data.pages))
      dispatch(setLoadingCatalog(false))
    })
  }, [page, sort.mode, sort.isDescOrder])

  useEffect(() => {
    history.push(`/${page}`)
    console.log(`Effect by page: ${page}`)
  }, [page])


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
      <SubHeader title='Goods:' acSortMode={changeSortMode} acOrder={setDescendingOrder} />
      {!isLoadingCatalog && <Pagination />}
      <div className='list-of-goods flex w-full flex-grow content-start px-20 flex-wrap'>
        {isLoadingCatalog ? <Placeholder /> : goodCards}
      </div>
      {!isLoadingCatalog && <Pagination />}
    </div>)
}

export default Catalog
