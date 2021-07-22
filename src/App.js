import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import AllMeetupPage from 'containers/AllMeetupPage'
import FavoritePage from 'containers/FavoritePage'
import TodoPage from 'containers/TodoPage'
import MainLayout from 'layout/main/MainLayout'
import { FavContextProvider } from 'context/fav-context'

function App() {
  return (
    <FavContextProvider>
      <Router>
        <MainLayout>
          <Switch>
            <Route path="/" component={AllMeetupPage} exact />
            <Route path="/favorite" component={FavoritePage} />
            <Route path="/todo" component={TodoPage} />
          </Switch>
        </MainLayout>
      </Router>
    </FavContextProvider>
  )
}

export default App
