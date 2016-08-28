export const initialState = {
  meta: {
    moviesMeta: [],
    reviewsMeta: []
  },
  entities: {
    movies: {},
    reviews: {}
  },
  ui: {
    fetching: {
      movies: true,
      reviews: true
    }
  }
}
