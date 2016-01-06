Redux Simple Router Example
=====================

## Dependencies

* react
* redux
* redux dev tools
* routing with redux simple router/ react router
* babel 6
* webpack
* webpack dev server
* express
* css modules/ react-css-modules
* post-css autoprefixer
* isomorphic-fetch for api calls

and most importantly

**Nothing else...**

okay technically `marked` for showing markdown, `request` to make an API call to get the state and a few awesomely simple css modules like `css-module-block-loader`

## Run it

```
npm install
npm start
open http://127.0.0.1:3000
```

![](https://github.com/StevenIseki/redux-simple-router-example/blob/master/redux-simple-router-example/screenshot.png)

## Function components or react components

For this example I mixed and matched a bit between using functions and react components, this was really just to show the difference in the approach. In a real app you might have some consistent approach maybe all dump components are functions, and containers are react components, or maybe all dumb components are react components because they can then make use of react-css-modules for styleNames... It is up to you, you can mix and match like I did in the example if you like I guess too.

## License

[MIT](http://isekivacenz.mit-license.org/)
