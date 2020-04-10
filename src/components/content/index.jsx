import React, { Component } from 'react'
import '../content/index.css'

import User from '../../assets/icon/lnr-user.svg'
import Calendar from '../../assets/icon/lnr-calendar-full.svg'
import Eye from '../../assets/icon/lnr-eye.svg'
import Bubble from '../../assets/icon/lnr-bubble.svg'

import Img1 from '../../assets/img/feature-img1.jpg'
import Img2 from '../../assets/img/feature-img2.jpg'
import Img3 from '../../assets/img/feature-img3.jpg'
import Img4 from '../../assets/img/feature-img4.jpg'
import Img5 from '../../assets/img/feature-img5.jpg'

class Content extends Component {
  constructor () {
    super()
    this.state = {
      tags: [
        {
          a: 'Food,',
          href: '#'
        },
        {
          a: ' Technology,',
          href: '#'
        },
        {
          a: ' Politics,',
          href: '#'
        },
        {
          a: ' Lifestyle',
          href: '#'
        }
      ],
      userDetails: [
        {
          a: 'Mark wiens',
          href: '#',
          icon: User
        },
        {
          a: '12 Dec, 2017',
          href: '#',
          icon: Calendar
        },
        {
          a: '1.2M Views',
          href: '#',
          icon: Eye
        },
        {
          a: '06 Comments',
          href: '#',
          icon: Bubble
        }
      ],
      blog : [
        {
          img: Img1,
          h3: 'Astronomy Binoculars A Great Alternative',
          p: 'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.'
        },
        {
          img: Img2,
          h3: 'The Basics Of Buying A Telescope',
          p: 'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.'
        },
        {
          img: Img3,
          h3: 'The Glossary Of Telescopes',
          p: 'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.'
        },
        {
          img: Img4,
          h3: 'The Night Sky',
          p: 'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.'
        },
        {
          img: Img5,
          h3: 'Telescopes 101',
          p: 'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.'
        },
      ]
    }
  }

