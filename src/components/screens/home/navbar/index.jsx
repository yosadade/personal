import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav
} from 'reactstrap'
import { ActionNavbarItem } from '../../../action'

class Header extends Component {
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
            <NavbarBrand>
              <img src={require('../../../../assets/logo.png')} alt='logo' style={{ fontWeight: '300', lineHeight: '22.75px', textAlign: 'left' }} />
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

export default Header
