import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { Provider } from 'react-redux'

import './App.scss'
import store from './store'

import { Routes } from './components/routes'
import { Footer } from './components/footer'
import { Header } from './components/header'

const App = () =>
  (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <Routes />
            <Footer bgTemplate="template1" />
          </Fragment>
        </Router>
      </Provider>
    </div>)

export default App
