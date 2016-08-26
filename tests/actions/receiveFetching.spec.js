import test from 'tape'
import * as actions from '../../actions'
import * as constants from '../../constants'
import expect from 'expect'
import { mockStore } from '../mockStore'
import { initialState } from '../initialState'
import nock from 'nock'

test('receiveFetching action', (t) => {
  const store = mockStore(initialState)
  store.dispatch(actions.receiveFetching(
    { notifications: true }
  ))

  t.deepEqual(
    store.getActions(),
    [
      {
        type: constants.RECEIVE_FETCHING,
        obj: { notifications: true }
      }
    ],
    'receiveFetching() should return fetching true'
  )

  t.end()
})
