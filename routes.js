import React from 'react'
import { IndexRoute, Route, Link, IndexRedirect, Redirect } from 'react-router'

/* containers */
import AppContainer from './containers/App'
import Packages from './containers/Packages'
import Pkg from './containers/Pkg'


const routes = (
  <Route path='/' component={AppContainer}>
    <IndexRedirect to='/packages/react' />
    <Route path='/packages/:keyword' component={Packages} />
    <Route path='/pkg/:name' component={Pkg} />
  </Route>
)

export default routes
