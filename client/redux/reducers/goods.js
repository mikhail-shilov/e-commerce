const UPDATE_GOODS = 'UPDATE_GOODS'
const ADD_BASKET = 'ADD_BASKET'
const REMOVE_BASKET = 'REMOVE_BASKET'
const UPDATE_TOTAL = 'UPDATE_TOTAL'


const initialState = {
  goodsOnPage: 12,
  currentPage: 1,
  goods: [],
  basket: [], // { someGood: %basePrice% }
  total: 0
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
      const quanity = ((typeof state.basket[action.id] === 'undefined')? 1 : (state.basket[action.id] + 1))
      return {
        ...state,
        basket: { ...state.basket, [action.id]: quanity }
      }
    }
    case REMOVE_BASKET: {
      return {
        ...state,
        basket: state.basket.filter(good => good.id !== action.goodId)
      }
    }
    case UPDATE_TOTAL: {
      return {
        ...state,
        total: action.total
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
export function updateTotal(total) {
  return { type: UPDATE_TOTAL, total }
}
