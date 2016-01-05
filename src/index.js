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
import { App, Home, Packages } from './components'

import User from './components/User'
import Users from './components/Users'
import Package from './components/Package'

const reducer = combineReducers(
  Object.assign(
    {}, reducers, { routing: routeReducer}
  )
);

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore)

let initialState = undefined
const store = createStoreWithMiddleware(reducer, initialState)
const history = createHistory();

syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={store}>
    <div>

      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>

          <Route path="packages" component={Packages} />
          <Route path="/package/:userId" component={Package}/>

        </Route>
      </Router>

    </div>
  </Provider>,
  document.getElementById('root')
);
