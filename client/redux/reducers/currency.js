export const USD = 'USD'
export const EUR = 'EUR'
export const CAD = 'CAD'
export const RUB = 'RUB'
const CHANGE_CURRENCY = 'CHANGE_CURRENCY'
const UPDATE_RATES = 'UPDATE_RATES'

const initialState = {
  date: null,
  activeCurrency: USD,
  rates: {
    [USD]: 1,
    [EUR]: null,
    [CAD]: null,
    [RUB]: null
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY: {
      return {
        ...state,
        activeCurrency: action.currency
      }
    }
    case UPDATE_RATES: {
      return {
        ...state,
        rates: action.rates
      }
    }
    default:
      return state
  }
}

export function updateCurrency(currency) {
  return { type: CHANGE_CURRENCY, currency }
}

export function updateRates(rates) {
  return { type: UPDATE_RATES, rates }
}
