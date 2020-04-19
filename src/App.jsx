import React, { Component } from 'react'
import './App.css'
import Home from '../src/components/screens/home'
import Blog from '../src/components/screens/blog'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <Home />
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
