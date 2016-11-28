import * as constants from '../constants';
import * as actions from './';

export function fetchPkg(url, name) {
  return (dispatch, getState) => {
    dispatch(actions.receiveFetching({ pkg: true }))

    fetch(url + '/api/npmPackage?npmPackage=' + name)
      .then( res => {
        if (res.status >= 400) { throw new Error("Error in response from server") }
        return res.json()
      })
      .then( res => {
        dispatch(actions.receivePkg(res.npmPackage))
        dispatch(actions.receiveFetching({ pkg: false }))
      })
  }
}
