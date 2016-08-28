import defaults from 'superagent-defaults';
import superagent from 'superagent';
import superagentPromise from 'superagent-promise';
import prefix from 'superagent-prefix';

let request = defaults(superagentPromise(superagent, Promise));

request
  .use(prefix(process.env.URL))
  .set('Accept', 'application/json')
  .set('Content-type', 'application/json')
  .withCredentials();

export default request;
