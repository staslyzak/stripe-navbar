import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import AppContainer from '@containers/AppContainer'
import * as serviceWorker from './serviceWorker'
import '@scss/global.scss'

render(
  <Router>
    <AppContainer />
  </Router>,
  document.getElementById('root'),
)

serviceWorker.unregister()
