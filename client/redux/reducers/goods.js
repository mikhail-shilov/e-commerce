const UPDATE_GOODS = 'UPDATE_GOODS'
const ADD_BASKET = 'ADD_BASKET'
const REMOVE_BASKET = 'REMOVE_BASKET'

const initialState = {
  goodsOnPage: 12,
  currentPage: 1,
  goods: [],
  basket: [] // { someGood: %basePrice% }
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
      return {
        ...state,
        basket: [...state.basket, action.id]
      }
    }
    case REMOVE_BASKET: {
      return {
        ...state,
        basket: state.basket.filter(good => good.id !== action.goodId)
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
