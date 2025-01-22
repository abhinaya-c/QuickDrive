import React from 'react'

const Contact = () => {
  return (
    <div className='bg-primary text-black sm:min-h-[600px]
        sm:grid sm:place-items-center duration-300 pt-24 pb-10
        sm:pb-0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2
            place-items-center'>
                {/* lef text content section */}
                <div className='space-y-5 sm:p-16 pb-6'>
                    <h1 data-aos='fade-up' className='text-2xl sm:text-3xl
                    font-bold'>Leading The Way</h1>
                    <h1 data-aos='fade-up' className='text-3xl sm:text-4xl
                    font-bold uppercase'>Your Town’s Most Trusted Car Service
                    </h1>
                    <p data-aos='fade-up' className='leading-8
                    tracking-wide'>
                        lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud
                    </p>
                    <button 
                     data-aos='fade-up'
                     data-aos-offset='0' 
                     className='bg-black text-white px-4 py-2
                     rounded-lg'
                    >Book Now</button>
                </div>
                {/* right side form section */}
                <div data-aos='fade'>
                    <div className='w-full md:max-w-[350px] mx-auto'>
                        <h1 className='uppercase text-2xl text-white bg-black px-5 py-3'>
                         Book a Car
                        </h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2
                         gap-x-2 bg-white p-5'>
                            <input 
                                className='inputField'
                                type='text'
                                name=''
                                id=''
                                placeholder='Name'
                            />
                            <input 
                                className='inputField'
                                type='text'
                                name=''
                                id=''
                                placeholder='Phone'
                            />
                            <input 
                                className='inputField'
                                type='text'
                                name=''
                                id=''
                                placeholder='Start'
                            />
                            <input 
                                className='inputField'
                                type='text'
                                name=''
                                id=''
                                placeholder='End'
                            />
                            <input 
                                className='col-span-2 inputField'
                                type='text'
                                name=''
                                id=''
                                placeholder='Choose Vehicle'
                            />
                            <button className='col-span-2 bg-black w-full
                            mt-6 text-white py-2 px-4 rounded-lg'>
                            Book Now</button>

                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
            <div className='bg-primary'>
            <div className='container text-black py-10 lg:py-14
            text-center text-2xl font-bold space-y-4'>
                <p className='uppercase'>we are ready to take your call 24 hours, 7 days!</p>
                <h1 className='text-3xl md:text-5xl
                font-bold'>+977 9876543210</h1>
            </div>
        </div>
            </div> */}
        </div>
    </div>
  )
}

export default Contact;
