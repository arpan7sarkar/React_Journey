import {Link} from 'react-router-dom'

const Navbar = () => {
    //implemented SPA routing
  return (
    <div className='flex justify-between bg-blue-900 p-6 text-2xl font-semibold '>
      <div>Learnig react router</div>
      <div className='flex gap-15 mx-7 '>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

      </div>
    </div>
  )
}

export default Navbar
