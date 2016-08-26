import test from 'tape'
import * as actions from '../../actions'
import * as constants from '../../constants'
import expect from 'expect'
import { mockStore } from '../mockStore'
import { initialState } from '../initialState'
import nock from 'nock'

test('receiveMeta action', (t) => {
  const store = mockStore(initialState)
  store.dispatch(actions.receiveMeta(
    'feed',
    [ 1,2,3 ]
  ))

  t.deepEqual(
    store.getActions(),
    [ {
      type: constants.RECEIVE_META,
      key: 'feed',
      meta: [ 1,2,3 ]
    } ],
    'receiveMeta() should return entities'
  )

  t.end()
})
