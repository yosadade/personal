import React, { Component } from 'react'
import './App.css'
import Home from '../src/components/screens/home'
import Blog from '../src/components/screens/blog'

class App extends Component {
  render () {
    return (
      <div
        className=''
        style={{ backgroundColor: '#f9f9ff' }}
      >
        <Blog />
      </div>
    )
  }
}

export default App
