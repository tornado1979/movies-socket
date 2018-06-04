/* import { createBrowserHistory } from 'history'
export const history = createBrowserHistory() */

import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

history.listen((location, action) => {
  console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
  console.log(`The last navigation action was ${action}`)
})