  render () {
    return (
      <div
        className='container'
      >
        <div
          className='row'
        >
          <div className='col-lg-8 post-list'>
            <div className='single-post row'>
              <div className='meta-details col-lg-3 col-md-3'>
                <ul className='tags row'>
                  {this.state.tags.map((item, key) => {
                    return (
                      <li className='' key={key}>
                        <a style={{ fontWeight: 'bold', textAlign: 'right' }}>{item.a}&nbsp;</a>
                      </li>
                    )
                  })}
                </ul>
                <div className='user-details'>
                  {this.state.userDetails.map((item, index) => {
                    return (
                      <p className='user-name col-lg-12 col-md-12 col-6' key={index}>
                        <a className=''>{item.a}&nbsp;&nbsp;</a>
                        <span className='icon'>
                          <img className='icon' src={item.icon} />
                        </span>
                      </p>
                    )
                  })}
                </div>
              </div>
              <div className='col-lg-9 col-ml-9'>
                <div className='feature-img'>
                  <img className='img-fluid' src={require('../../assets/img/feature-img1.jpg')} />
                </div>
                <a className='post-title mx-1'>
                  <h3 className='h3'>Astronomy Binoculars A Great Alternative</h3>
                </a>
                <p className='excert'>
                  MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                </p>
                <a className='primary-btn btn' href='#'>
                  View More
                </a>
              </div>
            </div>
            <div className='single-post row'>
              <div className='meta-details col-lg-3 col-md-3'>
                <ul className='tags row'>
                  {this.state.tags.map((item, key) => {
                    return (
                      <li className='' key={key}>
                        <a>{item.a}&nbsp;</a>
                      </li>
                    )
                  })}
                </ul>
                <div className='user-details row'>
                  {this.state.userDetails.map((item, index) => {
                    return (
                      <p className='user-name col-lg-12 col-md-12 col-6' key={index}>
                        <a className='titleTags'>{item.a}&nbsp;&nbsp;</a>
                        <span className='icon'>
                          <img className='icon' src={item.icon} />
                        </span>
                      </p>
                    )
                  })}
                </div>
              </div>
              <div className='col-lg-9 col-ml-9'>
                <div className='feature-img'>
                  <img className='img-fluid' src={require('../../assets/img/feature-img2.jpg')} />
                </div>
                <a className='post-title'>
                  <h4 className='h2'>Astronomy Binoculars A Great Alternative</h4>
                </a>
                <p className='excert'>
                  MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                </p>
                <a className='btn-primary btn' href='#'>
                  View More
                </a>
              </div>
            </div>
            <div className='single-post row'>
              <div className='meta-details col-lg-3 col-md-3'>
                <ul className='tags row'>
                  {this.state.tags.map((item, key) => {
                    return (
                      <li className='' key={key}>
                        <a>{item.a}&nbsp;</a>
                      </li>
                    )
                  })}
                </ul>
                <div className='user-details row'>
                  {this.state.userDetails.map((item, index) => {
                    return (
                      <p className='user-name col-lg-12 col-md-12 col-6' key={index}>
                        <a className=''>{item.a}&nbsp;&nbsp;</a>
                        <span className='icon'>
                          <img className='icon' src={item.icon} />
                        </span>
                      </p>
                    )
                  })}
                </div>
              </div>
              <div className='col-lg-9 col-ml-9'>
                <div className='feature-img'>
                  <img className='img-fluid' src={require('../../assets/img/feature-img3.jpg')} />
                </div>
                <a className='post-title'>
                  <h4 className='h2'>Astronomy Binoculars A Great Alternative</h4>
                </a>
                <p className='excert'>
                  MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                </p>
                <a className='btn-primary btn' href='#'>
                  View More
                </a>
              </div>
            </div>
            <div className='single-post row'>
              <div className='meta-details col-lg-3 col-md-3'>
                <ul className='tags row'>
                  {this.state.tags.map((item, key) => {
                    return (
                      <li className='' key={key}>
                        <a>{item.a}&nbsp;</a>
                      </li>
                    )
                  })}
                </ul>
                <div className='user-details row'>
                  {this.state.userDetails.map((item, index) => {
                    return (
                      <p className='user-name col-lg-12 col-md-12 col-6' key={index}>
                        <a className=''>{item.a}&nbsp;&nbsp;</a>
                        <span className='icon'>
                          <img className='icon' src={item.icon} />
                        </span>
                      </p>
                    )
                  })}
                </div>
              </div>
              <div className='col-lg-9 col-ml-9'>
                <div className='feature-img'>
                  <img className='img-fluid' src={require('../../assets/img/feature-img4.jpg')} />
                </div>
                <a className='post-title'>
                  <h4 className='h2'>Telescope 101</h4>
                </a>
                <p className='excert'>
                  MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                </p>
                <a className='btn-primary btn' href='#'>
                  View More
                </a>
              </div>
            </div>
            <div className='single-post row'>
              <div className='meta-details col-lg-3 col-md-3'>
                <ul className='tags row'>
                  {this.state.tags.map((item, key) => {
                    return (
                      <li className='' key={key}>
                        <a>{item.a}&nbsp;</a>
                      </li>
                    )
                  })}
                </ul>
                <div className='user-details row'>
                  {this.state.userDetails.map((item, index) => {
                    return (
                      <p className='user-name col-lg-12 col-md-12 col-6' key={index}>
                        <a className=''>{item.a}&nbsp;&nbsp;</a>
                        <span className='icon'>
                          <img className='icon' src={item.icon} />
                        </span>
                      </p>
                    )
                  })}
                </div>
              </div>
              <div className='col-lg-9 col-ml-9'>
                <div className='feature-img'>
                  <img className='img-fluid' src={require('../../assets/img/feature-img5.jpg')} />
                </div>
                <a className='post-title'>
                  <h4 className='h2'>Astronomy Binoculars A Great Alternative</h4>
                </a>
                <p className='excert'>
                  MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                </p>
                <a className='btn-primary btn' href='#'>
                  View More
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-4 sidebar-widget' />
        </div>
      </div>
    )
  }
}

export default Content
