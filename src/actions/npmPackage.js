import fetch from 'isomorphic-fetch'
const constants = require('../constants')

function fetchPackage(name) {
  return dispatch => {
    return fetch(location.origin + '/api/npmPackage?npmPackage=' + name)
      .then(req => req.json())
      .then(json => dispatch(receivePackage(json)))
  }
}

function receivePackage(json) {
  return {
    type: constants.RECEIVE_PACKAGE,
    json: json,
    receivedAt: Date.now()
  }
}

module.exports = { fetchPackage, receivePackage }
