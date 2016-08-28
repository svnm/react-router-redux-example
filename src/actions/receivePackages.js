const constants = require('../constants')

export function receivePackages(entities, keyword) {
  return {
    type: constants.RECEIVE_PACKAGES,
    entities,
    keyword
  }
}
