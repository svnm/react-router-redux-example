import * as constants from '../constants';
import api from '../lib/request';
import each from 'lodash/each';
import * as actions from './';

export function fetchPackages() {
  return (dispatch, getState) => {
    dispatch(actions.receiveFetching({ packages: true }))
    api.get( 'http://localhost:3000' + '/api/npmPackages?keyword=react-component').end().then(res => {
      const { body } = res
      dispatch(actions.receivePackages(body.npmPackages))
      dispatch(actions.receiveFetching({ packages: false }))
    })
  }
}
