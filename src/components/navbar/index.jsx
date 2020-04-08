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
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
          zIndex: 997,
          backgroundColor: '#fff'
        }}
      >
        <Navbar
          light
          expand='md'
          className='row align-items-center justify-content-between d-flex px-5'
        >
          <NavbarBrand href='/'>
            <img src='../img/logo.png' alt='logo' />
          </NavbarBrand>
          <NavbarToggler onClick={() => {}} />
          <Collapse isOpen={null} navbar>
            <Nav className='ml-auto' navbar>
              {this.state.navbarData.map((item, key) => {
                return (
                  <NavItem
                    key={key}
                  >
                    <NavLink
                      href={item.href}
                      style={{
                        color: '#22222f',
                        float: 'left',
                        fontFamily: 'Poppins sans-serif',
                        fontSize: '14px',
                        fontWeight: '300',
                        lineHeight: '22.75px',
                        listStyleImage: 'none',
                        listStylePosition: 'outside',
                        listStyleType: 'none',
                        marginBottom: '0px',
                        marginLeft: '10px',
                        marginRight: '0px',
                        marginTop: '0px',
                        position: 'relative',
                        textAlign: 'center',
                        whiteSpace: 'nowrap'
                      }}
                    >{item.title}
                    </NavLink>
                  </NavItem>
                )
              })}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
