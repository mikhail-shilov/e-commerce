import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { updateRates } from '../redux/reducers/currency'
import { updateBasket, updateGoods } from '../redux/reducers/goods'

import Head from './head'
import NotFound from './404'
import Header from './Header'
import Catalog from './Catalog'
import Basket from './Basket'

const ECommerce = () => {
  const dispatch = useDispatch()
  const basketLocal = useSelector((state) => state.goods.basketLocal)


  useEffect(() => {
    axios.get('/api/v1/rate').then((result) => {
      dispatch(updateRates(result.data.data.rates))
    })
  }, [])

  useEffect(() => {
    axios.get('/api/v1/goods').then((result) => {
      dispatch(updateGoods(result.data.data))
    })
  }, [])

  useEffect(() => {
    axios.post('/api/v1/basket', { items: basketLocal }).then((result) => {
      console.log('basketLocal:')
      console.log(basketLocal)
      dispatch(updateBasket(result.data.data))
      console.log('basket:')
      console.log(result.data.data)
      console.log('basketLocal')
      console.log(basketLocal)
    })
  }, [basketLocal])

  return (
    <div>
      <Head title="Catalog" />
      <div className="h-100 w-screen flex flex-col items-center justify-center bg-teal-lightest font-sans">
        <Header />
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route exact path="/basket" component={Basket} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  )
}

export default ECommerce
