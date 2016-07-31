import React from 'react'
import { IndexRoute, Route, Link, IndexRedirect, Redirect } from 'react-router'

/* containers */
import AppContainer from './containers/App'
import Packages from './containers/Packages'

const routes = (
  <Route path='/' component={AppContainer}>
    <IndexRedirect to='/packages' />
    <Route path='/packages' component={Packages} />
  </Route>
)

export default routes
