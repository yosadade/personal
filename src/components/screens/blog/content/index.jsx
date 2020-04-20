import React, { Component } from 'react'
import {
  ActionTags,
  ActionUserDetails,
  ActionSosmed,
  ActionBlog,
  ActionButton,
  ActionPopularPost,
  ActionCategoryList,
  ActionTagCloud,
  ActionCommentList
} from '../../../action'

import User from '../../../../assets/icon/lnr-user.svg'
import Calendar from '../../../../assets/icon/lnr-calendar-full.svg'
import Eye from '../../../../assets/icon/lnr-eye.svg'
import Bubble from '../../../../assets/icon/lnr-bubble.svg'

import ImgPp1 from '../../../../assets/img/pp1.jpg'
import ImgPp2 from '../../../../assets/img/pp2.jpg'
import ImgPp3 from '../../../../assets/img/pp3.jpg'
import ImgPp4 from '../../../../assets/img/pp4.jpg'

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
      ],
      dataCommentList: [
        {
          img: '',
          className: 'comment-list pb-3',
          name: 'Emilly Blunt',
          time: 'Desember 4, 2017 at 3:12 pm',
          comment: 'Never say goodbye till the end comes!'
        },
        {
          img: '',
          className: 'comment-list pb-3 pl-4',
          name: 'Elsie Cunningham ',
          time: 'Desember 4, 2017 at 3:12 pm',
          comment: 'Never say goodbye till the end comes!'
        },
        {
          img: '',
          className: 'comment-list pb-3 p-l4',
          name: 'Annie Stephens',
          time: 'Desember 4, 2017 at 3:12 pm',
          comment: 'Never say goodbye till the end comes!'
        },
        {
          img: '',
          className: 'comment-list pb-3',
          name: 'Maria Luna',
          time: 'Desember 4, 2017 at 3:12 pm',
          comment: 'Never say goodbye till the end comes!'
        },
        {
          img: '',
          className: 'comment-list pb-3',
          name: 'Ina Hayes',
          time: 'Desember 4, 2017 at 3:12 pm',
          comment: 'Never say goodbye till the end comes!'
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
          {this.postList()}
          {this.sidebarWidget()}
        </div>
      </div>
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

  postList = () => {
    return (
      <div className='col-lg-8 post-list'>
        {this.mainSinglePost()}
        {this.navigationArea()}
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
            className='comment-list left-padding pb-3 pl-4'
          >
            {this.state.dataCommentList.map((item, data) => {
              return (
                <ActionCommentList
                  key={data}
                  className={item.className}
                  name={item.name}
                  time={item.time}
                  comment={item.comment}
                />
              )
            })}
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
              className='btn-info btn'
              style={{
                fontSize: '12px',
                fontWeight: 'bold'
              }}
            />
          </form>
        </div>
      </div>
    )
  }

  mainSinglePost = () => {
    return (
      <div className='single-post row'>
        {this.blogPage()}
        {this.singlePostLeft()}
        {this.singlePost()}
        {this.quotes()}
      </div>
    )
  }

  blogPage = () => {
    return (
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
    )
  }

  singlePostLeft = () => {
    return (
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
    )
  }

  singlePost = () => {
    return (
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
    )
  }

  quotes = () => {
    return (
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
    )
  }

  navigationArea = () => {
    return (
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
    )
  }
}

export default Content
