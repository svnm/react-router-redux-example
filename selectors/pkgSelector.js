import { createSelector } from 'reselect'

export const pkgSelector = createSelector(
  state => state.pkg,
  state => state.ui.fetching,
  (pkg, fetching) => {
    return {
      pkg,
      fetching
    }
  }
)
