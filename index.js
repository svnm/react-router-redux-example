import 'babel-polyfill'
require('es6-promise').polyfill()
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory, Redirect } from 'react-router'
import useScroll from 'scroll-behavior/lib/useStandardScroll'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import createLogger from 'redux-logger'
import routes from './src/routes'
import * as reducers from './src/reducers'
import * as actions from './src/actions'
import styles from './src/styles/'

const logger = createLogger({
  predicate: (getState, action) => action.type !== 'FETCHING'
})

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(reducer, applyMiddleware(thunk, logger))
const scrollHistory = useScroll(() => browserHistory)()
const history = syncHistoryWithStore(scrollHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
