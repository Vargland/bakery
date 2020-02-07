import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Navigation } from '../Navigation/Navigation'

import MainPage from '../MainPage/MainPage'
import Materials from '../Materials/Materials'
import React from 'react'

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Navigation exact path='/' component={MainPage} />
        <Navigation exact path='/materials' component={Materials} /> 
      </Switch>
    </Router>
  )
}

export default AppRouter
