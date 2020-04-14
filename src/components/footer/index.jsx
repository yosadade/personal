import React, { Component } from 'react'
import './index.css'

class Footer extends Component {
  render () {
    return (
      <footer className='footer-area section-gap mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <h4>About Me</h4>
                <p> We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your convenience. </p>
                <p className='footer-text'>Copyright ©2020 All rights reserved | This template is made with by Colorlib</p>
              </div>
            </div>
            <div className='col-lg-5 col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <h4>Newsletter</h4>
                <p>Stay Update With our latest trends</p>
                <div id='mc_embed_signup' className=''>
                  <form>
                    <input style={{ fontSize: '14px', borderRight: 'none' }} className='input-control' type='text' name='Email' placeholder='Enter Email Address' />
                    <button className='btn btn-default' type='submit'>
                      <i className='icon-sosmed fa fa-arrow-right' style={{ fontSize: '14px', borderLeft: 'none' }} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-6 col-sm-6 social-widget
            '
            >
              <h4>Follow Me</h4>
              <p>Let us be social</p>
              <div className='footer-social d-flex align-items-center'>
                <ul className='social-links justify-content-start row px-3'>
                  <li className='li-social-links'>
                    <a>
                      <i className='icon-sosmed fa fa-facebook' />
                    </a>
                  </li>
                    &nbsp;
                  <li className='li-social-links'>
                    <a>
                      <i className='icon-sosmed fa fa-instagram' />
                    </a>
                  </li>
                    &nbsp;
                  <li className='li-social-links'>
                    <a>
                      <i className='icon-sosmed fa fa-github' />
                    </a>
                  </li>
                    &nbsp;
                  <li className='li-social-links'>
                    <a>
                      <i className='icon-sosmed fa fa-linkedin' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
