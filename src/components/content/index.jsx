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
            <div className='single-post row mb-1'>
              <div className='meta-details col-lg-3 col-md-3 py-4'>
                <ul
                  className='tags mb-4'
                  style={{
                    color: '#222222',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    listStyleImage: 'none',
                    listStylePosition: 'outside',
                    listStyleType: 'none',
                    marginLeft: '0px',
                    marginRight: '0px',
                    marginTop: '0px',
                    paddingBottom: '0px',
                    paddingLeft: '0px',
                    paddingRight: '0px',
                    paddingTop: '0px',
                    textAlign: 'right'
                  }}
                >
                  <li className=''>
                    <a>Food, Technology, Politics, Lifestyle</a>
                  </li>
                </ul>
                <div
                  className='user-details'
                  style={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexWrap: 'wrap',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    lineHeight: '22.75px',
                    marginLeft: '-15px',
                    marginRight: '-15px',
                    textAlign: 'right'
                  }}
                >
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#222222', fontWeight: 'bold' }}>Mark wiens&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img
                        src={require('../../assets/icon/lnr-user.svg')}
                        style={{
                          color: '#222222',
                          width: '14px',
                          fontWeight: 'bold'
                        }}
                      />
                    </span>
                  </p>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#222222', fontWeight: 'bold' }}>12 Dec, 2017&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img
                        src={require('../../assets/icon/lnr-calendar-full.svg')}
                        style={{
                          color: '#222222',
                          width: '14px',
                          fontWeight: 'bold'
                        }}
                      />
                    </span>
                  </p>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#222222', fontWeight: 'bold' }}>1,2M Views&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img
                        src={require('../../assets/icon/lnr-eye.svg')}
                        style={{
                          color: '#222222',
                          width: '14px',
                          fontWeight: 'bold'
                        }}
                      />
                    </span>
                  </p>
                  <p className='user-name col-lg-12 col-md-12 col-6'>
                    <a className='' style={{ color: '#222222', fontWeight: 'bold' }}>06 Comments&nbsp;&nbsp;</a>
                    <span className='span-icon'>
                      <img
                        src={require('../../assets/icon/lnr-bubble.svg')}
                        style={{
                          color: '#222222',
                          width: '14px',
                          fontWeight: 'bold'
                        }}
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className='col-lg-9 col-ml-9'>
                <div className='feature-img mb-4'>
                  <img className='img-fluid' src={require('../../assets/img/feature-img1.jpg')} />
                  <a className='post-title mx-1'>
                    <h3
                      style={{ fontSize: '24px', color: '#222222', fontWeight: 'bold' }}
                    >Astronomy Binoculars A Great Alternative
                    </h3>
                  </a>
                  <p
                    style={{
                      color: '#222222',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      lineHeight: '22.75px'
                    }}
                  >
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                  </p>
                  <a
                    className='btn-info btn'
                    href='#'
                    style={{
                      fontWeight: 'bold',
                      fontSize: '14px',
                      textAlign: 'center'
                    }}
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>

            <nav
              className='blog-pagination'
              style={{
                fontFamily: 'Poppins, sans-serif',
                display: 'flex',
                justifyContent: 'center',
                color: '#222222',
                fontWeight: 'bold',
                fontSize: '13px'
              }}
            >
              <ul className='pagination'>
                <li
                  className='page-item'
                  style={{
                    backgroundAttachment: 'scroll',
                    color: '#222222',
                    cursor: 'pointer',
                    display: 'block',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: '800',
                    lineHeight: '17.5px',
                    marginLeft: '-1px',
                    outlineWidth: '0px',
                    paddingBottom: '8px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    paddingTop: '8px',
                    position: 'relative',
                    textAlign: 'left'
                  }}
                >
                  <img src={require('../../assets/icon/lnr-chevron-left.svg')} style={{ width: '13px' }} />
                </li>
                <li
                  className='page-item'
                  style={{
                    backgroundAttachment: 'scroll',
                    color: '#222222',
                    cursor: 'pointer',
                    display: 'block',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: '800',
                    lineHeight: '17.5px',
                    marginLeft: '-1px',
                    outlineWidth: '0px',
                    paddingBottom: '8px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    paddingTop: '8px',
                    position: 'relative',
                    textAlign: 'left'
                  }}
                >
                  <a>01</a>
                </li>
                <li
                  className='page-item'
                  style={{
                    backgroundAttachment: 'scroll',
                    color: '#222222',
                    cursor: 'pointer',
                    display: 'block',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: '800',
                    lineHeight: '17.5px',
                    marginLeft: '-1px',
                    outlineWidth: '0px',
                    paddingBottom: '8px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    paddingTop: '8px',
                    position: 'relative',
                    textAlign: 'left'
                  }}
                >
                  <a>02</a>
                </li>
                <li
                  className='page-item'
                  style={{
                    backgroundAttachment: 'scroll',
                    color: '#222222',
                    cursor: 'pointer',
                    display: 'block',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: '800',
                    lineHeight: '17.5px',
                    marginLeft: '-1px',
                    outlineWidth: '0px',
                    paddingBottom: '8px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    paddingTop: '8px',
                    position: 'relative',
                    textAlign: 'left'
                  }}
                >
                  <a>03</a>
                </li>
                <li
                  className='page-item'
                  style={{
                    backgroundAttachment: 'scroll',
                    color: '#222222',
                    cursor: 'pointer',
                    display: 'block',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: '800',
                    lineHeight: '17.5px',
                    marginLeft: '-1px',
                    outlineWidth: '0px',
                    paddingBottom: '8px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    paddingTop: '8px',
                    position: 'relative',
                    textAlign: 'left'
                  }}
                >
                  <a>04</a>
                </li>
                <li
                  className='page-item'
                  style={{
                    backgroundAttachment: 'scroll',
                    color: '#222222',
                    cursor: 'pointer',
                    display: 'block',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: '800',
                    lineHeight: '17.5px',
                    marginLeft: '-1px',
                    outlineWidth: '0px',
                    paddingBottom: '8px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    paddingTop: '8px',
                    position: 'relative',
                    textAlign: 'left'
                  }}
                >
                  <a>05</a>
                </li>
                <li
                  className='page-item'
                  style={{
                    backgroundAttachment: 'scroll',
                    color: '#222222',
                    cursor: 'pointer',
                    display: 'block',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: '800',
                    lineHeight: '17.5px',
                    marginLeft: '-1px',
                    outlineWidth: '0px',
                    paddingBottom: '8px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    paddingTop: '8px',
                    position: 'relative',
                    textAlign: 'left'
                  }}
                >
                  <img src={require('../../assets/icon/lnr-chevron-right.svg')} style={{ width: '13px' }} />
                </li>
              </ul>
            </nav>
          </div>
          <div className='col-lg-4 sidebar-widget'>
            <div
              className='widget-wrap'
            >
              <div
                style={{
                  margin: '30px 30px',
                  paddingTop: '30px',
                  borderBottom: '1px solid #eee'
                }}
                className='single-sidebar-widget search-widget'
              >
                <form
                  className='search-form px-1 mx-2'
                  action='#'
                  style={{
                    content: '',
                    clear: 'both',
                    display: 'table'
                  }}
                >
                  <input
                    className=''
                    placeholder='Search Posts'
                    name='search'
                    type='text'
                    onFocus='this.placeholder = " "'
                    onBlur='this.placeholder = "Search Posts"'
                  />
                  <button
                    type='Submit'
                    style={{
                      float: 'left',
                      width: '20%',
                      padding: '10px',
                      background: '#17a2b8',
                      color: '#fff',
                      fontSize: '14px',
                      border: 'none',
                      cursor: 'pointer',
                      borderBottomRightRadius: '20px',
                      borderTopRightRadius: '20px'
                    }}
                  >
                    <i className='fa fa-search' />
                  </button>
                </form>
                <div className='single-sidebar-widget user-info-widget'>
                  <img
                    className='img mb-4 mt-3'
                    src={require('../../assets/img/user-info.png')}
                    style={{
                      verticalAlign: 'middle',
                      borderStyle: 'none',
                      width: '120px',
                      borderRadius: '120px'
                    }}
                  />
                  <a>
                    <h4
                      style={{
                        boxSizing: 'border-box',
                        color: '#222222',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        lineHeight: '21.6px',
                        marginBottom: '5px',
                        textAlign: 'center'
                      }}
                    >Yosada Dede
                    </h4>
                  </a>
                  <p
                    style={{
                      boxSizing: 'border-box',
                      color: '#222222',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '14px',
                      fontWeight: '800',
                      lineHeight: '22.75px',
                      marginBottom: '16px',
                      marginTop: '0px',
                      textAlign: 'center'
                    }}
                  >
                    Frontend Developer
                  </p>
                  <ul
                    className='social-links justify-content-start row mx-3'
                    style={{ listStyleType: 'none' }}
                  >
                    <li className='li-social-links mr-4'>
                      <a>
                        <img style={{ width: '11px' }} src={require('../../assets/icon/facebook-brands.svg')} />
                      </a>
                    </li>
                    &nbsp;
                    <li className='li-social-links mr-4'>
                      <a>
                        <img style={{ width: '11px' }} src={require('../../assets/icon/instagram-brands.svg')} />
                      </a>
                    </li>
                    &nbsp;
                    <li className='li-social-links mr-4'>
                      <a>
                        <img style={{ width: '11px' }} src={require('../../assets/icon/github-brands.svg')} />
                      </a>
                    </li>
                    &nbsp;
                    <li className='li-social-links mr-4'>
                      <a>
                        <img style={{ width: '11px' }} src={require('../../assets/icon/linkedin-in-brands.svg')} />
                      </a>
                    </li>
                  </ul>
                  <p>Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.</p>
                </div>
                <div className='single-sidebar-widget popular-post-widget'>
                  <a className='btn-info btn-popular-post text-center btn-block text-light'>Popular Posts</a>
                  <div className='popular-post-list mt-4'>
                    <div className='single-post-list d-flex flex-row'>
                      <div className='thumb'>
                        <img className='img-fluid-popular-post' src={require('../../assets/img/pp1.jpg')} />
                      </div>
                      <div className='details'>
                        <a>
                          <h6 style={{ fontWeight: 'bold', color: 'black' }}>Space The Final Frontier</h6>
                        </a>
                        <p>02 Hours ago</p>
                      </div>
                    </div>
                    <div className='single-post-list d-flex flex-row'>
                      <div className='thumb'>
                        <img className='img-fluid-popular-post' src={require('../../assets/img/pp2.jpg')} />
                      </div>
                      <div className='details'>
                        <a>
                          <h6 style={{ fontWeight: 'bold', color: 'black' }}>Space The Final Frontier</h6>
                        </a>
                        <p>02 Hours ago</p>
                      </div>
                    </div>
                    <div className='single-post-list d-flex flex-row'>
                      <div className='thumb'>
                        <img className='img-fluid-popular-post' src={require('../../assets/img/pp3.jpg')} />
                      </div>
                      <div className='details'>
                        <a>
                          <h6 style={{ fontWeight: 'bold', color: 'black' }}>Space The Final Frontier</h6>
                        </a>
                        <p>02 Hours ago</p>
                      </div>
                    </div>
                    <div className='single-post-list d-flex flex-row'>
                      <div className='thumb'>
                        <img className='img-fluid-popular-post' src={require('../../assets/img/pp4.jpg')} />
                      </div>
                      <div className='details'>
                        <a>
                          <h6 style={{ fontWeight: 'bold', color: 'black' }}>Space The Final Frontier</h6>
                        </a>
                        <p>02 Hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-sidebar-widget ads-widget'>
                  <a href='#'>
                    <img className='img-fluid' src={require('../../assets/img/ads-banner.jpg')} alt='' />
                  </a>
                </div>
                <div className='single-sidebar-widget post-category-widget'>
                  <a className='btn-info btn-popular-post text-center btn-block text-light'>Post Categories</a>
                  <ul className='cat-list'>
                    <li>
                      <a className='d-flex justify-content-between'>
                        <p>Technology</p>
                        <p>37</p>
                      </a>
                    </li>
                    <li>
                      <a className='d-flex justify-content-between'>
                        <p>Lifestyle</p>
                        <p>24</p>
                      </a>
                    </li>
                    <li>
                      <a className='d-flex justify-content-between'>
                        <p>Fashion</p>
                        <p>58</p>
                      </a>
                    </li>
                    <li>
                      <a className='d-flex justify-content-between'>
                        <p>Art</p>
                        <p>29</p>
                      </a>
                    </li>
                    <li>
                      <a className='d-flex justify-content-between'>
                        <p>Food</p>
                        <p>29</p>
                      </a>
                    </li>
                    <li>
                      <a className='d-flex justify-content-between'>
                        <p>Architecture</p>
                        <p>09</p>
                      </a>
                    </li>
                    <li>
                      <a className='d-flex justify-content-between'>
                        <p>Adventure</p>
                        <p>44</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='single-sidebar-widget newsletter-widget'>
                  <a className='btn-info btn-popular-post text-center btn-block text-light'>News Letter</a>
                  <p>Here, I focus on a range of items and features that we use in life without giving them a second thought. </p>
                  <div className='form-group d-flex flex-row'>
                    <input className='form-control' style={{ width: '70%', borderRadius: '0px', fontSize: '14px' }} placeholder='Enter Email' type='text' />
                    <button className='px-4' style={{ width: '30%', border: 'none', backgroundColor: '#17a2b8' }}>
                      <i className='fa fa-envelope' style={{ color: '#fff' }} />
                    </button>
                  </div>
                  <p className='text-center mt-3'>You Can unsubscribe at any time</p>
                </div>
                <div className='single-sidebar-widget tag-cloud-widget'>
                  <a className='btn-info btn-popular-post text-center btn-block text-light'>Tag Cloud</a>
                  <ul className='row li-tags my-3 ml-1'>
                    <li>
                      <a>Technology</a>
                    </li>
                    &nbsp;
                    <li>
                      <a>Fashion</a>
                    </li>
                    &nbsp;
                    <li>
                      <a>Architecture</a>
                    </li>
                    &nbsp;
                    <li>
                      <a>Fashion</a>
                    </li>
                    &nbsp;
                    <li>
                      <a>Food</a>
                    </li>
                    &nbsp;
                    <li>
                      <a>Technology</a>
                    </li>
                    &nbsp;
                    <li>
                      <a>Lifestyle</a>
                    </li>
                    &nbsp;
                    <li>
                      <a>Art</a>
                    </li>
                    &nbsp;
                    <li>
                      <a>Adventure</a>
                    </li>
                    &nbsp;
                    <li>
                      <a>Food</a>
                    </li>
                    &nbsp;
                    <li>
                      <a>Lifestyle</a>
                    </li>
                    &nbsp;
                    <li>
                      <a>Adventure</a>
                    </li>
                    &nbsp;
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Content
