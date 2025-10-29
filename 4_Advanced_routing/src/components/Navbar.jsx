import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-blue-900 p-6 text-2xl text-white font-semibold '>
      <div>Learnig react router</div>
      <div className='flex gap-15 mx-7 '>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/course">Course</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  )
}

export default Navbar
