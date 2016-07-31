import * as constants from '../constants';
import api from '../lib/request';
import * as actions from './';

export function fetchPkg(name) {
  return (dispatch, getState) => {
    dispatch(actions.receiveFetching({ pkg: true }))
    api.get( 'http://localhost:3000' + '/api/npmPackage?npmPackage=' + name).end().then(res => {
      const { body } = res
      dispatch(actions.receivePkg(body.npmPackage))
      dispatch(actions.receiveFetching({ pkg: false }))
    })
  }
}
