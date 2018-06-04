import { createSelector } from 'reselect'
import _ from 'lodash'

const getLocalState = state => state
const getRoute = state => state.routing

export const isLoading = createSelector(
  getLocalState,
  state => state.movies.isLoading,
)

export const getData = createSelector(
  getLocalState,
  state => state.movies.data || [],
)

export const getMovieIdFromRoute = createSelector(
  getRoute,
  routing => routing.location.pathname.split('/')[1],
)

export const getMovie = createSelector(
  [getData, getMovieIdFromRoute],
  (data, searchingId) => _.filter(data, ({ id }) => id === searchingId)[0],
)
