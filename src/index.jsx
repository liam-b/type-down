import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'

import 'semantic-ui-css/semantic.min.css'

import App from './App.jsx'
const HotApp = hot(module)(App)

ReactDOM.render(<HotApp />, document.querySelector('#root'))