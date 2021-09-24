import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { updateRates } from '../redux/reducers/currency'
import { setLoadingBasket, updateBasket } from '../redux/reducers/basket'

import NotFound from './404'
import Head from './head'
import Header from './Header'

import Catalog from './Catalog'
import Basket from './Basket'

const ECommerce = () => {
  const dispatch = useDispatch()
  const basketLocal = useSelector((state) => state.basket.basketLocal)
  const basketSort = useSelector((state) => state.basket.sorting)


  useEffect(() => {
    axios.get('/api/v1/rate').then((result) => {
      dispatch(updateRates(result.data.data.rates))
    })
  }, [])

  useEffect(() => {
    dispatch(setLoadingBasket(true))
    const query = `/api/v1/basket?sort=${basketSort.mode}&desc=${basketSort.isDescOrder}`
    axios.post(query, { items: basketLocal }).then((result) => {
      dispatch(updateBasket(result.data.data))
      dispatch(setLoadingBasket(false))
    })
  }, [basketLocal, basketSort])

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
