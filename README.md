Redux Simple Router Example
=====================

## Dependencies

* **react** `0.14.2`
* **redux** `3.0.4`
* **redux logger**
* **redux simple router** / **react router** for routing
* **babel** `6.1.0`
* **webpack** `1.12.6`
* **webpack dev server**
* **express** `4.13.3``
* **css modules** / **react-css-modules**
* **post-css** / **autoprefixer**
* **isomorphic-fetch** for api calls

and most importantly **Nothing else...**

okay technically **marked** for showing some markdown and **request** to make an API call

## Run it

```
npm install
npm start
open http://127.0.0.1:3000
```

## Function components or react components

For this example I mixed and matched between using functions and react components, 

e.g. [Footer](https://github.com/StevenIseki/redux-simple-router-example/blob/master/src/components/Footer.js) is a react component, [Header](https://github.com/StevenIseki/redux-simple-router-example/blob/master/src/components/Header.js) is just a function. 

This was just to show the difference in the approach. In a real app you might have a consistent approach maybe all components are functions, and containers are react components, or maybe all components are react components to make use of react-css-modules... It is up to you, you can mix and match like I did in the example if you like I guess too.


![](https://raw.githubusercontent.com/StevenIseki/redux-simple-router-example/master/screenshot.png)

## License

[MIT](http://isekivacenz.mit-license.org/)
