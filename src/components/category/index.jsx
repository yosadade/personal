import React, { Component } from 'react'
import Image1 from '../../img/cat-widget1.jpg'
import Image2 from '../../img/cat-widget2.jpg'
import Image3 from '../../img/cat-widget3.jpg'

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
      <section
        className='top-category-widget-area pt-90 pb-90'
        style={{
          backgroundColor: '#F9F9FF',
          boxSizing: 'border-box',
          display: 'block',
          lineHeight: '22.75px',
          paddingBottom: '90px',
          paddingTop: '90px',
          textAlign: 'left'
        }}
      >
        <div
          className='container'
          style={{
            boxSizing: 'border-box',
            lineHeight: '22.75px',
            width: '1140px',
            textAlign: 'left',
            paddingRight: '15px',
            paddingLeft: '15px',
            maxWidth: '1140px',
            marginRight: '107px',
            marginLeft: '107px'
          }}
        >
          <div
            className='row'
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexWrap: 'wrap',
              lineHeight: '22.75px',
              marginLeft: '-15px',
              marginRight: '-15px',
              textAlign: 'left'
            }}
          >
            {this.state.dataCategory.map((item, key) => {
              return (
                <div
                  key={key}
                  className='col-lg-4'
                  style={{
                    boxSizing: 'border-box',
                    color: '#F77777',
                    flexBasis: '33.333%',
                    flexGrow: 0,
                    flexShrink: 0,
                    lineHeight: '22.75px',
                    maxWidth: '33.3333%',
                    minHeight: '1px',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    position: 'relative',
                    textAlign: 'left',
                    width: '379.983px'
                  }}
                >
                  <div
                    className='single-cat-widget'
                    style={{
                      boxSizing: 'border-box',
                      lineHeight: '22.75px',
                      position: 'relative',
                      textAlign: 'center'
                    }}
                  >
                    <div
                      className='content relative'
                      style={{
                        boxSizing: 'border-box',
                        lineHeight: '22.75px',
                        position: 'relative',
                        textAlign: 'center'
                      }}
                    >
                      <div
                        className='overlay overlay-bg'
                        style={{
                          backgroundAttachment: 'scroll',
                          backgroundClip: 'border-box',
                          backgroundColor: 'rgba(0, 0, 0, 0.85)',
                          backgroundImage: 'none',
                          backgroundOrigin: 'padding-box',
                          backgroundPosition: '0% 0%',
                          backgroundPositionX: '0%',
                          backgroundPositionY: '0%',
                          backgroundRepeat: 'repeat',
                          backgroundSize: 'auto',
                          bottom: '0px',
                          boxSizing: 'border-box',
                          left: '0px',
                          lineHeight: '22.75px',
                          marginBottom: '24.4833px',
                          marginLeft: '24.4833px',
                          marginRight: '24.4833px',
                          marginTop: '24.4833px',
                          position: 'absolute',
                          right: '0px',
                          textAlign: 'center',
                          top: '0px',
                          'transition-delay': '0s',
                          'transition-duration': '0.3s',
                          transitionProperty: 'all',
                          transitionTimingFunction: 'ease'
                        }}
                      />
                      <a href='#' target='_blank'>
                        <div
                          className='thumb'
                          style={{
                            boxSizing: 'border-box',
                            fontfamily: 'Poppins sans-serif',
                            lineheight: '22.75px',
                            textalign: 'center'
                          }}
                        >
                          <img
                            className='content-image img-fluid d-block mx-auto'
                            src={item.img} alt={item.alt}
                            style={{
                              borderBottomStyle: 'none',
                              borderLeftStyle: 'none',
                              borderRightStyle: 'none',
                              borderTopStyle: 'none',
                              boxSizing: 'border-box',
                              height: '213.883px',
                              lineHeight: '22.75px',
                              marginLeft: '0px',
                              marginRight: '0px',
                              maxWidth: '100%',
                              textAlign: 'center',
                              verticalAlign: 'middle',
                              width: '349.983px'
                            }}
                          />
                        </div>
                        <div
                          className='content-details'
                          style={{
                            bottom: '0px',
                            boxSizing: 'border-box',
                            left: '0px',
                            lineheight: '22.75px',
                            marginleft: '0px',
                            marginright: '0px',
                            position: 'absolute',
                            right: '0px',
                            textalign: 'center',
                            top: '68.4333px'
                          }}
                        >
                          <h4
                            className='content-title mx-auto text-uppercase'
                            style={{
                              boxSizing: 'border-box',
                              color: 'rgb(255, 255, 255)',
                              fontFamily: 'Poppins sans-serif',
                              fontSize: '18px',
                              fontWeight: '800',
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
                            style={{
                              backgroundAttachment: 'scroll',
                              backgroundClip: 'border-box',
                              backgroundColor: 'rgb(255, 255, 255)',
                              backgroundImage: 'none',
                              backgroundOrigin: 'padding-box',
                              backgroundPosition: '0% 0%',
                              backgroundPositionX: '0%',
                              backgroundPositionY: '0%',
                              backgroundRepeat: 'repeat',
                              backgroundSize: 'auto',
                              boxSizing: 'border-box',
                              color: 'rgb(255, 255, 255)',
                              display: 'inline-block',
                              height: '1.45px',
                              lineHeight: '22.75px',
                              width: '209.983px'
                            }}
                          />
                          <p
                            style={{
                              color: 'rgb(255, 255, 255)',
                              fontFamily: 'Poppins sans-serif',
                              fontSize: '14px',
                              fontWeight: '300',
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
      </section>
    )
  }
}

export default Category
