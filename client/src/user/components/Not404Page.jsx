import React from 'react'
import './Not404Page.scss'
const NotFound = () => {
  return (
    <div className='notfoundContainer'>
      <h1 className='notfoundHeading'>404</h1>
      <p className='notfoundPara'>Requested Page Not Found!</p>
    </div>
  )
}

export default NotFound