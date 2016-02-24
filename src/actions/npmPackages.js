import fetch from 'isomorphic-fetch'
const constants = require('../constants')

function fetchPackages() {
  return dispatch => {
    return fetch(location.origin + '/api/npmPackages?keyword=react-component')
      .then(req => req.json())
      .then(json => dispatch(receivePackages(json)))
  }
}

function receivePackages(json) {
  return {
    type: constants.RECEIVE_PACKAGES,
    json: json,
    receivedAt: Date.now()
  }
}

module.exports = { fetchPackages, receivePackages }
