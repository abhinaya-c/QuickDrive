import React from 'react'
import Img2 from '../../assets/whitecar.png'


const ServicesData = [
    {
        id:1,
        img: Img2,
        name: "Economy Class",
        description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, erat ut ultricies.",
        price: 'Rs.5000/Day',
        aosDelay: 100,
    },
    {
        id:2,
        img: Img2,
        name: "Standard Class",
        description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, erat ut ultricies.",
        price: 'Rs.5000/Day',
        aosDelay: 100,
    },
    {
        id:3,
        img: Img2,
        name: "Business Class",
        description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, erat ut ultricies.",
        price: 'Rs.5000/Day',
        aosDelay: 100,
    },
]

const Features = () => {
  return (
    <div className='py-10 bg-white dark:bg-dark text-black 
    dark:text-white'>
        <div className='container'>
            {/* Header title section */}
            <div data-aos='fade-up' className='text-center mb-20'>
                <h1 className='text-4xl font-bold text-gray-800
                dark:text-white'>
                Choose Best car
                </h1>
            </div>
            {/* Best Car Card section */}
            <div className='grid grid-cols-1 gap-14 sm:grid-cols-2
            md:grid-cols-3 place-items-center'>
                {ServicesData.map(({ id, img, name, description,price, aosDelay}) => {
                    return(
                        <div 
                         key={id}
                         data-aos='fade-up'
                         data-aos-delay={aosDelay}
                         className='group rounded-2xl bg-white
                         dark:bg-black hover:!bg-primary shadow-xl
                         dark:shadow-[0_4px_15px_rgba(255,255,255,0.3)]
                         duration-200 max-w-[300px] relative'>
                        {/* Image section */}
                            <div className='h-[110px]'>
                                <img 
                                 src={img} 
                                 alt=''
                                 className='max-w-[280px] block mx-auto
                                 sd:mx-0 w-full h-full
                                 transform -translate-y-10
                                 group-hover:scale-110
                                 group-hover:translate-x-4 duration-300'
                                 />
                            </div>
                        {/* Text section */}
                        <div className='p-4 text-center space-y-4'>
                            <h1 className='text-xl font-bold'>{name}</h1>
                            <p className='text-gray-500
                            group-hover:text-black duration-300 text-sm
                            line-clamp-2'>{description}</p>
                            <p className='text-primary text-2xl font-bold
                            group-hover:text-black'>
                                {price}
                            </p>
                            <button className='bg-black text-white px-2 py-2 rounded-lg
                            '>Read More</button>
                        </div>
                        </div>
                    );
                })

                }
            </div>
        </div>
    </div>
  )
}

export default Features;
