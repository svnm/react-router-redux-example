const constants = require('../constants')

export function receivePackages(entities) {
  return {
    type: constants.RECEIVE_PACKAGES,
    entities
  }
}
