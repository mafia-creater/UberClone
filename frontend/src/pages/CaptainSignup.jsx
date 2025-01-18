import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

    const navigate = useNavigate()




    const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [firstName, setFirstName] = useState('')
        const [lastName, setLastName] = useState('')
        const [userData, setUserData] = useState({})

        const [vehicleColor, setVehicleColor] = useState('')
        const [vehiclePlate, setVehiclePlate] = useState('')
        const [vehicleCapacity, setVehicleCapacity] = useState('')
        const [vehicleType, setVehicleType] = useState('')


        const {captain, setCaptain} = useContext(CaptainDataContext)
    
    
        const submitHandler = async(e) =>{
            e.preventDefault()
            const captainData ={
                fullname:{
                    firstname: firstName,
                    lastname: lastName
                },
                email,
                password,
                vehicle:{
                    color: vehicleColor,
                    plate: vehiclePlate,
                    capacity: vehicleCapacity,
                    vehicleType: vehicleType
                }
            }

            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
            
            if(response.status === 201){
                const data = response.data
                setCaptain(data.captain)
                localStorage.setItem('token', data.token)
                navigate('/captain/home')
            }

            setEmail('')
            setPassword('')
            setFirstName('')
            setLastName('')
            setVehicleColor('')
            setVehiclePlate('')
            setVehicleCapacity('')
            setVehicleType('')    
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

            <h3 className='text-lg font-base mb-2 '>Vehicle Information</h3>
            <div className='flex gap-2 mb-5'>
                <input 
                required
                value={vehicleColor}
                onChange={(e) => {
                    setVehicleColor(e.target.value)
                }}
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm'
                type="text" 
                placeholder="Vehicle Color" 
                />
                <input 
                required
                value={vehiclePlate}
                onChange={(e) => {
                    setVehiclePlate(e.target.value)
                }}
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm'
                type="text" 
                placeholder="Vehicle Plate" 
                />
            </div>
            <div className='flex gap-2 mb-5'>
                <input 
                required
                value={vehicleCapacity}
                onChange={(e) => {
                    setVehicleCapacity(e.target.value)
                }}
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm'
                type="number" 
                placeholder="Vehicle Capacity" 
                />
                <select 
                required
                value={vehicleType}
                onChange={(e) => {
                    setVehicleType(e.target.value)
                }}
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm'
                >
                    <option value="" disabled>Select Vehicle Type</option>
                    <option value="car">Car</option>
                    <option value="auto">Auto</option>
                    <option value="motorcycle">Motorcycle</option>
                </select>
            </div>

            <button


            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-sm'
            >Create Captain Account</button>
        </form>
            <p className='text-center '>Already have a account? <Link to="/captainlogin" className='text-blue-600' >login here</Link></p>
        </div>
        <div>
            <p className='text-[10px] leading-tight'>
                by proceeding, you agree to Uber's Terms of Use and acknowledge you have read the Privacy Policy.
            </p>
        </div>
    </div>
  )
}

export default CaptainSignup