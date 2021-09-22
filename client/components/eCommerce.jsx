import React, { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { updateRates } from '../redux/reducers/currency'
import { setLoadingCatalog, updateGoods } from '../redux/reducers/catalog'
import { setLoadingBasket, updateBasket } from '../redux/reducers/basket'

import Head from './head'
import NotFound from './404'
import Header from './Header'
import Catalog from './Catalog'
import Basket from './Basket'

const ECommerce = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const basketLocal = useSelector((state) => state.basket.basketLocal)
  const onPage = useSelector((state) => state.catalog.onPage)
  const page = useSelector((state) => state.catalog.page)
  const sort = useSelector((state) => state.catalog.sorting)

  useEffect(() => {
    axios.get('/api/v1/rate').then((result) => {
      dispatch(updateRates(result.data.data.rates))
    })
  }, [])

  useEffect(() => {
    history.push(`/${page}`)
    console.log(`Effect by page: ${page}`)
  }, [page])

  useEffect(() => {
    dispatch(setLoadingCatalog(true))
    const query = `/api/v1/goods/${page}?onpage=${onPage}&sort=${sort.mode}&desc=${sort.isDescOrder}`
    axios.get(query).then((result) => {
      dispatch(updateGoods(result.data.data.goods, result.data.data.pages))
      dispatch(setLoadingCatalog(false))
    })
  }, [page, sort.mode, sort.isDescOrder])

  useEffect(() => {
    dispatch(setLoadingBasket(true))
    axios.post('/api/v1/basket', { items: basketLocal }).then((result) => {
      dispatch(updateBasket(result.data.data))
      dispatch(setLoadingBasket(false))
    })
  }, [basketLocal])

  return (
    <div className='w-screen mx-auto'>
      <Head title="Catalog" />
      <div className="h-100 w-full flex flex-col items-center justify-center bg-teal-lightest font-sans">
        <Header />
        <div className='max-w-screen-lg w-full min-h-screen mx-auto'>
          <Switch>
            <Route exact path="/basket" component={Basket} />
            <Route exact path="/:page?" component={Catalog} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default ECommerce
