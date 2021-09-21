const UPDATE_BASKET = 'UPDATE_BASKET'
const CHANGE_SORT_MODE = 'CHANGE_SORT_MODE'
const SET_DESCENDING_ORDER = 'SET_DESCENDING_ORDER'
const ADD_GOOD = 'ADD_GOOD'
const REMOVE_GOOD = 'REMOVE_GOOD'
const CHANGE_PAGE = 'CHANGE_PAGE'
const SET_LOADING_BASKET = 'SET_LOADING_BASKET'

const initialState = {
  basket: {
    isLoading: false,
    goods: [],
    quanity: 0,
    total: 0,
    sort: {
      mode: 'title',
      isDescOrder: false
    }
  },
  basketLocal: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BASKET: {
      return {
        ...state,
        basket: action.basket
      }
    }
    case CHANGE_SORT_MODE: {
      return {
        ...state,
        sort: {
          ...state.sort,
          mode: action.mode
        }
      }
    }
    case SET_DESCENDING_ORDER: {
      return {
        ...state,
        sort: {
          ...state.sort,
          isDescOrder: action.isDescOrder
        }
      }
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        catalog: { ...state.catalog, page: action.number }
      }
    }
    case ADD_GOOD: {
      const quanity = (
        typeof state.basketLocal[action.id] === 'undefined' ? 1 : (state.basketLocal[action.id] + 1))
      return {
        ...state,
        basketLocal: { ...state.basketLocal, [action.id]: quanity }
      }
    }
    case REMOVE_GOOD: {
      const result = { ...state, basketLocal: { ...state.basketLocal } }
      if (state.basketLocal[action.id] > 1) {
        result.basketLocal[action.id] = state.basketLocal[action.id] - 1
      } else {
        delete result.basketLocal[action.id]
      }
      return result
    }
    case SET_LOADING_BASKET: {
      return {
        ...state,
        basket: {
          ...state.basket,
          isLoading: action.isLoading
        }
      }
    }
    default:
      return state
  }
}

export function updateBasket(basket) {
  return { type: UPDATE_BASKET, basket }
}
export function changeSortMode(mode) {
  return { type: CHANGE_SORT_MODE, mode }
}
export function setDescendingOrder(isDescOrder) {
  return { type: SET_DESCENDING_ORDER, isDescOrder }
}
export function switchPage(number) {
  return { type: CHANGE_PAGE, number }
}
export function addBasket(id) {
  return { type: ADD_GOOD, id }
}
export function removeGood(id) {
  return { type: REMOVE_GOOD, id }
}
export function setLoadingBasket(isLoading) {
  return { type: SET_LOADING_BASKET, isLoading }
}
