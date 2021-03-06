import React, { Component } from 'react'
import './index.css'
import {
  ActionSosmed,
  ActionUserDetails,
  ActionTags,
  ActionBlog,
  ActionButton,
  ActionCategoryList,
  ActionTagCloud,
  ActionPopularPost
} from '../../../action'

import User from '../../../../assets/icon/lnr-user.svg'
import Calendar from '../../../../assets/icon/lnr-calendar-full.svg'
import Eye from '../../../../assets/icon/lnr-eye.svg'
import Bubble from '../../../../assets/icon/lnr-bubble.svg'

import ImgPp1 from '../../../../assets/img/pp1.jpg'
import ImgPp2 from '../../../../assets/img/pp2.jpg'
import ImgPp3 from '../../../../assets/img/pp3.jpg'
import ImgPp4 from '../../../../assets/img/pp4.jpg'

import Img1 from '../../../../assets/img/feature-img1.jpg'
import Img2 from '../../../../assets/img/feature-img2.jpg'
import Img3 from '../../../../assets/img/feature-img3.jpg'
import Img4 from '../../../../assets/img/feature-img4.jpg'
import Img5 from '../../../../assets/img/feature-img5.jpg'

import Icon1 from '../../../../assets/icon/lnr-chevron-left.svg'
import Icon2 from '../../../../assets/icon/lnr-chevron-right.svg'
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
      ],
      paginationData: [
        {
          icon: Icon1,
          page: ''
        },
        {
          icon: null,
          page: '01'
        },
        {
          icon: null,
          page: '02'
        },
        {
          icon: null,
          page: '03'
        },
        {
          icon: null,
          page: '04'
        },
        {
          icon: null,
          page: '05'
        },
        {
          icon: Icon2,
          page: ''
        }
      ],
      dataPopularPost: [
        {
          img: ImgPp1,
          title: 'Space The Final Frontier',
          hours: '02 Hours ago'
        },
        {
          img: ImgPp2,
          title: 'The Amazing Hubble',
          hours: '02 Hours ago'
        },
        {
          img: ImgPp3,
          title: 'Astronomy Or Astrology',
          hours: '02 Hours ago'
        },
        {
          img: ImgPp4,
          title: 'Asteroid Telescope',
          hours: '02 Hours ago'
        }
      ],
      dataPostCategory: [
        {
          title: 'Technology',
          jumlah: '37'
        },
        {
          title: 'Lifestyle',
          jumlah: '24'
        },
        {
          title: 'Fashion',
          jumlah: '29'
        },
        {
          title: 'Art',
          jumlah: '29'
        },
        {
          title: 'Food',
          jumlah: '15'
        },
        {
          title: 'Architecture',
          jumlah: '09'
        },
        {
          title: 'Adventure',
          jumlah: '44'
        }
      ],
      dataTagCloud: [
        {
          title: 'Technology'
        },
        {
          title: 'Fashion'
        },
        {
          title: 'Architecture'
        },
        {
          title: 'Fashion'
        },
        {
          title: 'Food'
        },
        {
          title: 'Technology'
        },
        {
          title: 'Lifestyle'
        },
        {
          title: 'Art'
        },
        {
          title: 'Adventure'
        },
        {
          title: 'Food'
        },
        {
          title: 'Lifestyle'
        },
        {
          title: 'Adventure'
        }
      ]
    }
  }

  render () {
    return (
      <div
        className='container row'
      >
        {this.postList()}
        {this.sidebarWidget()}
      </div>
    )
  }

  postList = () => {
    return (
      <div className='col-lg-8 post-list'>
        {this.singlePostList()}
        {this.pagination()}
      </div>
    )
  }

  singlePostList = () => {
    return (
      <div>
        {this.state.blog.map((item, blog) => {
          return (
            <div
              className='single-post row mb-1'
              key={blog}
            >
              <div className='meta-details col-lg-3 col-md-3 py-4'>
                <ActionTags />
                {this.state.userDetails.map((item, id) => {
                  return (
                    <ActionUserDetails
                      key={id}
                      name={item.name}
                      icon={item.icon}
                    />
                  )
                })}
              </div>
              <div className='col-lg-9 col-ml-9'>
                <ActionBlog
                  img={item.img}
                  h3={item.h3}
                  p={item.p}
                />
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  pagination = () => {
    return (
      <nav
        className='blog-pagination mt-3'
        style={{
          fontFamily: 'Poppins, sans-serif',
          display: 'flex',
          justifyContent: 'center',
          color: '#222222',
          fontWeight: 'bold',
          fontSize: '13px'
        }}
      >
        <ul className='pagination row'>
          {this.state.paginationData.map((item, page) => {
            return (
              <li
                key={page}
                className='page-item px-2'
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
                  paddingTop: '8px',
                  position: 'relative',
                  textAlign: 'left'
                }}
              >
                <a>{item.page}</a>
                <img src={item.icon} style={{ width: '13px' }} />
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

  sidebarWidget = () => {
    return (
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
            {this.formSearchPost()}
            {this.userInfoWidget()}
            {this.popularPostWidget()}
            {this.adsWidget()}
            {this.postCategoryWidget()}
            {this.newsLetterWidget()}
            {this.tagCloutWidget()}
          </div>
        </div>
      </div>
    )
  }

  formSearchPost = () => {
    return (
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
    )
  }

  userInfoWidget = () => {
    return (
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
    )
  }

  popularPostWidget = () => {
    return (
      <div className='single-sidebar-widget popular-post-widget'>
        <ActionButton
          title='Popular Posts'
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
        />
        <div className='popular-post-list mt-4'>
          {this.state.dataPopularPost.map((item, pop) => {
            return (
              <ActionPopularPost
                key={pop}
                img={item.img}
                title={item.title}
                hours={item.hours}
              />
            )
          })}
        </div>
      </div>
    )
  }

  adsWidget = () => {
    return (
      <div className='single-sidebar-widget ads-widget mb-5'>
        <a href='#'>
          <img className='img-fluid' src={require('../../../../assets/img/ads-banner.jpg')} alt='' />
        </a>
      </div>
    )
  }

  postCategoryWidget = () => {
    return (
      <div className='single-sidebar-widget post-category-widget mb-5'>
        <ActionButton
          className='btn-info btn-popular-post text-center btn-block text-light'
          title='Post Category'
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            fontSize: '16px',
            lineHeight: '42px',
            paddingLeft: '30px',
            paddingRight: '30px',
            position: 'relative',
            cursor: 'pointer'
          }}
        />
        <ul
          className='cat-list'
          style={{
            margin: 0,
            padding: 0,
            listStyle: 'none',
            fontFamily: 'Poppins, sans-serif',
            alignItems: 'center',
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          <li
            style={{
              paddingTop: '10px',
              borderBottom: '2px dotted #eee'
            }}
          >
            {this.state.dataPostCategory.map((item, post) => {
              return (
                <ActionCategoryList
                  key={post}
                  className='d-flex justify-content-between'
                  title={item.title}
                  jumlah={item.jumlah}
                />
              )
            })}
          </li>
        </ul>
      </div>
    )
  }

  newsLetterWidget = () => {
    return (
      <div className='single-sidebar-widget newsletter-widget mb-5'>
        <ActionButton
          title='News Letter'
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
        />
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
    )
  }

  tagCloutWidget = () => {
    return (
      <div className='single-sidebar-widget tag-cloud-widget'>
        <ActionButton
          title='Tag Cloud'
          className='btn-info btn-popular-post text-center btn-block text-light'
          href='#'
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
        />
        <ul
          className='row li-tags my-3 ml-1'
          style={{
            margin: 0,
            padding: 0,
            listStyle: 'none'
          }}
        >
          {this.state.dataTagCloud.map((item, tag) => {
            return (
              <ActionTagCloud
                key={tag}
                title={item.title}
              />
            )
          })}
        </ul>

      </div>
    )
  }
}

export default Content
