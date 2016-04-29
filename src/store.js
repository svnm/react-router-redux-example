import React from 'react'

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer as routing, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger';
import * as reducers from './reducers'

const logger = createLogger({
  level: 'info',
  collapsed: true
})

export function configureStore(history, initialState) {

  const reducer = combineReducers({
    ...reducers,
    routing
  })

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        logger,
        thunkMiddleware,
        routerMiddleware(history)
      )
    )
  )

  return store
}
