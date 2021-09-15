import React, { useEffect } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
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
  const { page } = useParams()
  const basketLocal = useSelector((state) => state.goods.basketLocal)
  console.log('page')
  console.log(page)

  useEffect(() => {
    axios.get('/api/v1/rate').then((result) => {
      dispatch(updateRates(result.data.data.rates))
    })
  }, [])

  useEffect(() => {
    axios.get(`/api/v1/goods/${page}`).then((result) => {
      dispatch(updateGoods(result.data.data.goods, result.data.data.pages))
    })
  }, [page])

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
    <div className='w-screen mx-auto'>
      <Head title="Catalog" />
      <div className="h-100 w-full flex flex-col items-center justify-center bg-teal-lightest font-sans">
        <Header />
        <div className='max-w-screen-lg mx-auto'>
          <Switch>
            <Route exact path="/:page?" component={Catalog} />
            <Route exact path="/basket" component={Basket} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default ECommerce
