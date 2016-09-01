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
    ui([], { type: 'RECEIVE_FETCHING', obj: { pkg: false } } ),
    { fetching: { pkg: false } },
    'RECEIVE_FETCHING should update fetching for a package... '
  )

  t.end()
});
