import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'; 

const Contact = () => {
  return (
    <div>
        <div className='=text-center text-2xl pt-10 border-t'>
            <Title text1={'CONTACT'} text2={'US'}/>
        </div>

        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
            <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
            <div className='flex flex-col justify-center items-start gap-6'>
                <p className='font-semibold text-xl text-gray-600'> Our Store</p>
                <p className='text-gray-500'>Tel: +91 9315994282 <br/> Email: admin@mauka.com </p>
            </div>
        </div>
    </div>
  )
}

export default Contact