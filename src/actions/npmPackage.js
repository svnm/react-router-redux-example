import fetch from 'isomorphic-fetch'
const constants = require('../constants')

function fetchPackage(url, name) {
  return dispatch => {
    return fetch(url + '/api/npmPackage?npmPackage=' + name )
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
