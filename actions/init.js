import api from '../lib/request';
import * as actions from './';

export function init(dispatch) {
  return dispatch => {
    dispatch(actions.fetchPackages())
    dispatch(actions.fetchPkg('react-search'))
  }
}
