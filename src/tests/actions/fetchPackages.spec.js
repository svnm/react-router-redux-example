import test from 'tape'
import * as actions from '../../actions'
import * as constants from '../../constants'
import expect from 'expect'
import { mockStore } from '../mockStore'
import { initialState } from '../initialState'
import nock from 'nock'
import { getSiteUrl } from '../../lib/site'


test('fetchPackages action', (t) => {
  /* mock the packages endpoint */
  nock('http://localhost:3000/packages')
    .get('/packages')
    .reply(200, { body: {
      rows: [
        { key: [ "deku-component", "deku-accordion", "accordion component for deku" ] },
        { key: [ "deku-component", "deku-arrange", "Arrange component for deku" ] }
      ]
    }})

  const store = mockStore(initialState)
  store.dispatch(actions.fetchPackages(getSiteUrl(), 'deku'))
  t.deepEqual(
    store.getActions(),
    [ { obj: { packages: true }, type: 'RECEIVE_FETCHING' } ],
    'fetchPackages() should return packages true'
  )

  t.end()
})
