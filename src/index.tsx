import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'react-loading-skeleton/dist/skeleton.css'
import './index.css'
import App from './app'

axios.defaults.baseURL = 'https://api.tvmaze.com'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path = '/*'
          element = {
            <App />
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
