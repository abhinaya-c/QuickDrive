import React from 'react'
import whitecar from '../../assets/whitecar.png'
import city from '../../assets/city.jpg'

const bgstyle = {
  backgroundImage: `url(${city})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '520px',
  width: '100vw',
};

const Home = () => {
  return (
    <div style={bgstyle}>
      <div className='dark:bg-black/50 bg-white/50
      backdrop-blur-sm dark:text-white duration-300 h-[520px]
      flex'>
        <div className='container grid grid-cols-1
        place-items-center'>
        {/* text content section */}
          <div className='text-center space-y-5 py-14'>
            <p 
              data-aos='fade-up'
              className='text-primary text-3xl
              font-semibold uppercase'
            >
              Reserve Your Car Today
            </p>
            <h1
              data-aos='fade-up'
              data-aos-delay='600'
              className='tect-4xl md:text-6xl font-bold'
            >
            + 977 9876543210
            </h1>
            <p
            data-aos='fade-up'
            data-aos-delay='1000'
            className='tracking-[8px] text-base sm:text-xl
            font-semibold'
            >
            www.yourdomain.com
            </p>
          </div>
          {/* Image section */}
          <div data-aos='zoom-in-right'
            data-aos-duration='1000'>
            <img src={whitecar} 
              alt='yellowcab'
              className='max-h-[360px] sm:scale-125
              translate-y-10 sm:translate-y-0'
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home;
