import React, { Component } from 'react'
import { ActionSosmed } from '../../../../components/action'

class Footer extends Component {
  render () {
    return (
      <footer
        className='footer-area section-gap mt-5'
        style={{ backgroundColor: '#04091e', padding: '120px 0px' }}
      >
        <div
          className='container'
          style={{
            maxWidth: '1140px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 'bold'
          }}
        >
          <div className='row' style={{ color: '#777777' }}>
            {this.AboutMe()}
            {this.Newsletter()}
            {this.FollowMe()}
          </div>
        </div>
      </footer>
    )
  }

  AboutMe = () => {
    return (
      <div className='col-lg-5 col-md-6 col-sm-6'>
        <div className='single-footer-widget'>
          <h4 style={{ color: '#fff', fontWeight: 'bold' }}>About Me</h4>
          <p className='my-3'> We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your convenience. </p>
          <p className='footer-text'>Copyright ©2020 All rights reserved | This template is made with by Colorlib</p>
        </div>
      </div>
    )
  }

  Newsletter = () => {
    return (
      <div className='col-lg-5 col-md-6 col-sm-6'>
        <div className='single-footer-widget'>
          <h4 style={{ color: '#fff', fontWeight: 'bold' }}>Newsletter</h4>
          <p className='my-3'>Stay Update With our latest trends</p>
          <form>
            <input style={{ fontSize: '14px', borderRight: 'none', width: '90%' }} className='input-control' type='text' name='Email' placeholder='Enter Email Address' />
            <button
              className='btn btn-default'
              type='submit'
              style={{
                width: '10%',
                fontSize: '2px',
                borderRadius: 0,
                background: '#17a2b8',
                color: '#fff'
              }}
            >
              <i className='icon-sosmed fa fa-arrow-right' style={{ fontSize: '14px', borderLeft: 'none' }} />
            </button>
          </form>
        </div>
      </div>
    )
  }

  FollowMe = () => {
    return (
      <div className='col-lg-2 col-md-6 col-sm-6 social-widget'>
        <h4 style={{ color: '#fff', fontWeight: 'bold' }}>Follow Me</h4>
        <p className='my-3'>Let us be social</p>
        <ActionSosmed
          wrapstyle={{ display: 'flex', alignItems: 'center' }}
          iconstyle={{ color: '#fff' }}
        />
      </div>
    )
  }
}

export default Footer
