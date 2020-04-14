import React, { Component } from 'react'
import './App.css'
import Navbar from '../src/components/navbar'
import Category from '../src/components/category'
import Content from '../src/components/content'
import Footer from '../src/components/footer'
class App extends Component {
  render () {
    return (
      <div
        className=''
        style={{ backgroundColor: '#f9f9ff' }}
      >
        <Navbar />
        <Category />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App
