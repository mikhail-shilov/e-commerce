const UPDATE_GOODS = 'UPDATE_GOODS'
const ADD_GOOD = 'ADD_GOOD'
const REMOVE_GOOD = 'REMOVE_GOOD'
const UPDATE_BASKET = 'UPDATE_BASKET'
const CHANGE_PAGE = 'CHANGE_PAGE'

const initialState = {
  catalog: {
    goods: [],
    pages: null,
    page: 1,
    onPage: 12
  },

  onPage: 12,
  currentPage: 1,
  goods: [],
  pages: 0,

  basketLocal: {}, // { goodId: %quanity% }

  basket: {
    goods: [],
    quanity: 0,
    total: 0
  } // response of server
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GOODS: {
      return {
        ...state,
        catalog: {
          ...state.catalog,
          goods: action.goods,
          pages: action.pages
        },
        goods: action.goods
      }
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        catalog: { ...state.catalog, page: action.page }
      }
    }
    case ADD_GOOD: {
      const quanity = ((typeof state.basketLocal[action.id] === 'undefined') ? 1 : (state.basketLocal[action.id] + 1))
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
    case UPDATE_BASKET: {
      return {
        ...state,
        basket: action.basket
      }
    }

    default:
      return state
  }
}

export function updateGoods(goods, pages) {
  return { type: UPDATE_GOODS, goods, pages }
}
export function addBasket(id) {
  return { type: ADD_GOOD, id }
}
export function removeGood(id) {
  return { type: REMOVE_GOOD, id }
}
export function updateBasket(basket) {
  return { type: UPDATE_BASKET, basket }
}
