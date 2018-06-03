import {
  VIEW_MODE_CHANGE,
} from '../actions'

const initialState = {
  viewMode: 'VIEW_MODE_LARGE',
}

export const reducer = (state = initialState, { payload, type }) => {
  console.log(state, payload, type)
  switch (type) {
    case VIEW_MODE_CHANGE:
      return {
        ...state,
        viewMode: payload,
      }
    default:
      return state
  }
}
