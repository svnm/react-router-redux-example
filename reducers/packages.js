import * as constants from '../constants'

const initialState = {
  entities: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    /* might come in handy here, with css module, deku packages */
    case constants.RECEIVE_PACKAGES:
      const { entities } = action
      const packages = []
			entities.rows.map(function (p, i) {
				packages.push(
					{ id: i, name: p.key[1], description: p.key[2] }
				)
			})
      return {
        ...state,
        entities: packages
      }
      break;

    default:
      return state
  }
}
