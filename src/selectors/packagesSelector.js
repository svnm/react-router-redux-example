import { createSelector } from 'reselect'

export const packagesSelector = createSelector(
  state => state.packages.entities,
  state => state.ui.fetching,
  (entities, fetching) => {
    return {
      entities,
      fetching
    }
  }
)
