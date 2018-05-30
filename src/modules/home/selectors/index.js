import { createSelector } from 'reselect'
import _ from 'lodash'

const getState = state => state.main
const getRoute = state => state.routing

export const isLoading = createSelector(
  getState,
  state => state.isLoading,
)

export const getData = createSelector(
  getState,
  state => state.data || [],
)

export const getMovieIdFromRoute = createSelector(
  getRoute,
  routing => routing.location.pathname.split('/')[1],
)

export const getMovie = createSelector(
  [getData, getMovieIdFromRoute],
  (data, searchingId) => _.filter(data, ({ id }) => id === searchingId)[0],
)
