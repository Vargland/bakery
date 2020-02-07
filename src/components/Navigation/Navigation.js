import { Route } from 'react-router-dom'

import React from 'react'
import ReactGA from 'react-ga'

function trackPage (path) {
  ReactGA.set({ page: path })
  ReactGA.pageview(path)
}

export const Navigation = ({ component: Component, ...rest }) => {
  trackPage(rest.path)

  return (
    <Route {...rest} render={(props) => (
        <Component {...props} />
    )} />
  )
}
