import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div>URL Not found
      <br></br>
    <Link to="/home">
        navigate Home
    </Link>
    </div>
  )
}

export default Notfound