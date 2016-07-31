import test from 'tape'
import * as actions from '../../actions'
import * as constants from '../../constants'
import expect from 'expect'
import { mockStore } from '../mockStore'
import { initialState } from '../initialState'
import nock from 'nock'

test('receiveEntities action', (t) => {
  const store = mockStore(initialState)
  store.dispatch(actions.receiveEntities('articles',
    { article1: { id: 1, title: 'article 1' },  article2: { id: 2, title: 'article 2' } }
  ))

  t.deepEqual(
    store.getActions(),
    [ {
      type: constants.RECEIVE_ENTITIES,
      key: 'articles',
      entities: { article1: { id: 1, title: 'article 1' },  article2: { id: 2, title: 'article 2' } }
    } ],
    'receiveEntities() should return entities'
  )

  t.end()
})
