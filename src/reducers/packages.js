const constants = require('../constants');

const initialState = {
  isFetching: false, 
  npmPackages: [],
  selectedPackage: {}
}

function update(state = initialState, action) {

	switch (action.type) {

		case constants.RECEIVE_PACKAGE:
			console.log(action.package)			
			return { 
				npmPackages: state.npmPackages, 
				selectedPackage: action.package, 
				isFetching: false 
			}

		case constants.RECEIVE_PACKAGES:
			console.log(action.packages)
			const npmPackages = []
			/* loop through and parse the npm packages */
			action.packages.rows.map(function (p, i) {
				npmPackages.push(
					{
						id: i,
						name: p.key[1],
						description: p.key[2]
					}
				)
			})
			
			return { 
				npmPackages: npmPackages, 
				selectedPackage: state.selectedPackage, 
				isFetching: false 
			}

		default:
			return state
  }
}

module.exports = update;
