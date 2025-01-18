import React from 'react'

const Home = () => {

  const submitHandler = (e) => {
    e.preventDefault()
  }


  return (
    <div className='h-screen relative '>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='h-screen w-screen '>
        <img className='h-full w-full object-cover' src="https://cdn.olaelectric.com/olakrutrim/maps/ecosystem_driven_sec_img_2_mweb.webp" alt="" />
      </div>
      <div className=' flex flex-col justify-end  h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white relative'>
          <h4 className='text-2xl font-semibold '>Find a trip</h4>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[35%] left-10  bg-gray-900 rounded-full "></div>
            <input className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location'/>
            <input className='bg-[#eee] px-12 py-2 text-lg rounded-lg mt-3' type="text" placeholder='Enter your destination' />
          </form>
        </div>
        <div className='h-0' >

        </div>
      </div>
    </div>
  )
}

export default Home