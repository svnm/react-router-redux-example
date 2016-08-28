import test from 'tape'
import expect from 'expect'
import ui from '../../reducers/ui'
import { initialState } from '../initialState'

test('ui reducer', (t) => {

  t.deepEqual(
    ui(undefined, {}),
    initialState.ui,
    'ui reducer should return default state on init'
  )

  t.deepEqual(
    ui([], { type: 'RECEIVE_FETCHING', obj: { feed: false } } ),
    { fetching: { feed: false } },
    'RECEIVE_FETCHING should update fetching for the feed... '
  )

  t.end()
});
