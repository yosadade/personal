import React, { Component } from 'react'

class Details extends Component {
  render () {
    return (
      <div
        className='relative about-banner'
        style={{
          backgroundColor: '#17a2b8'
        }}
      >
        <div className='overlay-bg' />
        <div className='container text-center'>
          <div className='row d-flex align-items-center justify-content-center'>
            <div
              className='about-content col-lg-12'
              style={{
                marginTop: '70px',
                padding: '90px 0px',
                textAlign: 'center'
              }}
            >
              <h1
                className='text-white'
                style={{
                  fontWeight: 'bold'
                }}
              >Blog Details Page
              </h1>
              <p className='link-nav'>
                <a
                  href='#'
                  style={{
                    color: '#fff',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}
                >Home
                </a>
                &nbsp;&nbsp;
                <span
                  className='lnr lnr-arrow-right'
                  style={{
                    color: '#fff',
                    fontSize: '12px'
                  }}
                />
                &nbsp;&nbsp;
                <a
                  href=''
                  style={{
                    color: '#fff',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}
                >Blog
                </a>
                &nbsp;&nbsp;
                <span
                  className='lnr lnr-arrow-right'
                  style={{
                    color: '#fff',
                    fontSize: '12px'
                  }}
                />
                 &nbsp;&nbsp;
                <a
                  href=''
                  style={{
                    color: '#fff',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}
                >Blog Details Page
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Details
