import * as constants from '../constants'

const initialState = {
  entities: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.RECEIVE_PACKAGES:
      const { entities, keyword } = action
      const packages = []
			entities.rows.map(function (p, i) {
				packages.push(
					{ id: i, name: p.key[1], description: p.key[2], keyword: keyword }
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
