import { BrowserRouter as Router, Switch } from 'react-router-dom'
import React from 'react'
import MainPage from '../MainPage/MainPage'

function AppRouter() {
  return (
    <Router>
      <Switch>
        <MainPage path='/mainpage'> </MainPage>
      </Switch>
    </Router>
  )
}

export default AppRouter