import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

// import User from '../assets/icon/lnr-user.svg'
// import Calendar from '../assets/icon/lnr-calendar-full.svg'
// import Eye from '../assets/icon/lnr-eye.svg'
// import Bubble from '../assets/icon/lnr-bubble.svg'

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
  )
}

class ActionSosmed extends Component {
  constructor () {
    super()
    this.state = {
      dataSosmed: [
        {
          href: 'https://www.facebook.com/yozz.dee',
          className: 'icon-sosmed fa fa-facebook'
        },
        {
          href: 'https://www.instagram.com/yosadade',
          className: 'icon-sosmed fa fa-instagram'
        },
        {
          href: 'https://github.com/yosadade',
          className: 'icon-sosmed fa fa-github'
        },
        {
          href: 'https://www.linkedin.com/in/yosada-dede-525606177/',
          className: 'icon-sosmed fa fa-linkedin'
        }
      ]
    }
  }

  render () {
    return (
      <div className='d-flex align-items-center'>
        {this.state.dataSosmed.map((item, sosmed) => {
          return (
            <div className='footer-social d-flex align-items-center' key={sosmed}>
              <a
                className='mr-4'
                href={item.href}
              >
                <i className={item.className} style={this.props.style} />
              </a>
            </div>
          )
        })}
      </div>
    )
  }
}

export {
  ActionNavbar,
  ActionNavbarItem,
  ActionCategory,
  ActionTags,
  ActionUserDetails,
  ActionBlog,
  ActionSosmed
}
