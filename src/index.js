import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import reducers from './reducers'

/* container route components */
import Package from './containers/Package'
import Packages from './containers/Packages'
import Home from './containers/Home'
import App from './containers/App'

/* reducer */
const reducer = combineReducers(
  Object.assign(
    {}, reducers, { routing: routeReducer}
  )
);

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
const history = createHistory()

/* redux simple router */
syncReduxAndRouter(history, store)

/* generic styles */
import styles from './styles/base.css'

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
  document.getElementById('root')
)
