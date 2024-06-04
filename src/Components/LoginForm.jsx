import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';



const LoginForm = (props) => {

    const navigate=useNavigate();
   
    const setisloggedin=props.setisloggedin;
    const [formdata,setformdata]=useState({email:"",password:""});
    const [showpassword,setshowpassword]=useState(false)
   
    function changehnadler(event){
        setformdata((prevdata)=>(

            {
                ...prevdata,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submithandler(e){
      e.preventDefault();
      setisloggedin(true);
      toast.success("logged in ")
      navigate("/dashboard")

    }


  return (
    <form onSubmit={submithandler} 
    className='flex flex-col w-full gap-y-4 mt-6'
    >
       <label className='w-full  '>
       <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>
                Email Adress <sup className=' text-pink-200 '>*</sup>
            </p>
            <input 
            required
            type= {"email"}
            value={formdata.email}
            onChange={changehnadler}
            placeholder='Enter Email Adress'
            name='email'
            className='bg-richblack-800 rounded-[0.85rem] text-richblack-5 w-full p-[12px] '
            />
       </label>

          <label className='w-full relative'>
            <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>
                Password <sup className='text-pink-200'>*</sup>
            </p>
            <input 
            required
            type= {showpassword? ("text"):("password")}
            value={formdata.password}
            onChange={changehnadler}
            placeholder='Enter password'
            name='password'
            className='bg-richblack-800 rounded-[0.85rem] text-richblack-5 w-full p-[12px] '
            /> 
            <label/> 


            <span onClick={()=>setshowpassword ((prev)=>!prev)}
            className='absolute right-3 top-[38px] cursor-pointer  '
            >
                {showpassword? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2Bf'/>):(<AiOutlineEye fontSize={24} fill='#AFB2Bf'/>)}
            </span>

            <Link to="#">
                 <p
                 className='text-xs text-blue-100 ml-auto mt-1 max-w-max '
                 > Forgot Password </p>
            </Link>

        </label>
        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 py-[8px] mt-4 '>
            Sign in
            </button>
    </form>
  )
}

export default LoginForm;
