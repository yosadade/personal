import React, { Component } from 'react'
import '../category/index.css'
import Image1 from '../../assets/cat-widget1.jpg'
import Image2 from '../../assets/cat-widget2.jpg'
import Image3 from '../../assets/cat-widget3.jpg'

class Category extends Component {
  constructor () {
    super()
    this.state = {
      dataCategory: [
        {
          img: Image1,
          alt: 'img1',
          h4: 'SOCIAL LIFE',
          p: 'Enjoy your social life together'
        },
        {
          img: Image2,
          alt: 'img2',
          h4: 'POLITICS',
          p: 'Be a part of politics'
        },
        {
          img: Image3,
          alt: 'img3',
          h4: 'FOOD',
          p: 'Let the food be finished'
        }
      ]
    }
  }

  render () {
    return (
      <div
        className='container top-category-widget-area py-5'
        style={{
          backgroundColor: 'rgb(249, 249, 255)'
        }}
      >
        <div
          className='row'
        >
          {this.state.dataCategory.map((item, key) => {
            return (
              <div
                key={key}
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
                          src={item.img} alt={item.alt}
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
                          {item.h4}
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
                        >{item.p}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Category
