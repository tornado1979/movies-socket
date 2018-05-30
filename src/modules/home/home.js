import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import moment from 'moment'
// import { Link } from 'react-router-dom'

import {
  getData,
  isLoading,
} from './selectors'

import {
  searchMoviesRequest,
} from './actionCreators'

import { Percent } from '../../components/percent'

import './main.scss'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
    }
    this.fetchMovies = this.fetchMovies.bind(this)
  }

  getMovies() {
    if (this.state.movies.length > 0) {
      return <div>movies loaded</div>
    }
    return false
  }

  fetchMovies() {
    console.log('search movies...') // eslint-disable-line
    this.props.searchMovies()
  }

  createMovies(movies) { // eslint-disable-line class-methods-use-this
    let moviesDOM
    if (movies && movies.length > 0) {
      moviesDOM = movies.map((movie) => {
        let movieReleaseDate = moment(movie.release_date) // eslint-disable-line prefer-const
        return (
          <div className="panel" key={movie.id}>
            <div className="panel-img">
              <img alt="movie" src={movie.full_poster_path} />
            </div>
            <div className="panel-body">
              <div className="wrap-panel-top">
                <Percent
                  vote_average={movie.vote_average * 10}
                />
                <div>
                  <p className="panel-title">{movie.title}</p>
                  <p className="panel-date">{movieReleaseDate.format('MMMM DD, YYYY')} </p>
                </div>
              </div>
              <p className="panel-text">{movie.overview}</p>
              <p className="view-more">
                  more info
              </p>
            </div>
          </div>)
      })
    }

    return moviesDOM
  }

  render() {
    const {
      loading,
      movies,
    } = this.props

    const moviesData = this.createMovies(movies)
    return (
      <main>
        {!loading && <button onClick={this.fetchMovies}>search</button>}
        <div className="wrapper">
          {moviesData}
        </div>
      </main>
    )
  }
}

Home.propTypes = {
  loading: propTypes.bool.isRequired,
  movies: propTypes.shape().isRequired,
  searchMovies: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
  loading: isLoading(state),
  movies: getData(state),
})

const mapDispatchToProps = dispatch => ({
  searchMovies: () => dispatch(searchMoviesRequest('Terminator 1')),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
