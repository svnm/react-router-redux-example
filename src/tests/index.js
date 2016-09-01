require('css-modules-require-hook/preset');
require('babel-register');

/* components */
require('./components/Loader.spec.js');
require('./components/Menu.spec.js');
require('./components/PkgDetails.spec.js');
require('./components/PkgCard.spec.js');

/* actions */
require('./actions/fetchPackages.spec.js');
require('./actions/fetchPkg.spec.js');

/* reducers */
require('./reducers/ui.spec.js');
require('./reducers/packages.spec.js');
require('./reducers/pkg.spec.js');
