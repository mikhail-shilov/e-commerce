import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import api, { recordConstructor, recordTypes } from '../api/api'
import { usePrevious } from './eCommerce'

const Logger = () => {

  // Logging change currency
  const activeCurrency = useSelector((state) => state.currency.activeCurrency)
  const prevCurrency = usePrevious(activeCurrency)
  useEffect(() => {
    const message = `Now currency - ${activeCurrency}. Was - ${prevCurrency}`
    api.postLog(recordConstructor(recordTypes.currency, message))
  }, [activeCurrency])

  // Logging change sorting 
  const sort = useSelector((state) => state.catalog.sorting)
  useEffect(() => {
    const message = `Now goods sorting ${sort.mode}. Order - ${sort.isDescOrder ? 'descend' : 'ascend'}`
    api.postLog(recordConstructor(recordTypes.sort, message))
  }, [sort.mode, sort.isDescOrder])

  // Logging navigate page 
  const location = useLocation()
  useEffect(() => {
    const message = `Navigate path: ${location.pathname}`
    api.postLog(recordConstructor(recordTypes.navigate, message))
  }, [location])

  // Logging add/remove basket
  const basketQuanity = useSelector((state) => state.basket.quanity)
  const prevBasketQuanity = usePrevious(basketQuanity)
  const basketgoods = useSelector((state) => state.basket.goods)
  const prevBasketgoods = usePrevious(basketgoods)

  useEffect(() => {
    const biggestList = basketQuanity > prevBasketQuanity ? [...basketgoods] : [...prevBasketgoods]
    const smallestList = basketQuanity < prevBasketQuanity ? [...basketgoods] : [...prevBasketgoods]

    console.log('effect')

    const titleOfGood = biggestList.reduce((title, recordOfGood, index) => {
      console.log(index)
      console.log(title)
      console.log(recordOfGood)
      console.log(biggestList)
      console.log(smallestList.indexOf(recordOfGood.id))

      // console.log(smallestList.findindex(item => item.id === recordOfGood.id))
      return ('msg')
    })

    console.log(titleOfGood)
    // const message = 'msg'


  }, [basketQuanity])




  return (null)
}

export default Logger
