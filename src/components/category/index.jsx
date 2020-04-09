import React, { Component } from 'react'
import '../category/index.css'
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
      >
        <div
          className='container'
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
                  >
                    <div
                      className='content relative'
                    >
                      <div
                        className='overlay overlay-bg'
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
                        >
                          <h4
                            className='content-title mx-auto text-uppercase'
                          >
                            {item.h4}
                          </h4>
                          <span
                            className='span'
                          />
                          <p
                            className='p'
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
