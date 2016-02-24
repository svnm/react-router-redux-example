# [react-router-redux-example](https://github.com/StevenIseki/react-router-redux-example)

![](https://raw.githubusercontent.com/StevenIseki/react-router-redux-example/master/screenshot.png)

## Dependencies

* **react** `0.14.7`
* **react-css-modules** `3.6.1`
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
* **autoprefixer** `6.1.0`
* **isomorphic-fetch** `2.2.0`

## Run

```
npm install
npm start
open http://127.0.0.1:3000
```

## Functions vs React components

For this example I mixed and matched between using functions and react components, 

e.g. [Footer](https://github.com/StevenIseki/redux-simple-router-example/blob/master/src/components/Footer.js) is a react component, [Header](https://github.com/StevenIseki/redux-simple-router-example/blob/master/src/components/Header.js) is just a function. 

This was just to show the difference in the approach. In a real app you might have a consistent approach maybe using functions for the containers which connect to redux, and react components for the dumb components making use of react-css-modules... It is up to you, you can mix and match like I did in the example if you like I guess too.

## License

[MIT](http://isekivacenz.mit-license.org/)
