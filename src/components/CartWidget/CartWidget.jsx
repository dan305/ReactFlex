import React from 'react'

const CartWidget = (props) => {
  const {numItems} = props
  return (
    <a className="nav-link"  href='#'>🛒 {numItems}</a>
  )
}

export default CartWidget