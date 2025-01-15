import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const UserSignup = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})



    const submitHandler = (e) =>{
        setUserData({
            fullName:{
                firstName:firstName,
                lastName:lastName
            },
            email:email,
            password:password
        })
        e.preventDefault()
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }

  return (
    <div className='p-7 flex flex-col justify-between h-screen '>
        <div>
        <img className='w-20 mb-2' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
        <form onSubmit={(e) =>
            submitHandler(e)
        }> 

            <h3 className='text-lg font-base mb-2 '>What's your name</h3>
            <div className='flex gap-2 mb-5'>
                <input 
                required
                value={firstName}
                onChange={(e) => {
                    setFirstName(e.target.value)
                }}
                className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-sm'
                type="text" 
                placeholder="First Name" 
                />
                <input 
                required
                value={lastName}
                onChange={(e) => {
                    setLastName(e.target.value)
                }}
                className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-sm'
                type="text" 
                placeholder="Last Name" 
                />
            </div>

            <h3 className='text-lg font-base mb-2 '>What's your email</h3>
            <input 
            required
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
            type="email" 
            placeholder="email@example.com" 
            />
            <h3 className='text-lg font-base mb-2 '>Enter Password</h3>
            <input
            required 
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
            type="password" 
            placeholder="password" 
            />
            <button


            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-sm'
            >Login</button>
        </form>
            <p className='text-center '>Already have a account? <Link to="/login" className='text-blue-600' >login here</Link></p>
        </div>
        <div>
            <p className='text-[10px] leading-tight'>
                by proceeding, you agree to Uber's Terms of Use and acknowledge you have read the Privacy Policy.
            </p>
        </div>
    </div>
  )
}

export default UserSignup