import test from 'tape'
import expect from 'expect'
import pkg from '../../reducers/pkg'
import { initialState } from '../initialState'

test('pkg reducer', (t) => {

  t.deepEqual(
    pkg(undefined, {}),
    initialState.pkg,
    'pkg reducer should return default state on init'
  )

  t.deepEqual(
    pkg([], { type: 'RECEIVE_PKG', key: 'feed', entity: { name: 'React Search' } } ),
    { entity: { name: 'React Search' } },
    'RECEIVE_PKG should update the pkg entity...'
  )

  t.end()
});
