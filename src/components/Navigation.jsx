
import React from 'react'

const Navigation = () => {
  return (
    <nav className='container'>
    <div className="logo">
      <img src="/images/brand_logo.png" alt="logo" />
    </div>
    <ul>
      <li href="#">Menu</li>
      <li href="#">Cart</li>
      <li href="#">About</li>
      <li href="#">Contact</li>
    </ul>
    <button>Login</button>
   </nav>
  )
}

export default Navigation