import React from 'react'
import CustomButton from '../Components/Button'
import { Link } from 'react-router-dom'

const Together = () => {
  return (
    <div className='mt-5 lg:flex lg:gap-20'>
        <div className=''>
        <h1 className='px-5 text-2xl text-center font-bold lg:text-left lg:text-2xl lg:w-[350px] lg:ml-28'>Lets work Together on your next project</h1>
        <p className='mt-3 text-center px-5 lg:text-left lg:w-[550px] lg:ml-28 lg:mb-10 '>collaboration is key let join forces and combine our skills to tackle your next project with a powerful synergy that guarantees success.</p>
        </div>
      
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
        <Link to="/contact">
        <CustomButton label="Contact Me" />
      </Link>
  
</div>

    </div>
  )
}

export default Together