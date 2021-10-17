import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import currency from './currency'
import catalog from './catalog'
import basket from './basket'
import log from './log'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    currency,
    catalog,
    basket,
    log
  })

export default createRootReducer
