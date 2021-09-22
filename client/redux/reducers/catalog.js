const UPDATE_GOODS = 'UPDATE_GOODS'
const CHANGE_PAGE = 'CHANGE_PAGE'
const CHANGE_SORT_MODE = 'CHANGE_SORT_MODE'
const SET_DESCENDING_ORDER = 'SET_DESCENDING_ORDER'
const SET_LOADING_CATALOG = 'SET_LOADING_CATALOG'

const initialState = {
  isCatalogLoading: false,
  goods: [],
  pages: null,
  page: 1,
  onPage: 20,
  sorting: {
    mode: 'title',
    isDescOrder: false
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GOODS: {
      return {
        ...state,
        goods: [...action.goods],
        pages: action.pages
      }
    }
    case CHANGE_SORT_MODE: {
      return {
        ...state,
        sorting: {
          ...state.sorting,
          mode: action.mode
        }
      }
    }
    case SET_DESCENDING_ORDER: {
      return {
        ...state,
        sorting: {
          ...state.sorting,
          isDescOrder: action.isDescOrder
        }
      }
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        page: action.number
      }
    }
    case SET_LOADING_CATALOG: {
      return {
        ...state,
        isLoading: action.isLoading
      }
    }
    default:
      return state
  }
}

export function updateGoods(goods, pages) {
  return { type: UPDATE_GOODS, goods, pages }
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
export function setLoadingCatalog(isLoading) {
  return { type: SET_LOADING_CATALOG, isLoading }
}
