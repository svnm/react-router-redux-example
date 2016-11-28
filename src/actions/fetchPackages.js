import * as constants from '../constants'
import * as actions from './'
import fetch from 'isomorphic-fetch'

const COMPONENTS = ['deku', 'react']
const MODULES = ['css']

export function fetchPackages(url, keyword) {
  return (dispatch, getState) => {
    dispatch(actions.receiveFetching({ packages: true }))
    let kw = 'react-component'
    if(COMPONENTS.includes(keyword)) { kw = `${keyword}-component` }
    if(MODULES.includes(keyword)) { kw = `${keyword}-modules` }

    fetch(url +  `/api/npmPackages?keyword=${kw}`)
      .then( res => {
        if (res.status >= 400) { throw new Error("Error in response from server") }
        return res.json()
      })
      .then( res => {
        dispatch(actions.receivePackages(res.npmPackages, keyword))
        dispatch(actions.receiveFetching({ packages: false }))
      })
  }
}
