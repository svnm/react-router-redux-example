import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory, IndexRedirect, Redirect } from 'react-router'
import useScroll from 'scroll-behavior/lib/useStandardScroll'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import routes from './routes'
import * as reducers from './reducers'
import * as actions from './actions'
import styles from './styles/'

if(process.env.NODE_ENV === 'production') ga.initialize(process.env.GOOGLE_ANALYTICS_CODE)

const logger = createLogger({
  predicate: (getState, action) => action.type !== 'FETCHING'
})

const reducer = combineReducers({
   ...reducers
})

const store = createStore(reducer, applyMiddleware(thunk, logger))
const scrollHistory = useScroll(() => browserHistory)()

render(
  <Provider store={store}>
    <Router history={scrollHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
