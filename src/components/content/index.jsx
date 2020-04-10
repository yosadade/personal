import React, { Component } from 'react'
import '../content/index.css'
import User from '../../assets/icon/lnr-user.svg'
import Calendar from '../../assets/icon/lnr-calendar-full.svg'
import Eye from '../../assets/icon/lnr-eye.svg'
import Bubble from '../../assets/icon/lnr-bubble.svg'

class Content extends Component {
  constructor () {
    super()
    this.state = {
      tags: [
        {
          a: 'Food,',
          href: '#'
        },
        {
          a: ' Technology,',
          href: '#'
        },
        {
          a: ' Politics,',
          href: '#'
        },
        {
          a: ' Lifestyle',
          href: '#'
        }
      ],
      userDetails: [
        {
          a: 'Mark wiens',
          href: '#',
          icon: User
        },
        {
          a: '12 Dec, 2017',
          href: '#',
          icon: Calendar
        },
        {
          a: '1.2M Views',
          href: '#',
          icon: Eye
        },
        {
          a: '06 Comments',
          href: '#',
          icon: Bubble
        }
      ]
    }
  }

  render () {
    return (
      <div
        className='container'
      >
        <div
          className='row'
        >
          <div className='col-lg-8 post-list'>
            <div className='single-post row'>
              <div className='meta-details col-lg-3 col-md-3'>
                <ul className='tags row'>
                  {this.state.tags.map((item, key) => {
                    return (
                      <li className='' key={key}>
                        <a>{item.a}&nbsp;</a>
                      </li>
                    )
                  })}
                </ul>
                <div className='user-details row'>
                  {this.state.userDetails.map((item, index) => {
                    return (
                      <p className='user-name col-lg-12 col-md-12 col-6' key={index}>
                        <a className=''>{item.a}&nbsp;&nbsp;</a>
                        <span className='icon'>
                          <img className='icon' src={item.icon} />
                        </span>
                      </p>
                    )
                  })}
                </div>
              </div>
              <div className='col-lg-9 col-ml-9' />
            </div>
          </div>
          <div className='col-lg-4 sidebar-widget' />
        </div>
      </div>
    )
  }
}

export default Content
