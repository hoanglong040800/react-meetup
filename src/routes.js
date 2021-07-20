import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

// PAGE
import AllMeetupPage from 'containers/AllMeetupPage'
import FavoritePage from 'containers/FavoritePage'
import TodoPage from 'containers/TodoPage'

// COMPONENT
import MainLayout from 'layout/main/MainLayout'

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/" component={AllMeetupPage} exact />
          <Route path="/favorite" component={FavoritePage} />
          <Route path="/todo" component={TodoPage} />
        </Switch>
      </MainLayout>
    </Router>
  )
}

export default App
