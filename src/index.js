import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import * as serviceWorker from './serviceWorker'
import App from './App'
import configureStore from './redux/store'
import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss';

ReactDOM.render(
  <Provider store={ configureStore() }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
