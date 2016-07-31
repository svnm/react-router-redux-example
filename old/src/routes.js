import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'

/* container components */
import App from './containers/App'
import Home from './containers/Home/Home'
import Package from './containers/Package/Package'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/package/:id/:name" component={Package}/>
  </Route>
)

export default routes
