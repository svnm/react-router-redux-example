require('css-modules-require-hook/preset');
require('babel-register');

/* components */
//require('./components/Visit.spec.js');

/* actions */
require('./actions/fetchMovies.spec.js');
require('./actions/fetchReviews.spec.js');
require('./actions/receiveEntities.spec.js');
require('./actions/receiveFetching.spec.js');
require('./actions/receiveMeta.spec.js');

/* reducers */
require('./reducers/ui.spec.js');
require('./reducers/entities.spec.js');
require('./reducers/meta.spec.js');
