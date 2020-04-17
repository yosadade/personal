import React, { Component } from 'react'
import Header from '../home/navbar'
import Details from './details'
import Content from '../blog/content'
import Footer from '../home/footer'

class Blog extends Component {
  render () {
    return (
      <div>
        <Header />
        <Details />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default Blog
