import fetch from 'isomorphic-fetch'
const constants = require('../constants');

function fetchPackage(name) {
  return dispatch => {
    return fetch('http://127.0.0.1:3000/api/package?package=' + name)
      .then(req => req.json())
      .then(json => dispatch(receivePackage(json)))
  }
}

function receivePackage(json) {
  return {
    type: constants.RECEIVE_PACKAGE,
    package: json.package,
    receivedAt: Date.now()
  }
}

function fetchPackages() {
  return dispatch => {
    return fetch('http://127.0.0.1:3000/api/packages?keyword=react-component')
      .then(req => req.json())
      .then(json => dispatch(receivePackages(json)))
  }
}

function receivePackages(json) {
  return {
    type: constants.RECEIVE_PACKAGES,
    packages: json.packages,
    receivedAt: Date.now()
  }
}

module.exports = { fetchPackage, receivePackage, fetchPackages, receivePackages };
