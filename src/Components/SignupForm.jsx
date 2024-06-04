import React, { useState } from 'react'
import {toast} from "react-hot-toast"
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai" 
import { useNavigate } from 'react-router-dom'
import Signup from '../pages/Signup'



const SignupForm = (props) => {

  const setisloggedin=props.setisloggedin;
  const navigate=useNavigate();
  const [formdata,setformdata]=useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmpassword:""
  })

const [accounttype,setaccounttype]=useState("student")

  function changehandler(event){
    setformdata((prevdata)=>(

        {
            ...prevdata,
            [event.target.name]:event.target.value
        }
    ))
}

const finaldata={
  ...formdata,
  accounttype
}

function submithandler(e){
  e.preventDefault();
  if(formdata.password!=formdata.confirmpassword){
    toast.error("Password do not match");
    return;
  }

  //setisloggedin(true);
  toast.success("Account created");
  const accountdata={
    ...formdata
  }
  setisloggedin(true);
  console.log("Printing final data  ")
  console.log(finaldata); 
  navigate("/dashboard");
}


  const [showpassword,setshowpassword]=useState(false);

  const [showconfirmpassword,setshowconfirmpassword]=useState(false);

  return (
   <div className='w-full '>

     <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max '>
      <button
       onClick={()=>{setaccounttype('student')}}
      className={`${accounttype==='student' ? ("bg-richblack-900 text-richblack-5" ) :
       ("bg-transparent text-richblack-200")} py-2 px-5 rounded-full transition-all duration-200`}

      >
        Student
      </button>

      <button 
      
      className={`${accounttype==='instructor' ? ("bg-richblack-900 text-richblack-5" ) :
       ("bg-transparent text-richblack-5")} py-2 px-5 rounded-full transition-all duration-200`}


      onClick={()=>setaccounttype('instructor')}
      
      >
        Instructor
      </button>
    </div>

    <form onSubmit={submithandler}>
        <div className='flex gap-x-4'>
          {/* firstname and lastname */}
          
        <label>
          <p  className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>First Name
          <sup className=' text-pink-200 '>*</sup></p>
          <input
          required
          type="text"
          name='firstname'
          onChange={changehandler}
          placeholder='Enter first name'
          value={formdata.firstname}
          className='bg-richblack-800 rounded-[0.85rem] text-richblack-5 w-full p-[12px] '
          />

        </label>

          <label>
            <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Last Name
            <sup className=' text-pink-200 '>*</sup></p>
            <input
            required
            type="text"
            name='lastname'
            onChange={changehandler}
            placeholder='Enter last name'
            value={formdata.lastname}
            className='bg-richblack-800 rounded-[0.85rem] text-richblack-5 w-full p-[12px] '
          />

        </label>
        </div>

       
   
       {/* for making email */}
        
        <label>
        <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Email Adress
        <sup className=' text-pink-200 '>*</sup></p>
          <input
          required
          type="email"
          name='email'
          onChange={changehandler}
          placeholder='Enter Email Adress'
          value={formdata.email}
          className='bg-richblack-800 rounded-[0.85rem] text-richblack-5 w-full p-[12px] '
          />
        </label>

         

          {/* create password and confirm password */}

         

        <div className='flex gap-x-4' >
        <label className='relative '>
          <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Create Password
          <sup className=' text-pink-200 '>*</sup></p>
          <input
          required
          type= {showpassword? ("text"):("password")}
          name='password'
          onChange={changehandler}
          placeholder='Enter password'
          value={formdata.password}
          className='bg-richblack-800 rounded-[0.85rem] text-richblack-5 w-full p-[12px] mr-10 '
          />
          

          <span onClick={()=>setshowpassword ((prev) => !prev)}
          className='absolute right-3  top-[38px] cursor-pointer  '
          >
                {showpassword? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2Bf'/>):(<AiOutlineEye fontSize={24} fill='#AFB2Bf'/>)}
            </span>     

        </label>

        {/* confirm password */}

        <label className=' w-full relative '>
          <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Confirm Password
          <sup className=' text-pink-200 '>*</sup></p>
          <input
          required
          type= {showconfirmpassword? ("text"):("password")}
          name='confirmpassword'
          onChange={changehandler}
          placeholder='Confirm password'
          value={formdata.confirmpassword}
          className='bg-richblack-800 rounded-[0.85rem] text-richblack-5 w-full p-[12px] '
          />
          

          <span onClick={()=>setshowconfirmpassword ((prev)=> !prev)}
          className='absolute right-3 bottom-230px top-[38px] cursor-pointer  '
          >
                {showconfirmpassword? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2Bf'/>):(<AiOutlineEye fontSize={24} fill='#AFB2Bf'/>)}
          </span> 

        </label>


      </div>

        <button className='bg-yellow-50 w-full rounded-[8px] font-medium text-richblack-900 py-[8px] mt-4 '>
          Create Account
        </button>
       
    </form>


   </div>
  )
}

export default SignupForm;
