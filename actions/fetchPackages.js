import * as constants from '../constants'
import api from '../lib/request'
import * as actions from './'

const COMPONENTS = ['deku', 'react']
const MODULES = ['css']

export function fetchPackages(url, keyword) {
  return (dispatch, getState) => {
    dispatch(actions.receiveFetching({ packages: true }))
    let kw = 'react-component'
    if(COMPONENTS.includes(keyword)) { kw = `${keyword}-component` }
    if(MODULES.includes(keyword)) { kw = `${keyword}-modules` }
    api.get( url +  `/api/npmPackages?keyword=${kw}`).end().then(res => {
      const { body } = res
      dispatch(actions.receivePackages(body.npmPackages, keyword))
      dispatch(actions.receiveFetching({ packages: false }))
    })
  }
}
