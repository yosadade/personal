import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

class ActionNavbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navbarData: [
        {
          href: '',
          title: 'HOME'
        },
        {
          href: '',
          title: 'ABOUT'
        },
        {
          href: '',
          title: 'SERVICE'
        },
        {
          href: '',
          title: 'PORTOFOLIO'
        },
        {
          href: '',
          title: 'PRICING'
        },
        {
          href: '',
          title: 'BLOG'
        },
        {
          href: '',
          title: 'PAGES'
        },
        {
          href: '',
          title: 'CONTACT'
        }
      ]
    }
  }

  render () {
    return (
      <div
        className='navb'
        style={{
          transition: 'all 0.5s',
          boxShadow: '-21.213px 21.213px 30px 0px rgba(158, 158, 158, 0.3)',
          backgroundAttachment: 'scroll',
          backgroundClip: 'border-box',
          backgroundColor: 'rgb(255, 255, 255)',
          display: 'block',
          left: '0px',
          lineHeight: '22.75px',
          position: 'fixed',
          right: '0px',
          top: '0px',
          transitionDelay: '0s',
          transitionDuration: '0.5s',
          transitionProperty: 'all',
          transitionTimingFunction: 'ease',
          zIndex: 997
        }}
      >
        <div
          className='container main-menu'
        >
          <Navbar
            expand='md'
            className='row align-items-center justify-content-between d-flex'
          >
            <NavbarBrand href='/'>
              <img src={require('../../assets/logo.png')} alt='logo' style={{ fontWeight: '300', lineHeight: '22.75px', textAlign: 'left' }} />
            </NavbarBrand>
            <NavbarToggler onClick={() => {}} />
            <Collapse isOpen={null} navbar>
              <Nav className='ml-auto nav-menu-container' navbar>
                {this.state.navbarData.map((item, key) => {
                  return (
                    <ActionNavbarItem
                      key={key}
                      href={item.href}
                      title={item.title}
                    />
                  )
                })}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    )
  }
}

const ActionNavbarItem = (props) => {
  return (
    <NavItem>
      <NavLink
        link
        href={props.href}
        className='nav-menu'
        style={{
          boxSizing: 'border-box',
          color: '#313131',
          fontSize: '13px',
          fontWeight: 'bold',
          lineHeight: '22.75px'
        }}
      >{props.title}
      </NavLink>
    </NavItem>
  )
}

const ActionCategory = (props) => {
  return (
    <div
      className='col-lg-4'
    >
      <div
        className='single-cat-widget'
        style={{
          background: 'rgba(132, 144, 255, 0.85)',
          margin: '7%',
          webkitTransition: 'all 0.3s ease 0s',
          transition: 'all 0.3s ease 0s',
          OTransition: ' all 0.3s ease 0s',
          MozTransition: 'all 0.3s ease 0s'
        }}
      >
        <div
          className='content'
          style={{
            position: 'relative',
            textAlign: 'center'
          }}
        >
          <div
            className='overlay overlay-bg'
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              bottom: '0px',
              left: '0px',
              marginBottom: '24.4833px',
              marginLeft: '24.4833px',
              marginRight: '24.4833px',
              marginTop: '24.4833px',
              position: 'absolute',
              right: '0px',
              top: '0px'
            // background: 'rgba(132, 144, 255, 0.85)',
            // margin: '7%',
            // webkitTransition: 'all 0.3s ease 0s',
            // transition: 'all 0.3s ease 0s',
            // OTransition: ' all 0.3s ease 0s',
            // MozTransition: 'all 0.3s ease 0s'
            }}
          />
          <a href='#' target='_blank'>
            <div
              className='thumb'
            >
              <img
                className='content-image img-fluid d-block mx-auto'
                src={props.img} alt={props.alt}
              />
            </div>
            <div
              className='content-details'
              style={{
                bottom: '0px',
                left: '0px',
                lineHeight: '22.75px',
                marginLeft: '0px',
                marginRight: '0px',
                position: 'absolute',
                right: '0px',
                textAlign: 'center',
                top: '68.4333px'
              }}
            >
              <h4
                className='content-title mx-auto text-uppercase'
                style={{
                  color: 'rgb(255, 255, 255)',
                  fontSize: '16px',
                  fontWeight: '600',
                  lineHeight: '21.6px',
                  marginBottom: '0px',
                  marginLeft: '0px',
                  marginRight: '0px',
                  marginTop: '0px',
                  textAlign: 'center',
                  textTransform: 'uppercase'
                }}
              >
                {props.h4}
              </h4>
              <span
                className='span'
                style={{
                  display: 'inline-block',
                  background: '#fff',
                  width: '60%',
                  height: '1%'
                }}
              />
              <p
                className='p'
                style={{
                  boxSizing: 'border-box',
                  color: '#fff',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  lineHeight: '22.75px',
                  marginBottom: '16px',
                  marginTop: '0px',
                  textAlign: 'center'
                }}
              >{props.p}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

const ActionTags = () => {
  return (
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
  )
}

