export const USD = 'USD'
export const EUR = 'EUR'
export const CAD = 'CAD'
const CHANGE_CURRENCY = 'CHANGE_CURRENCY'


const initialState = {
  date: null,
  activeCurrency: USD,
  rates: {
    [USD]: 1,
    [EUR]: null,
    [CAD]: null
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY: {
      return {
        ...state,
        activeCurrency: action.currency
      }
    }
    default:
      return state
  }
}

export function updateCurrency(currency) {  
  return { type: CHANGE_CURRENCY, currency }  
}  