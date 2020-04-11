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
      blog: [
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
        }
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
                <ul className='tags'>
                  <li className=''>
                    <a className='tags-a'>Food, Technology, Politics, Lifestyle</a>
                  </li>
                </ul>
                <div className='user-details'>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#000000', fontWeight: '500' }}>Mark wiens&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img className='icon' src={require('../../assets/icon/lnr-user.svg')} />
                    </span>
                  </p>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#000000', fontWeight: '500' }}>12 Dec, 2017&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img className='icon' src={require('../../assets/icon/lnr-calendar-full.svg')} />
                    </span>
                  </p>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#000000', fontWeight: '500' }}>1,2M Views&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img className='icon' src={require('../../assets/icon/lnr-eye.svg')} />
                    </span>
                  </p>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#000000', fontWeight: '500' }}>06 Comments&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img className='icon' src={require('../../assets/icon/lnr-bubble.svg')} />
                    </span>
                  </p>
                </div>
              </div>
              <div className='col-lg-9 col-ml-9'>
                <div className='feature-img mb-4'>
                  <img className='img-fluid' src={require('../../assets/img/feature-img1.jpg')} />
                  <a className='post-title mx-1'>
                    <h3 className='h3'>Astronomy Binoculars A Great Alternative</h3>
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

            <div className='single-post row'>
              <div className='meta-details col-lg-3 col-md-3'>
                <ul className='tags'>
                  <li className=''>
                    <a className='tags-a'>Food, Technology, Politics, Lifestyle</a>
                  </li>
                </ul>
                <div className='user-details'>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#000000', fontWeight: '500' }}>Mark wiens&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img className='icon' src={require('../../assets/icon/lnr-user.svg')} />
                    </span>
                  </p>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#000000', fontWeight: '500' }}>12 Dec, 2017&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img className='icon' src={require('../../assets/icon/lnr-calendar-full.svg')} />
                    </span>
                  </p>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#000000', fontWeight: '500' }}>1,2M Views&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img className='icon' src={require('../../assets/icon/lnr-eye.svg')} />
                    </span>
                  </p>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#000000', fontWeight: '500' }}>06 Comments&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img className='icon' src={require('../../assets/icon/lnr-bubble.svg')} />
                    </span>
                  </p>
                </div>
              </div>
              <div className='col-lg-9 col-ml-9'>
                <div className='feature-img mb-4'>
                  <img className='img-fluid' src={require('../../assets/img/feature-img2.jpg')} />
                  <a className='post-title mx-1'>
                    <h3 className='h3'>The Basics Of Buying A telescope</h3>
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

            <div className='single-post row'>
              <div className='meta-details col-lg-3 col-md-3'>
                <ul className='tags'>
                  <li className=''>
                    <a className='tags-a'>Food, Technology, Politics, Lifestyle</a>
                  </li>
                </ul>
                <div className='user-details'>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#000000', fontWeight: '500' }}>Mark wiens&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img className='icon' src={require('../../assets/icon/lnr-user.svg')} />
                    </span>
                  </p>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#000000', fontWeight: '500' }}>12 Dec, 2017&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img className='icon' src={require('../../assets/icon/lnr-calendar-full.svg')} />
                    </span>
                  </p>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#000000', fontWeight: '500' }}>1,2M Views&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img className='icon' src={require('../../assets/icon/lnr-eye.svg')} />
                    </span>
                  </p>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#000000', fontWeight: '500' }}>06 Comments&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img className='icon' src={require('../../assets/icon/lnr-bubble.svg')} />
                    </span>
                  </p>
                </div>
              </div>
              <div className='col-lg-9 col-ml-9'>
                <div className='feature-img mb-4'>
                  <img className='img-fluid' src={require('../../assets/img/feature-img3.jpg')} />
                  <a className='post-title mx-1'>
                    <h3 className='h3'>The Glossary Of Telescope</h3>
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

            <div className='single-post row'>
              <div className='meta-details col-lg-3 col-md-3'>
                <ul className='tags'>
                  <li className=''>
                    <a className='tags-a'>Food, Technology, Politics, Lifestyle</a>
                  </li>
                </ul>
                <div className='user-details'>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#000000', fontWeight: '500' }}>Mark wiens&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img className='icon' src={require('../../assets/icon/lnr-user.svg')} />
                    </span>
                  </p>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#000000', fontWeight: '500' }}>12 Dec, 2017&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img className='icon' src={require('../../assets/icon/lnr-calendar-full.svg')} />
                    </span>
                  </p>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#000000', fontWeight: '500' }}>1,2M Views&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img className='icon' src={require('../../assets/icon/lnr-eye.svg')} />
                    </span>
                  </p>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#000000', fontWeight: '500' }}>06 Comments&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img className='icon' src={require('../../assets/icon/lnr-bubble.svg')} />
                    </span>
                  </p>
                </div>
              </div>
              <div className='col-lg-9 col-ml-9'>
                <div className='feature-img mb-4'>
                  <img className='img-fluid' src={require('../../assets/img/feature-img4.jpg')} />
                  <a className='post-title mx-1'>
                    <h3 className='h3'>The Night Sky</h3>
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

            <div className='single-post row'>
              <div className='meta-details col-lg-3 col-md-3'>
                <ul className='tags'>
                  <li className=''>
                    <a className='tags-a'>Food, Technology, Politics, Lifestyle</a>
                  </li>
                </ul>
                <div className='user-details'>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#000000', fontWeight: '500' }}>Mark wiens&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img className='icon' src={require('../../assets/icon/lnr-user.svg')} />
                    </span>
                  </p>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#000000', fontWeight: '500' }}>12 Dec, 2017&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img className='icon' src={require('../../assets/icon/lnr-calendar-full.svg')} />
                    </span>
                  </p>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#000000', fontWeight: '500' }}>1,2M Views&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img className='icon' src={require('../../assets/icon/lnr-eye.svg')} />
                    </span>
                  </p>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#000000', fontWeight: '500' }}>06 Comments&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img className='icon' src={require('../../assets/icon/lnr-bubble.svg')} />
                    </span>
                  </p>
                </div>
              </div>
              <div className='col-lg-9 col-ml-9'>
                <div className='feature-img mb-4'>
                  <img className='img-fluid' src={require('../../assets/img/feature-img5.jpg')} />
                  <a className='post-title mx-1'>
                    <h3 className='h3'>Telescope 101</h3>
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
          </div>
          <div className='col-lg-4 sidebar-widget'>
            <div className='widget-wrap'>
              <div className='single-sidebar-widget search-widget'>
                <form className='search-form' action='#'>
                  <input
                    className=''
                    placeholder='Search Posts'
                    name='search'
                    type='text'
                    onFocus='this.placeholder = " "'
                    onBlur='this.placeholder = "Search Posts"'
                  />
                  <button type='Submit'>
                    <i className='fa fa-search' />
                  </button>
                </form>
                <div className='single-sidebar-widget user-info-widget'>
                  <img className='img' src={require('../../assets/img/IMG_20190218_141330.jpg')} />
                  <a>
                    <h4>Yosada Dede</h4>
                  </a>
                  <p style={{marginTop: 0, marginBottom: '1rem' }}>
                    Frontend Developer
                  </p>
                </div>
                <div className='single-sidebar-widget popular-post-widget' />
                <div className='single-sidebar-widget ads-widget' />
                <div className='single-sidebar-widget post-category-widget' />
                <div className='single-sidebar-widget newsletter-widget' />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Content
