import React, { Component } from 'react'
import './App.css'
import Navbar from '../src/components/navbar'

class App extends Component {
  render () {
    return (
      <div
        className='App'
        style={{ backgroundColor: '#f9f9ff' }}
      >
        <Navbar />
      </div>
    )
  }
}

export default App
