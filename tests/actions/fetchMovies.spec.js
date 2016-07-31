import test from 'tape'
import * as actions from '../../actions'
import * as constants from '../../constants'
import expect from 'expect'
import { mockStore } from '../mockStore'
import { initialState } from '../initialState'
import nock from 'nock'

test('fetchFeed action', (t) => {
  nock('http://localhost:3000/me')
    .get('/feed')
    .reply(200, { body: { feed: [
      { id: 2634 }
    ] }})

  const store = mockStore(initialState)
  store.dispatch(actions.fetchFeed())
  t.deepEqual(
    store.getActions(),
    [ { obj: { feed: true }, type: 'RECEIVE_FETCHING' } ],
    'fetchFeed() should return feed true'
  )

  t.end()
})
