import React, { Component } from 'react'
import '../category/index.css'
import Image1 from '../../assets/cat-widget1.jpg'
import Image2 from '../../assets/cat-widget2.jpg'
import Image3 from '../../assets/cat-widget3.jpg'

import { ActionCategory } from '../../action'

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
              <ActionCategory
                key={key}
                img={item.img}
                alt={item.alt}
                h4={item.h4}
                p={item.p}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Category
