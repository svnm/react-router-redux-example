import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducers from './reducers'

/* container components */
import Package from './containers/Package'
import Packages from './containers/Packages'
import Home from './containers/Home'
import App from './containers/App'

/* reducer */
const reducer = combineReducers(
  Object.assign(
    {}, reducers, { routing: routerReducer}
  )
);

/*
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})
*/

/* logger */
const loggerMiddleware = createLogger()

/* applyMiddleware */
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore)

/* store */
let initialState = undefined
const store = createStoreWithMiddleware(reducer, initialState)

/* history */
const history = syncHistoryWithStore(browserHistory, store)

/* generic styles */
import styles from './styles/base.css'
import normalize from './styles/normalize.css'
Object.assign(styles, normalize)

/* routes... */

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>

          <IndexRoute component={Home}/>
          <Route path="packages" component={Packages} />
          <Route path="/package/:id/:name" component={Package}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('mount')
)
