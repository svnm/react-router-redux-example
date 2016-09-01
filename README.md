# [react-router-redux-example](https://github.com/StevenIseki/react-router-redux-example)

![](https://raw.githubusercontent.com/StevenIseki/react-router-redux-example/master/public/screenshot.png)

## A complete and minimal react-router-redux example

- latest version of react, redux, reselect and react-router
- hot reloading with webpack dev server
- Universal/ Isomorphic server rendering
- css modules and cssnext
- testing with enzyme.

## Dependencies

* **react** `15.3.1`
* **react-redux** `4.4.5`
* **react-router** `2.7.0`
* **react-router-redux** `4.0.5`
* **redux** `3.5.2`
* **reselect** `2.5.2`

## Run Dev

* webpack dev server with hot reloading, no server rendering

```
npm install
npm run dev
open http://127.0.0.1:5000
```

## Run Prod

* Universal server side rendering!

```
npm install
npm run build
npm run prod
open http://127.0.0.1:3000
```

## Testing

* Using Enzyme, Tape and Jsdom

```
npm install
npm test
```

## Versions

- [Version 1](https://github.com/StevenIseki/react-router-redux-example/tree/v1) was a little simpler not using reselect, no testing and using react v14

- [Version 2](https://github.com/StevenIseki/react-router-redux-example) is the current version with reselect, react v15 and a sidebar for different component types


## License

[MIT](http://isekivacenz.mit-license.org/)
