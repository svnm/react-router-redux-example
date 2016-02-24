const constants = require('../constants');

const initialState = []

function update(state = initialState, action) {

	switch (action.type) {

		case constants.RECEIVE_PACKAGES:

			const npmPackages = []
			/* parse the npm packages */
			action.json.npmPackages.rows.map(function (p, i) {
				npmPackages.push(
					{
						id: i,
						name: p.key[1],
						description: p.key[2]
					}
				)
			})

			return Object.assign({}, state, { packages: npmPackages } )

		default:
			return state
  }
}

module.exports = update;
