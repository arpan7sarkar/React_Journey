import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex justify-center items-center gap-5 text-xl font-semibold'>
            <Link to="/product/men">Men</Link>
            <Link to="/product/woman">Woman</Link>
        </div>
      <h2>Product</h2>
    </div>
  )
}

export default Product
