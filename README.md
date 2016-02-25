# [react-router-redux-example](https://github.com/StevenIseki/react-router-redux-example)

![](https://raw.githubusercontent.com/StevenIseki/react-router-redux-example/master/screenshot.png)

react-router-redux example with universal rendering and css modules, which was a bit tricky to implement, but easy enough now thanks to css-modules-require-hook

## Dependencies

* **react** `0.14.7`
* **react-dom** `0.14.7`
* **react-redux** `4.3.0`
* **react-router** `2.0.0`
* **react-router-redux** `3.0.0`
* **redux** `3.2.1`
* **redux-logger** `2.3.1`
* **redux-thunk** `1.0.3`
* **babel** `6.1.0`
* **webpack** `1.12.6`
* **webpack-dev-middleware** `2.0.0`
* **express** `4.13.3`
* **post-css** `0.7.0`
* **css-modules-require-hook** `3.0.0`
* **autoprefixer** `6.1.0`
* **isomorphic-fetch** `2.2.0`

## Run Dev

* webpack dev server, client side only, no server rendering

```
npm install
npm run start:dev
open http://127.0.0.1:3000
```

## Run Prod

* Universal rendering with react-redux-router and Express

```
npm install
npm run build
npm run start:prod
open http://127.0.0.1:3000
```

## License

[MIT](http://isekivacenz.mit-license.org/)
