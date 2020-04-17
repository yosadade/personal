import React, { Component } from 'react'
import Navbar from '../home/navbar'
import Category from '../home/category'
import Content from '../home/content'
import Footer from '../home/footer'

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
