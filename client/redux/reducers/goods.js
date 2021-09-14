const UPDATE_GOODS = 'UPDATE_GOODS'
const ADD_BASKET = 'ADD_BASKET'
const REMOVE_BASKET = 'REMOVE_BASKET'
const UPDATE_BASKET = 'UPDATE_BASKET'

const initialState = {
  goodsOnPage: 12,
  currentPage: 1,
  goods: [],
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
        goods: action.goods
      }
    }
    case ADD_BASKET: {
      const quanity = ((typeof state.basketLocal[action.id] === 'undefined') ? 1 : (state.basketLocal[action.id] + 1))
      return {
        ...state,
        basketLocal: { ...state.basketLocal, [action.id]: quanity }
      }
    }
    case REMOVE_BASKET: {
      return {
        ...state,
        basketLocal: state.basketLocal.filter(good => good.id !== action.id)
      }
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

export function updateGoods(goods) {
  return { type: UPDATE_GOODS, goods }
}
export function addBasket(id) {
  return { type: ADD_BASKET, id }
}
export function updateBasket(basket) {
  return { type: UPDATE_BASKET, basket }
}
