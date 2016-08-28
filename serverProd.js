import express from 'express'
import serialize from 'serialize-javascript'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { createMemoryHistory, match, RouterContext } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import routes from './src/routes'
import * as reducers from './src/reducers'
import { getSiteUrl } from './src/lib/site'

const app = express()
app.use('/public', express.static(__dirname + '/public'))

/* Add headers as webpack dev server runs on port 5000 */
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

/* api endpoints */

const npmPackages = require('./src/api/routes/npmPackages')
app.use('/api/npmPackages', npmPackages)

const npmPackage = require('./src/api/routes/npmPackage')
app.use('/api/npmPackage', npmPackage)

/* configure store */
function configureStore(memoryHistory, initialState) {
  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
  })
  let store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware, routerMiddleware(memoryHistory))
    )
  )
  return store
}

/* html page */

const HTML = ({ content, store }) => (
  <html>
    <head>
      <link rel='stylesheet' type='text/css' href='/public/style.css' />
    </head>
    <body>
      <div id='root' dangerouslySetInnerHTML={{ __html: content }}/>
      <script dangerouslySetInnerHTML={{ __html: `window.__initialState__=${serialize(store.getState())};` }}/>
      <script src='/public/vendor.js' />
      <script src='/public/bundle.js' />
    </body>
  </html>
)

/* react router */
app.use(function (req, res) {
  const memoryHistory = createMemoryHistory(req.path)
  let store = configureStore(memoryHistory)
  const history = syncHistoryWithStore(memoryHistory, store)

  /* react router match history */
  match({ history, routes , location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {

      /* call static fetchData on the container component */
      fetchData().then( ()=> {
        store = configureStore(memoryHistory, store.getState() )
        const content = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps}/>
          </Provider>
        )
        res.send('<!doctype html>\n' + renderToString(<HTML content={content} store={store}/>))
      }).catch(function (error) {
        console.log(error.stack);
      });

      /* fetch data promise */
      function fetchData () {
        let { query, params } = renderProps;
        return new Promise(function(resolve, reject) {
          let comp = renderProps.components[renderProps.components.length - 1].WrappedComponent;
          let url = getSiteUrl()
          resolve(comp.fetchData({ params, store, url }));
        });
      }
    }
  })

})

app.listen(3000, 'localhost', function (err) {
  if (err) { console.log(err); return; }
  console.log('listening on http://127.0.0.1:3000')
})
