const constants = require('../constants');

const initialState = {}

function update(state = initialState, action) {

	switch (action.type) {

		case constants.RECEIVE_PACKAGE:
			return Object.assign({}, state, action.json.npmPackage)
		default:
			return state
  }
}

module.exports = update;
