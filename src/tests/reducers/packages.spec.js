import test from 'tape'
import expect from 'expect'
import packages from '../../reducers/packages'
import { initialState } from '../initialState'

test('packages reducer', (t) => {

  t.deepEqual(
    packages(undefined, {}),
    initialState.packages,
    'packages reducer should return default state on init'
  )

  const entities = { rows: [
    { key: [ "deku-component", "deku-accordion", "accordion component for deku" ] },
    { key: [ "deku-component", "deku-arrange", "Arrange component for deku" ] }
  ]}

  t.deepEqual(
    packages([], { type: 'RECEIVE_PACKAGES', entities: entities, keyword: 'deku' } ),
    { entities: [
      {
        description: "accordion component for deku",
        id: 0,
        keyword: "deku",
        name: "deku-accordion"
      },
      {
        description: "Arrange component for deku",
        id: 1,
        keyword: "deku",
        name: "deku-arrange"
      }
    ]},
    'RECEIVE_ENTITIES should update the article entities...'
  )

  t.end()
});
