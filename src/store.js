import { createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducers } from './rootreducers'
import saga from './sagas'

const history = createHistory()
const routingMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()

// Initial state
/* const initialState = {
  data: [],
  errorMessage: null,
  isLoading: false,
}
*/

const enhancers = []
const middleware = [
  routingMiddleware,
  sagaMiddleware,
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension // eslint-disable-line prefer-destructuring

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
)

const store = createStore(
  rootReducers,
  composedEnhancers,
)

// start sagaMiddleware
sagaMiddleware.run(saga)

export default store
