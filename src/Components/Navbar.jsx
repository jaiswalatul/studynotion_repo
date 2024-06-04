import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom' 
import toast from 'react-hot-toast'


const Navbar = (props) => {

  let isloggedin=props.isloggedin;
  let setisloggedin=props.setisloggedin;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

      <Link to='/'>
    <img src={logo} alt='logo' width={160} height={32} loading='lazy'></img>
      </Link>

      <nav className='text-richblack-100  flex items-center mr-0 gap-x-2'>
        <ul>
          <li>
            <Link to="/" className='mr-4'>Home</Link>

            <Link to="/" className='mr-4'>About</Link>

            <Link to="/" className='mr-4' >Contact</Link>
          </li>
        </ul>
      </nav>

       {/* login-signup-logout-Dashboard */}
        <div className='flex item-center gap-x-4 '>
          {!isloggedin &&
            <Link to="/login">
             <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-
             richblack-700 '>
              Log in
             </button>
          </Link>}

          {!isloggedin &&
            (<Link to="/signup">
             <button  className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-
             richblack-700 '>
              Sign Up
             </button>
          </Link>)
}
          {isloggedin &&
            (<Link to="/">
             <button onClick={()=>{
              setisloggedin(false );
              toast.success("log out")
             }}  
             className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-
             richblack-700 '
             >
              Log Out
             </button>
          </Link>)}

          {isloggedin &&
           ( <Link to="/dashboard">
             <button 
             className='bg-richblack-800  text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-
             richblack-700 '
             >
              Dashboard
             </button>
          </Link>)}
        </div>
    </div>

   
  )
}

export default Navbar;