import React, { Component } from 'react'
import '../navbar/index.css'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

class Header extends Component {
  constructor () {
    super()
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
                    <NavItem
                      key={key}
                    >
                      <NavLink
                        href={item.href}
                        className='nav-menu'
                      >{item.title}
                      </NavLink>
                    </NavItem>
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
