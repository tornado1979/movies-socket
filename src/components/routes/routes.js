import React from 'react'
// import routing components
import {
  Route,
  Switch,
} from 'react-router-dom'

import Home from '../../modules/home/home'
import MovieDetails from '../../modules/movie/movieDetails'
import NotFound from '../../modules/notFound/notFound'

export const Routes = () => {
  return (
    <Switch>
      <Route
        component={Home}
        exact
        path="/"
      />
      <Route
        component={MovieDetails}
        path="/:movieId"
      />
      <Route component={NotFound} />
    </Switch>
  )
}
