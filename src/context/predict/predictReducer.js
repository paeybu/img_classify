import {
  PREDICT_URL,
  SET_MODEL,
  SET_DISPLAY,
  SET_URL,
  CLEAR_RESULT
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case PREDICT_URL:
      return {
        ...state,
        result: action.payload,
        loading: false
      }
    case SET_MODEL:
      return {
        ...state,
        model: action.payload
      }
    case SET_URL:
      return {
        ...state,
        url: action.payload
      }
    case SET_DISPLAY:
      return {
        ...state,
        style: {
          display: 'block'
        }
      }
    case CLEAR_RESULT:
      return {
        ...state,
        result: []
      }
    default:
      return {
        state
      }
  }
}
