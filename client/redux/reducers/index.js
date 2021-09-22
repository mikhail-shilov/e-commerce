import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import currency from './currency'
import catalog from './catalog'
import basket from './basket'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    currency,
    catalog,
    basket
  })

export default createRootReducer
