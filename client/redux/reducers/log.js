const SET_LOGGING_STATUS = 'SET_LOGGING_STATUS'
const UPDATE_LOG = 'UPDATE_LOG'

const initialState = {
  isLogging: false,
  log: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGING_STATUS: {
      return {
        ...state,
        isLogging: action.isLogging
      }
    }
    case UPDATE_LOG: {
      return {
        ...state,
        log: action.log
      }
    }
    default:
      return state
  }
}

export function updateLog(log) {
  return { type: UPDATE_LOG, log }
}
export function changeSortMode(isLogging) {
  return { type: SET_LOGGING_STATUS, isLogging }
}