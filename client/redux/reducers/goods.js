const UPDATE_GOODS = 'UPDATE_GOODS'

const initialState = {
  goodsOnPage: 12,
  currentPage: 1,
  goods: [],
  test: 42
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GOODS: {
      return {
        ...state,
        goods: action.goods
      }
    }
    default:
      return state
  }
}

export function updateGoods(goods) {  
  return { type: UPDATE_GOODS, goods }  
}   