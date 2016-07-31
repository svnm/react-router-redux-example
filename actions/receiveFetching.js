import * as constants from '../constants';

export function receiveFetching(obj) {
  return {
    type: constants.RECEIVE_FETCHING,
    obj
  }
}
