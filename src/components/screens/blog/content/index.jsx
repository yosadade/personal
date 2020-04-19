import React, { Component } from 'react'
import {
  ActionTags,
  ActionUserDetails,
  ActionSosmed,
  ActionBlog,
  ActionButton
} from '../../../action'

import User from '../../../../assets/icon/lnr-user.svg'
import Calendar from '../../../../assets/icon/lnr-calendar-full.svg'
import Eye from '../../../../assets/icon/lnr-eye.svg'
import Bubble from '../../../../assets/icon/lnr-bubble.svg'

import Img1 from '../../../../assets/img/feature-img1.jpg'
class Content extends Component {
  constructor () {
    super()
    this.state = {
      userDetails: [
        {
          name: 'Mark wiens',
          href: '#',
          icon: User
        },
        {
          name: '12 Dec, 2017',
          href: '#',
          icon: Calendar
        },
        {
          name: '1.2M Views',
          href: '#',
          icon: Eye
        },
        {
          name: '06 Comments',
          href: '#',
          icon: Bubble
        }
      ],
      blog: [
        {
          img: null,
          h3: 'Astronomy Binoculars A Great Alternative',
          p: <div><p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price.</p><p>However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed. </p> <p>Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed.</p></div>
        }
      ],
      button: [
        {
          title: 'REPLY'
        }
      ]
    }
  }

