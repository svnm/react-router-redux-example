import * as constants from '../constants'

const initialState = {
  entity: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.RECEIVE_PKG:
      const { entity } = action
      return {
        ...state,
        entity
      }
      break;

    default:
      return state
  }
}
