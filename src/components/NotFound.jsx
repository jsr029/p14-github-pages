import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
    <div>Error 404, Page not found !</div>
    <div><Link to='/'>Homepage</Link></div>
    </>
  )
}

export default NotFound