  render () {
    return (
      <div
        className='container py-5'
        style={{ backgroundColor: '#f9f9ff' }}
      >

        <div className='row'>
          <div className='col-lg-8 post-list'>
            <div className='single-post row'>
              <div className='col-lg-12'>
                <img
                  src={require('../../../../assets/feature-img1.jpg')}
                  style={{
                    width: '100%',
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </div>
              <div className='col-lg-3 col-md-3 mt-4 meta-details'>
                <ActionTags />
                {this.state.userDetails.map((item, key) => {
                  return (
                    <ActionUserDetails
                      key={key}
                      name={item.name}
                      icon={item.icon}
                    />
                  )
                })}
                <ActionSosmed
                  wrapstyle={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '42px'
                  }}
                  iconstyle={{
                    color: '#222222',
                    fontSize: '14px'
                  }}
                />
              </div>
              <div className='col-lg-9 col-md-9'>
                {this.state.blog.map((item, index) => {
                  return (
                    <ActionBlog
                      key={index}
                      img={item.img}
                      h3={item.h3}
                      p={item.p}
                    />
                  )
                })}
              </div>
              <div className='col-lg-12'>
                <div
                  className='quotes mt-2 px-3 py-3 shadow'
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}
                >
                  MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.
                </div>
                <div className='row my-3'>
                  <div className='col-6'>
                    <img
                      className='img-fluid'
                      style={{
                        maxWidth: '100%',
                        height: 'auto'
                      }}
                      src={require('../../../../assets/img/post-img1.jpg')}
                    />
                  </div>
                  <div className='col-6'>
                    <img
                      className='img-fluid'
                      style={{
                        maxWidth: '100%',
                        height: 'auto'
                      }}
                      src={require('../../../../assets/img/post-img2.jpg')}
                    />
                  </div>
                  <div
                    className='col-lg-12 mt-3'
                    style={{
                      fontSize: '14px',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 'bold'
                    }}
                  >
                    <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.</p>
                    <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='navigation-area pt-3'
              style={{
                borderTop: '1px solid #eee'
              }}
            >
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center'>
                  <div className='thumb mr-2' style={{ backgroundColor: '#000' }}>
                    <a href='#'>
                      <img className='image-fluid' src={require('../../../../assets/img/c5.jpg')} />
                    </a>
                  </div>
                  <div className='arrow' style={{ position: 'absolute' }}>
                    <a href='#' className='ml-4'>
                      <span className='lnr text-white lnr-arrow-left' />
                    </a>
                  </div>
                  <div className='details' style={{ fontSize: '14px', fontWeight: 'bold' }}>
                    <p style={{ fontFamily: 'Poppins, sans-serif', paddingTop: '15px' }}>Prev Post</p>
                    <a href='#'>
                      <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#222222' }}>Space The Final Frontier</p>
                    </a>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-l2 nav-right flex-row d-flex justify-content-end align-items-center'>
                  <div className='arrow' style={{ position: 'absolute' }}>
                    <a href='#' className='mr-4'>
                      <span className='lnr text-white lnr-arrow-right' />
                    </a>
                  </div>
                  <div className='details' style={{ fontSize: '14px', fontWeight: 'bold' }}>
                    <p style={{ fontFamily: 'Poppins, sans-serif', paddingTop: '15px', textAlign: 'right' }}>Next Post</p>
                    <a href='#'>
                      <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#222222' }}>Telescopes 101</p>
                    </a>
                  </div>
                  <div className='thumb ml-2' style={{ backgroundColor: '#000' }}>
                    <a href='#'>
                      <img className='image-fluid' src={require('../../../../assets/img/c2.jpg')} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='comments-area'
              style={{
                border: '1px solid #eee',
                padding: '50px 20px'
              }}
            >
              <h4
                style={{
                  textAlign: 'center',
                  marginBottom: '50px',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}
              >05 Comments
              </h4>
              <div
                className='comment-list pb-3'
              >
                <div className='single-comment justify-content-between d-flex'>
                  <div className='user justify-content-between d-flex'>
                    <div className='thumb mr-2'>
                      <img src={require('../../../../assets/img/c2.jpg')} />
                    </div>
                    <div className='desc'>
                      <a
                        href='#'
                        style={{
                          fontWeight: 'bold',
                          fontSize: '15px',
                          color: '#222222'
                        }}
                      >Emilly Blunt
                      </a>
                      <p
                        className='date'
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '12px',
                          fontWeight: '300'
                        }}
                      >
                        December 4, 2019 at 3:12 pm
                      </p>
                      <p
                        className='comment'
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '14px',
                          fontWeight: 'bold'
                        }}
                      >
                        Never say goodbye till the end comes !
                      </p>
                    </div>
                  </div>
                  <div>
                    <ActionButton
                      title='REPLY'
                      style={{
                        fontWeight: 'bold',
                        fontSize: '12px',
                        textAlign: 'center'
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className='comment-list left-padding pb-3 pl-4'
              >
                <div className='single-comment justify-content-between d-flex'>
                  <div className='user justify-content-between d-flex'>
                    <div className='thumb mr-2'>
                      <img src={require('../../../../assets/img/c2.jpg')} />
                    </div>
                    <div className='desc'>
                      <a
                        href='#'
                        style={{
                          fontWeight: 'bold',
                          fontSize: '15px',
                          color: '#222222'
                        }}
                      >Elsie Cunningham
                      </a>
                      <p
                        className='date'
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '12px',
                          fontWeight: '300'
                        }}
                      >
                        December 4, 2019 at 3:12 pm
                      </p>
                      <p
                        className='comment'
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '14px',
                          fontWeight: 'bold'
                        }}
                      >
                        Never say goodbye till the end comes !
                      </p>
                    </div>
                  </div>
                  <div>
                    <ActionButton
                      title='REPLY'
                      style={{
                        fontWeight: 'bold',
                        fontSize: '12px',
                        textAlign: 'center'
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className='comment-list pb-3 pl-4'
              >
                <div className='single-comment justify-content-between d-flex'>
                  <div className='user justify-content-between d-flex'>
                    <div className='thumb mr-2'>
                      <img src={require('../../../../assets/img/c5.jpg')} />
                    </div>
                    <div className='desc'>
                      <a
                        href='#'
                        style={{
                          fontWeight: 'bold',
                          fontSize: '15px',
                          color: '#222222'
                        }}
                      >Annie Marie
                      </a>
                      <p
                        className='date'
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '12px',
                          fontWeight: '300'
                        }}
                      >
                        December 4, 2019 at 3:12 pm
                      </p>
                      <p
                        className='comment'
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '14px',
                          fontWeight: 'bold'
                        }}
                      >
                        Never say goodbye till the end comes !
                      </p>
                    </div>
                  </div>
                  <div>
                    <ActionButton
                      title='REPLY'
                      style={{
                        fontWeight: 'bold',
                        fontSize: '12px',
                        textAlign: 'center'
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className='comment-list pb-3'
              >
                <div className='single-comment justify-content-between d-flex'>
                  <div className='user justify-content-between d-flex'>
                    <div className='thumb mr-2'>
                      <img src={require('../../../../assets/img/c2.jpg')} />
                    </div>
                    <div className='desc'>
                      <a
                        href='#'
                        style={{
                          fontWeight: 'bold',
                          fontSize: '15px',
                          color: '#222222'
                        }}
                      >Emilly Blunt
                      </a>
                      <p
                        className='date'
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '12px',
                          fontWeight: '300'
                        }}
                      >
                        December 4, 2019 at 3:12 pm
                      </p>
                      <p
                        className='comment'
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '14px',
                          fontWeight: 'bold'
                        }}
                      >
                        Never say goodbye till the end comes !
                      </p>
                    </div>
                  </div>
                  <div>
                    <ActionButton
                      title='REPLY'
                      style={{
                        fontWeight: 'bold',
                        fontSize: '12px',
                        textAlign: 'center'
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className='comment-list pb-3 pl-4'
              >
                <div className='single-comment justify-content-between d-flex'>
                  <div className='user justify-content-between d-flex'>
                    <div className='thumb mr-2'>
                      <img src={require('../../../../assets/img/c2.jpg')} />
                    </div>
                    <div className='desc'>
                      <a
                        href='#'
                        style={{
                          fontWeight: 'bold',
                          fontSize: '15px',
                          color: '#222222'
                        }}
                      >Emilly Blunt
                      </a>
                      <p
                        className='date'
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '12px',
                          fontWeight: '300'
                        }}
                      >
                        December 4, 2019 at 3:12 pm
                      </p>
                      <p
                        className='comment'
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '14px',
                          fontWeight: 'bold'
                        }}
                      >
                        Never say goodbye till the end comes !
                      </p>
                    </div>
                  </div>
                  <div>
                    <ActionButton
                      title='REPLY'
                      style={{
                        fontWeight: 'bold',
                        fontSize: '12px',
                        textAlign: 'center'
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className='comment-list pb-3 pl-4'
              >
                <div className='single-comment justify-content-between d-flex'>
                  <div className='user justify-content-between d-flex'>
                    <div className='thumb mr-2'>
                      <img src={require('../../../../assets/img/c2.jpg')} />
                    </div>
                    <div className='desc'>
                      <a
                        href='#'
                        style={{
                          fontWeight: 'bold',
                          fontSize: '15px',
                          color: '#222222'
                        }}
                      >Emilly Blunt
                      </a>
                      <p
                        className='date'
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '12px',
                          fontWeight: '300'
                        }}
                      >
                        December 4, 2019 at 3:12 pm
                      </p>
                      <p
                        className='comment'
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '14px',
                          fontWeight: 'bold'
                        }}
                      >
                        Never say goodbye till the end comes !
                      </p>
                    </div>
                  </div>
                  <div>
                    <ActionButton
                      title='REPLY'
                      style={{
                        fontWeight: 'bold',
                        fontSize: '12px',
                        textAlign: 'center'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className='comment-form mt-5'
              style={{
                textAlign: 'center',
                border: '1px solid #eee',
                padding: '50px 20px'
              }}
            >
              <h4
                style={{
                  textAlign: 'center',
                  marginBottom: '50px',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}
              >Leave a Comment
              </h4>
              <form>
                <div
                  className='form-group form-inline d-flex row mb-1'
                  style={{
                    alignItems: 'center'
                  }}
                >
                  <div
                    className='form-group col-lg-6 col-md-12 name'
                    style={{
                      alignItems: 'center',
                      marginBottom: 0
                    }}
                  >
                    <input
                      id='name'
                      className='form-control'
                      type='text'
                      placeholder='Enter Name'
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 'bold',
                        padding: '12px',
                        background: '#fff',
                        border: 'none',
                        borderRadius: '0px',
                        width: '100%',
                        fontSize: '12px',
                        color: '#777777'
                      }}
                    />
                  </div>
                  <div
                    className='form-group col-lg-6 col-md-12 email'
                    style={{
                      alignItems: 'center',
                      marginBottom: 0
                    }}
                  >
                    <input
                      id='name'
                      className='form-control'
                      type='email'
                      placeholder='Enter Email Address'
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 'bold',
                        padding: '12px',
                        background: '#fff',
                        border: 'none',
                        borderRadius: '0px',
                        width: '100%',
                        fontSize: '12px',
                        color: '#777777'
                      }}
                    />
                  </div>
                </div>
                <div className='form mt-2'>
                  <input
                    id='subject'
                    className='form-control'
                    type='text'
                    placeholder='Subject'
                    style={{
                      padding: '12px',
                      backgroundColor: '#fff',
                      border: 'none',
                      borderRadius: '0px',
                      width: '100%',
                      fontSize: '12px',
                      color: '#222222',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 'bold'
                    }}
                  />
                </div>
                <div
                  className='form-group'
                  style={{
                    alignItems: 'center',
                    marginBottom: '1rem',
                    width: '100%'
                  }}
                >
                  <textarea
                    className='form-control mb-10 mt-2'
                    rows='5'
                    name='message'
                    placeholder='Message'
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      padding: '12px',
                      background: '#fff',
                      border: 'none',
                      borderRadius: '0px',
                      width: '100%',
                      fontSize: '12px',
                      color: '#222222',
                      fontWeight: 'bold'
                    }}
                  />
                </div>
                <ActionButton
                  title='POST COMMENT'
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}
                />
              </form>
            </div>
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
                    style={{
                      color: '#fff',
                      padding: '10px 22px',
                      fontSize: '14px',
                      border: 'none',
                      float: 'left',
                      width: '80%',
                      borderBottomLeftRadius: '20px',
                      borderTopLeftRadius: '20px',
                      background: '#17a2b8',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 'bold'
                    }}
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
                <div
                  className='single-sidebar-widget user-info-widget'
                  style={{
                    borderBottomColor: 'rgb(238, 238, 238)',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1px',
                    boxSizing: 'border-box',
                    color: '#222222',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    lineHeight: '22.75px',
                    marginBottom: '30px',
                    marginLeft: '30px',
                    marginRight: '30px',
                    marginTop: '30px',
                    paddingBottom: '30px',
                    textAlign: 'center'
                  }}
                >
                  <img
                    className='img mb-4 mt-3'
                    src={require('../../../../assets/img/user-info.png')}
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
                      textAlign: 'center',
                      marginTop: '0px'
                    }}
                  >
                    Frontend Developer
                  </p>
                  <ul
                    className='social-links justify-content-start row mx-3'
                    style={{ listStyleType: 'none' }}
                  >
                    <ActionSosmed
                      wrapstyle={{ display: 'flex', alignItems: 'center' }}
                      iconstyle={{ color: '#222222' }}
                    />
                  </ul>
                  <p style={{ fontFamily: 'Poppins, sans-serif' }}>Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.</p>
                </div>
                <div className='single-sidebar-widget popular-post-widget'>
                  <a
                    className='btn-info btn-popular-post text-center btn-block text-light'
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'sans-serif',
                      fontSize: '16px',
                      lineHeight: '42px',
                      paddingLeft: '30px',
                      paddingRight: '30px',
                      position: 'relative',
                      cursor: 'pointer'
                    }}
                  >Popular Posts
                  </a>
                  <div className='popular-post-list mt-4'>
                    <div className='single-post-list d-flex flex-row mb-2'>
                      <div className='thumb'>
                        <img
                          className='img-fluid-popular-post'
                          src={require('../../../../assets/img/pp1.jpg')}
                          style={{
                            height: '60px',
                            maxWidth: '100%',
                            verticalAlign: 'middle',
                            width: '100px'
                          }}
                        />
                      </div>
                      <div className='details ml-2 mt-2'>
                        <a>
                          <h6 style={{ fontWeight: 'bold', color: '#222222', fontSize: '14px' }}>Space The Final Frontier</h6>
                        </a>
                        <p
                          style={{
                            fontFamily: 'Poppins, sans-serif', fontSize: '14px'
                          }}
                        >02 Hours ago
                        </p>
                      </div>
                    </div>
                    <div className='single-post-list d-flex flex-row mb-2'>
                      <div className='thumb'>
                        <img className='img-fluid-popular-post' src={require('../../../../assets/img/pp2.jpg')} />
                      </div>
                      <div className='details ml-2 mt-2'>
                        <a>
                          <h6 style={{ fontWeight: 'bold', color: '#222222', fontSize: '14px' }}>The Amazing Hubble</h6>
                        </a>
                        <p
                          style={{
                            fontFamily: 'Poppins, sans-serif', fontSize: '14px'
                          }}
                        >02 Hours ago
                        </p>
                      </div>
                    </div>
                    <div className='single-post-list d-flex flex-row mb-2'>
                      <div className='thumb'>
                        <img className='img-fluid-popular-post' src={require('../../../../assets/img/pp3.jpg')} />
                      </div>
                      <div className='details ml-2 mt-2'>
                        <a>
                          <h6 style={{ fontWeight: 'bold', color: '#222222', fontSize: '14px' }}>Astronomy Or Astrology</h6>
                        </a>
                        <p
                          style={{
                            fontFamily: 'Poppins, sans-serif', fontSize: '14px'
                          }}
                        >02 Hours ago
                        </p>
                      </div>
                    </div>
                    <div className='single-post-list d-flex flex-row mb-2'>
                      <div className='thumb'>
                        <img className='img-fluid-popular-post' src={require('../../../../assets/img/pp4.jpg')} />
                      </div>
                      <div className='details ml-2 mt-2'>
                        <a>
                          <h6 style={{ fontWeight: 'bold', color: '#222222', fontSize: '14px' }}>Asteroid telescope</h6>
                        </a>
                        <p
                          style={{
                            fontFamily: 'Poppins, sans-serif', fontSize: '14px'
                          }}
                        >02 Hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-sidebar-widget ads-widget mb-5'>
                  <a href='#'>
                    <img className='img-fluid' src={require('../../../../assets/img/ads-banner.jpg')} alt='' />
                  </a>
                </div>
                <div className='single-sidebar-widget post-category-widget mb-5'>
                  <a
                    className='btn-info btn-popular-post text-center btn-block text-light'
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'sans-serif',
                      fontSize: '16px',
                      lineHeight: '42px',
                      paddingLeft: '30px',
                      paddingRight: '30px',
                      position: 'relative',
                      cursor: 'pointer'
                    }}
                  >Post Categories
                  </a>
                  <ul
                    className='cat-list'
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: 'none',
                      fontFamily: 'Poppins, sans-serif',
                      alignItems: 'center'
                    }}
                  >
                    <li
                      style={{
                        paddingTop: '10px',
                        borderBottom: '2px dotted #eee'
                      }}
                    >
                      <a className='d-flex justify-content-between'>
                        <p>Technology</p>
                        <p>37</p>
                      </a>
                    </li>
                    <li
                      style={{
                        paddingTop: '10px',
                        borderBottom: '2px dotted #eee'
                      }}
                    >
                      <a className='d-flex justify-content-between'>
                        <p>Lifestyle</p>
                        <p>24</p>
                      </a>
                    </li>
                    <li
                      style={{
                        paddingTop: '10px',
                        borderBottom: '2px dotted #eee'
                      }}
                    >
                      <a className='d-flex justify-content-between'>
                        <p>Fashion</p>
                        <p>58</p>
                      </a>
                    </li>
                    <li
                      style={{
                        paddingTop: '10px',
                        borderBottom: '2px dotted #eee'
                      }}
                    >
                      <a className='d-flex justify-content-between'>
                        <p>Art</p>
                        <p>29</p>
                      </a>
                    </li>
                    <li
                      style={{
                        paddingTop: '10px',
                        borderBottom: '2px dotted #eee'
                      }}
                    >
                      <a className='d-flex justify-content-between'>
                        <p>Food</p>
                        <p>29</p>
                      </a>
                    </li>
                    <li
                      style={{
                        paddingTop: '10px',
                        borderBottom: '2px dotted #eee'
                      }}
                    >
                      <a className='d-flex justify-content-between'>
                        <p>Architecture</p>
                        <p>09</p>
                      </a>
                    </li>
                    <li
                      style={{
                        paddingTop: '10px',
                        borderBottom: '2px dotted #eee'
                      }}
                    >
                      <a className='d-flex justify-content-between'>
                        <p>Adventure</p>
                        <p>44</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='single-sidebar-widget newsletter-widget mb-5'>
                  <a
                    className='btn-info btn-popular-post text-center btn-block text-light'
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'sans-serif',
                      fontSize: '16px',
                      lineHeight: '42px',
                      paddingLeft: '30px',
                      paddingRight: '30px',
                      position: 'relative',
                      cursor: 'pointer'
                    }}
                  >News Letter
                  </a>
                  <p
                    style={{
                      textAlign: 'center',
                      margin: '20px 0px',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 800,
                      fontSize: '14px'
                    }}
                  >Here, I focus on a range of items and features that we use in life without giving them a second thought.
                  </p>
                  <div className='form-group d-flex flex-row'>
                    <input className='form-control' style={{ width: '70%', borderRadius: '0px', fontSize: '14px' }} placeholder='Enter Email' type='text' />
                    <button className='px-4' style={{ width: '30%', border: 'none', backgroundColor: '#17a2b8' }}>
                      <i className='fa fa-envelope' style={{ color: '#fff' }} />
                    </button>
                  </div>
                  <p
                    className='text-center mt-3'
                    style={{
                      textAlign: 'center',
                      margin: '20px 0px',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 800,
                      fontSize: '14px'
                    }}
                  >You Can unsubscribe at any time
                  </p>
                </div>
                <div className='single-sidebar-widget tag-cloud-widget'>
                  <a
                    className='btn-info btn-popular-post text-center btn-block text-light'
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'sans-serif',
                      fontSize: '16px',
                      lineHeight: '42px',
                      paddingLeft: '30px',
                      paddingRight: '30px',
                      position: 'relative',
                      cursor: 'pointer'
                    }}
                  >Tag Cloud
                  </a>
                  <ul
                    className='row li-tags my-3 ml-1'
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: 'none'
                    }}
                  >
                    <li
                      style={{
                        color: '#222222',
                        display: 'inline-block',
                        border: '1px solid #eee',
                        background: '#fff',
                        padding: '4px 14px',
                        marginBottom: '10px',
                        fontSize: '11px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 'bold'
                      }}
                    >
                      <a>Technology</a>
                    </li>
                    &nbsp;
                    <li
                      style={{
                        color: '#222222',
                        display: 'inline-block',
                        border: '1px solid #eee',
                        background: '#fff',
                        padding: '4px 14px',
                        marginBottom: '10px',
                        fontSize: '11px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 'bold'
                      }}
                    >
                      <a>Fashion</a>
                    </li>
                    &nbsp;
                    <li
                      style={{
                        color: '#222222',
                        display: 'inline-block',
                        border: '1px solid #eee',
                        background: '#fff',
                        padding: '4px 14px',
                        marginBottom: '10px',
                        fontSize: '11px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 'bold'
                      }}
                    >
                      <a>Architecture</a>
                    </li>
                    &nbsp;
                    <li
                      style={{
                        color: '#222222',
                        display: 'inline-block',
                        border: '1px solid #eee',
                        background: '#fff',
                        padding: '4px 14px',
                        marginBottom: '10px',
                        fontSize: '11px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 'bold'
                      }}
                    >
                      <a>Fashion</a>
                    </li>
                    &nbsp;
                    <li
                      style={{
                        color: '#222222',
                        display: 'inline-block',
                        border: '1px solid #eee',
                        background: '#fff',
                        padding: '4px 14px',
                        marginBottom: '10px',
                        fontSize: '11px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 'bold'
                      }}
                    >
                      <a>Food</a>
                    </li>
                    &nbsp;
                    <li
                      style={{
                        color: '#222222',
                        display: 'inline-block',
                        border: '1px solid #eee',
                        background: '#fff',
                        padding: '4px 14px',
                        marginBottom: '10px',
                        fontSize: '11px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 'bold'
                      }}
                    >
                      <a>Technology</a>
                    </li>
                    &nbsp;
                    <li
                      style={{
                        color: '#222222',
                        display: 'inline-block',
                        border: '1px solid #eee',
                        background: '#fff',
                        padding: '4px 14px',
                        marginBottom: '10px',
                        fontSize: '11px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 'bold'
                      }}
                    >
                      <a>Lifestyle</a>
                    </li>
                    &nbsp;
                    <li
                      style={{
                        color: '#222222',
                        display: 'inline-block',
                        border: '1px solid #eee',
                        background: '#fff',
                        padding: '4px 14px',
                        marginBottom: '10px',
                        fontSize: '11px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 'bold'
                      }}
                    >
                      <a>Art</a>
                    </li>
                    &nbsp;
                    <li
                      style={{
                        color: '#222222',
                        display: 'inline-block',
                        border: '1px solid #eee',
                        background: '#fff',
                        padding: '4px 14px',
                        marginBottom: '10px',
                        fontSize: '11px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 'bold'
                      }}
                    >
                      <a>Adventure</a>
                    </li>
                    &nbsp;
                    <li
                      style={{
                        color: '#222222',
                        display: 'inline-block',
                        border: '1px solid #eee',
                        background: '#fff',
                        padding: '4px 14px',
                        marginBottom: '10px',
                        fontSize: '11px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 'bold'
                      }}
                    >
                      <a>Food</a>
                    </li>
                    &nbsp;
                    <li
                      style={{
                        color: '#222222',
                        display: 'inline-block',
                        border: '1px solid #eee',
                        background: '#fff',
                        padding: '4px 14px',
                        marginBottom: '10px',
                        fontSize: '11px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 'bold'
                      }}
                    >
                      <a>Lifestyle</a>
                    </li>
                    &nbsp;
                    <li
                      style={{
                        color: '#222222',
                        display: 'inline-block',
                        border: '1px solid #eee',
                        background: '#fff',
                        padding: '4px 14px',
                        marginBottom: '10px',
                        fontSize: '11px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 'bold'
                      }}
                    >
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
