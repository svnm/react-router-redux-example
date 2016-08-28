const constants = require('../constants')

export function receivePkg(entity) {
  return {
    type: constants.RECEIVE_PKG,
    entity
  }
}
