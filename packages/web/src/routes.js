import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Starships } from './pages'

const Routes = () => {
  return (
    <Router>
      <div className="wrapper">
        <header>
          <nav>
            <ul>
              <li>
                <a />
              </li>
            </ul>
          </nav>
        </header>
        <div className="content">
          <aside></aside>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/starship" component={Starships} />
            </Switch>
          </main>
          <aside></aside>
        </div>
        <footer>Footer</footer>
      </div>
    </Router>
  )
}

export default Routes
