import { createSelector } from 'reselect'

export const sidebarSelector = createSelector(
  state => state.ui.fetching,
  state => state.packages,
  state => state.pkg,
  (fetching, packages, pkg) => {
    return {
      fetching,
      packages,
      pkg
    }
  }
);
