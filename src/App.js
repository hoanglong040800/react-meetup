import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import 'assets/css/index.css'
import { FavContextProvider } from 'context/fav-context'
import MainLayout from 'layout/main/MainLayout'
import AllMeetupPage from 'containers/AllMeetupPage'
import TodoPage from 'containers/TodoPage'
import AboutPage from 'containers/AboutPage'

function App() {
  return (
    <FavContextProvider>
      <Router>
        <MainLayout>
          <Switch>
            <Route path="/" component={AllMeetupPage} exact />
            <Route path="/todo" component={TodoPage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </MainLayout>
      </Router>
    </FavContextProvider>
  )
}

export default App