const ActionUserDetails = (props) => {
  return (
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
        <a className='name' style={{ color: '#222222', fontWeight: 'bold' }}>{props.name}&nbsp;&nbsp;</a>
        <span className='span-icon'>
          <img
            src={props.icon}
            style={{
              color: '#222222',
              width: '14px',
              fontWeight: 'bold'
            }}
          />
        </span>
      </p>
    </div>
  )
}

const ActionBlog = (props) => {
  return (
    <div className='feature-img mb-4'>
      <img className='img-fluid' src={props.img} />
      <a href='/blog' className='post-title mx-1'>
        <h3
          style={{ fontSize: '24px', color: '#222222', fontWeight: 'bold' }}
        >{props.h3}
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
        {props.p}
      </p>
      <a
        className='btn-info btn'
        href='./blog'
        style={{
          fontWeight: 'bold',
          fontSize: '14px',
          textAlign: 'center'
        }}
      >
        View More
      </a>
    </div>
  )
}

const ActionButton = (props) => {
  return (
    <a
      // className='btn-info btn'
      className={props.className}
      href='#'
      style={props.style}
    >
      {props.title}
    </a>
  )
}

const ActionPopularPost = (props) => {
  return (
    <div className='single-post-list d-flex flex-row mb-2'>
      <div className='thumb'>
        <img
          className='img-fluid-popular-post'
          src={props.img}
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
          <h6 style={{ fontWeight: 'bold', color: '#222222', fontSize: '14px' }}>{props.title}</h6>
        </a>
        <p
          style={{
            fontFamily: 'Poppins, sans-serif', fontSize: '14px'
          }}
        >{props.hours}
        </p>
      </div>
    </div>
  )
}

const ActionCategoryList = (props) => {
  return (
    <li
      style={props.style}
    >
      <a className={props.className}>
        <p>{props.title}</p>
        <p>{props.jumlah}</p>
      </a>
    </li>
  )
}

const ActionTagCloud = (props) => {
  return (
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
        fontWeight: 'bold',
        marginRight: '5px'
      }}
    >
      <a>{props.title}</a>
    </li>

  )
}

class ActionSosmed extends Component {
  constructor () {
    super()
    this.state = {
      dataSosmed: [
        {
          href: 'https://www.facebook.com/yozz.dee',
          classname: 'icon-sosmed fa fa-facebook'
        },
        {
          href: 'https://www.instagram.com/yosadade',
          classname: 'icon-sosmed fa fa-instagram'
        },
        {
          href: 'https://github.com/yosadade',
          classname: 'icon-sosmed fa fa-github'
        },
        {
          href: 'https://www.linkedin.com/in/yosada-dede-525606177/',
          classname: 'icon-sosmed fa fa-linkedin'
        }
      ]
    }
  }

  render () {
    return (
      <div
        style={this.props.wrapstyle}
      >
        {this.state.dataSosmed.map((item, sosmed) => {
          return (
            <div className='footer-social d-flex align-items-center' key={sosmed}>
              <a
                className='mr-4'
                href={item.href}
              >
                <i className={item.classname} style={this.props.iconstyle} />
              </a>
            </div>
          )
        })}
      </div>
    )
  }
}

const ActionCommentList = (props) => {
  return (
    <div
      // className='comment-list pb-3 pl-4'
      className={props.className}
    >
      <div className='single-comment justify-content-between d-flex'>
        <div className='user justify-content-between d-flex'>
          <div className='thumb mr-2'>
            <img src={require('../../assets/img/c2.jpg')} />
          </div>
          <div className='desc'>
            <a
              href='#'
              style={{
                fontWeight: 'bold',
                fontSize: '15px',
                color: '#222222'
              }}
            >{props.name}
            </a>
            <p
              className='date'
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                fontWeight: '300'
              }}
            >
              {props.time}
            </p>
            <p
              className='comment'
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            >
              {props.comment}
            </p>
          </div>
        </div>
        <div>
          <ActionButton
            title='REPLY'
            className='btn-info btn'
            style={{
              fontWeight: 'bold',
              fontSize: '12px',
              textAlign: 'center'
            }}
          />
        </div>
      </div>
    </div>
  )
}

ActionNavbarItem.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string
}

ActionCategory.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  h4: PropTypes.string,
  p: PropTypes.string
}

ActionUserDetails.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string
}

ActionBlog.propTypes = {
  img: PropTypes.string,
  h3: PropTypes.string,
  p: PropTypes.string
}

ActionButton.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
  title: PropTypes.string
}

ActionPopularPost.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  hours: PropTypes.string
}

ActionCategoryList.propTypes = {
  style: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  jumlah: PropTypes.string
}

ActionTagCloud.propTypes = {
  title: PropTypes.string
}

ActionSosmed.propTypes = {
  wrapstyle: PropTypes.string,
  iconstyle: PropTypes.string
}

export {
  ActionNavbar,
  ActionNavbarItem,
  ActionCategory,
  ActionTags,
  ActionUserDetails,
  ActionBlog,
  ActionButton,
  ActionPopularPost,
  ActionCategoryList,
  ActionSosmed,
  ActionTagCloud,
  ActionCommentList
}
