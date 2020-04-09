import React, { Component } from 'react'
import './App.css'
import Navbar from '../src/components/navbar'
import Category from '../src/components/category'

class App extends Component {
  render () {
    return (
      <div
        className=''
        style={{ backgroundColor: '#f9f9ff' }}
      >
        <Navbar />
        <Category />
      </div>
    )
  }
}

export default App
