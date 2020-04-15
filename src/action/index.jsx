import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

// navbar
const ActionNavbar = (props) => {
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
            <img src='' alt='logo' style={{ fontWeight: '300', lineHeight: '22.75px', textAlign: 'left' }} />
          </NavbarBrand>
          <NavbarToggler onClick={() => {}} />
          <Collapse isOpen={null} navbar>
            <Nav className='ml-auto nav-menu-container' navbar>
              <NavItem>
                <NavLink
                  href={props.href}
                  className='nav-menu'
                  style={{
                    boxSizing: 'border-box',
                    color: '#313131',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    lineHeight: '22.75px'
                  }}
                >{props.title}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export { ActionNavbar }
