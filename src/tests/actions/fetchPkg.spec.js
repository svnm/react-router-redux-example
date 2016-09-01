import test from 'tape'
import * as actions from '../../actions'
import * as constants from '../../constants'
import expect from 'expect'
import { mockStore } from '../mockStore'
import { initialState } from '../initialState'
import nock from 'nock'
import { getSiteUrl } from '../../lib/site'


test('fetchPkg action', (t) => {
  /* mock the pkg endpoint */
  nock('http://localhost:3000/pkg')
    .get('/pkg')
    .reply(200, { body: {
      entity: { name: 'react-search' }
    }})

  const store = mockStore(initialState)
  store.dispatch(actions.fetchPkg(getSiteUrl(), 'react-search'))
  t.deepEqual(
    store.getActions(),
    [ { obj: { pkg: true }, type: 'RECEIVE_FETCHING' } ],
    'fetchPackages() should return pkg true'
  )

  t.end()
})
