/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-09 08:56:18
 * @Desc: Hello 图片资源引入
 */
import React from 'react'

import Logo from '@image/logo.png'
import Avatar from '@image/avatar.jpg'
import '@svg'

const HelloImage: React.FC = () => {
  return (
    <div>
      <h2>HelloImage</h2>
      <div>
        <h3>Png</h3>
        <img width="100" src={Logo} />
      </div>
      <div>
        <h3>jpg</h3>
        <img width="100" src={Avatar} />
      </div>
      <div>
        <h3>svg</h3>
        <svg>
          <use xlinkHref="#qq"></use>
        </svg>
      </div>
    </div>
  )
}

export default HelloImage
