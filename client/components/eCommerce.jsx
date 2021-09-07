import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import Head from './head'
import Header from './Header'
import { updateRates } from '../redux/reducers/currency'

const ECommerce = () => {
  const dispatch = useDispatch()
  const rates = useSelector((state) => state.currency.rates)
  const activeCurrency = useSelector((state) => state.currency.activeCurrency)

  useEffect(() => {
    axios.get('/api/v1/rate').then((result) => {
      dispatch(updateRates(result.data.data.rates))
    })
  }, [])

  const test = useSelector((state) => state.goods.test)
  return (
    <div>
      <Head title="Catalog" />
      <div className="h-100 w-screen flex flex-col items-center justify-center bg-teal-lightest font-sans">
        <Header />
        Goods will be here! <br />
        Price in {activeCurrency}: {(test * rates[activeCurrency]).toFixed(2)}<br />
        {rates[activeCurrency]}
      </div>
    </div>
  )
}

export default ECommerce
