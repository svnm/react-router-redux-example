import test from 'tape'
import expect from 'expect'
import entities from '../../reducers/entities'
import { initialState } from '../initialState'

test('entities reducer', (t) => {

  t.deepEqual(
    entities(undefined, {}),
    initialState.entities,
    'entities reducer should return default state on init'
  )

  const articles = { article1: { id: 1, title: 'article 1' },  article2: { id: 2, title: 'article 2' } }
  t.deepEqual(
    entities([], { type: 'RECEIVE_ENTITIES', key: 'articles', entities: articles } ),
    { articles: { article1: { id: 1, title: 'article 1' }, article2: { id: 2, title: 'article 2' } } },
    'RECEIVE_ENTITIES should update the article entities...'
  )

  const ents = entities(initialState.entities, { type: 'VIEWED_ENTITIES', key: 'conversations_viewed_at' } )
  t.pass(
    ents.users[1].conversations_viewed_at instanceof Date
  )

  initialState.entities.users[1] = { feed_states: { feed_state_conversations: null } }
  const ents2 = entities(initialState.entities, { type: 'RECEIVE_CURRENT_USER_FEED', currentFeed: { feed_state_conversations: [1,2,3] }, key: 'feed_state_conversations' } )

  t.deepEqual(
    { feed_states: { feed_state_conversations: '[1,2,3]' } },
    ents2.users[1],
    'RECEIVE_CURRENT_USER_FEED should set the feed state for the current users feed_state_conversations...'
  )


  t.end()
});
