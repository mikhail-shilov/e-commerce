import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import currency from './currency'
import goods from './goods'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    currency,
    goods
  })

export default createRootReducer
