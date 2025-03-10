import React from 'react';
import Title from '../components/Title'
import { assets } from '../assets/assets'; 
function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About Mauka" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Mauka is an online thrift store dedicated to offering a wide variety of secondhand goods, including clothes, jewelry, furniture, artwork, and other unique items. With a focus on sustainability, Mauka promotes a circular economy by encouraging the reuse and recycling of pre-loved products. The platform allows users to buy and sell gently used items, offering them an affordable and eco-friendly shopping experience. Whether you're looking for a stylish outfit, vintage furniture, or one-of-a-kind art, Mauka provides an opportunity for individuals to access quality goods at great prices while contributing to a more sustainable lifestyle.
          </p>
          <p>
            By creating a community of mindful consumers, Mauka aims to make secondhand shopping trendy, convenient, and impactful, helping reduce waste and support a more sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;