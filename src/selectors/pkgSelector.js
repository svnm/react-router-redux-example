import { createSelector } from 'reselect'

export const pkgSelector = createSelector(
  state => state.pkg.entity,
  state => state.ui.fetching,
  (entity, fetching) => {
    return {
      entity,
      fetching
    }
  }
)
