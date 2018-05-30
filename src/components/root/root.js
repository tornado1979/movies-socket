import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from '../../modules/home/home'
import MovieDetails from '../../modules/movie/movieDetails'
import { Footer } from '../../components/footer'
import store from '../../store'

const Root = () => (
  <Provider store={store}>
    <Router>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Route component={Home} exact path="/" />
        <Route component={MovieDetails} path="/:movieId" />
      </div>
    </Router>
    <Footer
      bgTemplate="template1" // background template
    />
  </Provider>
)

export default Root
