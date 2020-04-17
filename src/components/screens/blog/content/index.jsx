import React, { Component } from 'react'
import {
  ActionTags,
  ActionUserDetails,
  ActionSosmed,
  ActionBlog
} from '../../../action'

import User from '../../../../assets/icon/lnr-user.svg'
import Calendar from '../../../../assets/icon/lnr-calendar-full.svg'
import Eye from '../../../../assets/icon/lnr-eye.svg'
import Bubble from '../../../../assets/icon/lnr-bubble.svg'

import Img1 from '../../../../assets/img/feature-img1.jpg'
class Content extends Component {
  constructor () {
    super()
    this.state = {
      userDetails: [
        {
          name: 'Mark wiens',
          href: '#',
          icon: User
        },
        {
          name: '12 Dec, 2017',
          href: '#',
          icon: Calendar
        },
        {
          name: '1.2M Views',
          href: '#',
          icon: Eye
        },
        {
          name: '06 Comments',
          href: '#',
          icon: Bubble
        }
      ],
      blog:
        {
          img: Img1,
          h3: 'Astronomy Binoculars A Great Alternative',
          p: 'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.'
        }
    }
  }

  render () {
    return (
      <div
        className='container py-5'
        style={{ backgroundColor: '#f9f9ff' }}
      >

        <div className='row'>
          <div className='col-lg-8 post-list'>
            <div className='single-post row'>
              <div className='col-lg-12'>
                <img
                  src={require('../../../../assets/feature-img1.jpg')}
                  style={{
                    width: '100%',
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </div>
              <div className='col-lg-3 col-md-3 mt-3 meta-details'>
                <ActionTags />
                {this.state.userDetails.map((item, key) => {
                  return (
                    <ActionUserDetails
                      key={key}
                      name={item.name}
                      icon={item.icon}
                    />
                  )
                })}
                <ActionSosmed
                  style={{
                    color: '#222222'
                  }}
                />
              </div>
              <div className='col-lg-9 col-md-9'>
              </div>
            </div>
          </div>
          <div className='col-lg-4 sidebar-widgets' />
        </div>
      </div>
    )
  }
}

export default Content
