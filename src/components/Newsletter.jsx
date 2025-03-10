import React from 'react'

const Newsletter = () => {

    const onSubmitHandler=(event)=>{
        event.preventDefault();
        //  so that screen doesnt get reloaded on submit
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-grey-800'>Subscribe now & get 20% off </p>
        <p className='text-grey-400 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, dolorum!</p>

        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
            <button onClick={onSubmitHandler} className='bg-black text-white text-xs px-10 py-4'type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Newsletter