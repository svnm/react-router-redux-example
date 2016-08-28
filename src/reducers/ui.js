import * as constants from '../constants'
const initialState = {
  fetching: {
    packages: true,
    pkg: true
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.RECEIVE_FETCHING:
      var { obj } = action
        return {
          ...state,
          fetching: {
            ...state.fetching,
            ...obj
          }
        }
        break;

    default:
      return state
  }
}
