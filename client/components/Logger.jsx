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
    api.postLog(recordConstructor(recordTypes.navigate, location.pathname, null, message))
  }, [location])

  // Add and remove - in handlers :(

  return (null)
}

export default Logger
