import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import 'assets/css/index.css'
import { FavContextProvider } from 'context/fav-context'

ReactDOM.render(
  <FavContextProvider>
    <App />
  </FavContextProvider>,
  document.getElementById('root')
)
