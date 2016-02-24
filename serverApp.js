import express from 'express'
import serialize from 'serialize-javascript'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from './webpack.config'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createMemoryHistory, match, RouterContext } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { configureStore } from './src/store'
import routes from './src/routes'
const config = require('./package').config;

import getPackage from './src/api/getPackage'
import getPackages from './src/api/getPackages'


const app = express()

/* api endpoints */

import npmPackages from './src/api/routes/npmPackages'
app.use('/api/npmPackages', npmPackages)

import npmPackage from './src/api/routes/npmPackage'
app.use('/api/npmPackage', npmPackage)


app.use(webpackDevMiddleware(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true }
}))


const HTML = ({ content, store }) => (
  <html>
    <head>
      <link rel='stylesheet' type='text/css' href='/__build__/style.css' />
    </head>
    <body>
      <div id='mount' dangerouslySetInnerHTML={{ __html: content }}/>
      <script dangerouslySetInnerHTML={{ __html: `window.__initialState__=${serialize(store.getState())};` }}/>
      <script src='/__build__/bundle.js' />
    </body>
  </html>
)


app.use(function (req, res) {

  const memoryHistory = createMemoryHistory(req.path)

    
    let store = configureStore(memoryHistory )
    const history = syncHistoryWithStore(memoryHistory, store)

    /* react router match history */
    match({ history, routes , location: req.url }, (error, redirectLocation, renderProps) => {

      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {

        /* this is where the initial state can be set in the store */
        let packageName = renderProps.params.name
        
        getPackage(packageName, function (error, response, body) {

          var initialState = { npmPackage: JSON.parse(body) }
          store = configureStore(memoryHistory, initialState )

          const content = renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps}/>
            </Provider>
          )

          res.send('<!doctype html>\n' + renderToString(<HTML content={content} store={store}/>))

        })


      }
    })


  })


app.listen(config.port, 'localhost', function (err) {
  if (err) {
    //console.log(err);
    return;
  }

  console.log(`listening on port: ${config.port}`)
})
