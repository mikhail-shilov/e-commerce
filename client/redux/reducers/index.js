import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import currency from './currency'
import goods from './goods'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    currency,
    goods
  })

export default createRootReducer
