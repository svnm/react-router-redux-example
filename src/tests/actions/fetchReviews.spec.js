import test from 'tape'
import * as actions from '../../actions'
import * as constants from '../../constants'
import expect from 'expect'
import { mockStore } from '../mockStore'
import { initialState } from '../initialState'

test('fetchConversations action', (t) => {

  const store = mockStore(initialState)
  store.dispatch(actions.fetchConversations())

  t.deepEqual(
    store.getActions(),
    [ { obj: { conversations: true }, type: 'RECEIVE_FETCHING' } ],
    'fetchConversations() should return conversations true'
  )

  t.end()
})
