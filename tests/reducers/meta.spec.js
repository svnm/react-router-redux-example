import test from 'tape'
import expect from 'expect'
import meta from '../../reducers/meta'
import { initialState } from '../initialState'

test('meta reducer', (t) => {

  t.deepEqual(
    meta(undefined, {}),
    initialState.meta,
    'meta reducer should return default state on init'
  )

  t.deepEqual(
    meta([], { type: 'RECEIVE_META', key: 'feed', meta: [ 1,2,3 ] } ),
    { feed: [ 1, 2, 3 ] },
    'RECEIVE_META should update the feed metadata...'
  )

  t.deepEqual(
    meta([], { type: 'FOLLOW_USER', following: [ 3, 6 ] } ),
    { following: [ 3, 6 ] },
    'FOLLOW_USER should set the following user ids...'
  )

  t.end()
});
