import { combineReducers } from 'redux'

import { moviesReducer as movies } from './modules/home/reducers/movies'

export const rootReducers = combineReducers({
  main: movies,
})
