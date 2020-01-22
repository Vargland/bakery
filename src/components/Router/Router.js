import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Navigation } from '../Navigation/Navigation'
import React from 'react'
import MainPage from '../MainPage/MainPage'
import AddPage from '../AddPage/AddPage'

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Navigation exact path='/' component={MainPage} />
        <Navigation exact path='/addingredients' component={AddPage} /> 
      </Switch>
    </Router>
  )
}

export default AppRouter;
