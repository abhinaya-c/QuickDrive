import React from 'react'
import BgImage from '../../assets/girl.jpg'
import BannerCard from "./BannerCard.jsx";
import { SlStar } from 'react-icons/sl';


const bgStyle ={
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '520px',
    width: '100vw',
}


const About = () => {
  return (
    <div style={bgStyle}>
      <div className='text-white bg-black/80 min-h-[530px] flex items-center py-10'>
        <div className='container'>
          {/* header title section */}
          <div className='space-y-3 uppercase text-center py-14'>
            <p data-aos='fade-up' className='text-primary text-2xl font-semibold'>
              We do Best
            </p>
            <h1 
             data-aos='fade-up'
             data-aos-delay='300'
             className='text-4xl font-bold'>Thank you Wish</h1>
          </div>



          {/* Card Selection  */}
          <div data-aos='fade-up' className='grid grid-cols-1 sm:grid-cols-2
          gap-8'>
            <div className='space-y-8'>
              <BannerCard 
               title={'Fast Booking'}
               description={
                 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, erat ut ultricies.'
               }
               icon={<SlStar/>}
              />
              <BannerCard 
               title={'Fast Booking'}
               description={
                 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, erat ut ultricies.'
               }
               icon={<SlStar/>}
              />
            </div>
            <div className='space-y-8'>
              <BannerCard 
               title={'Fast Booking'}
               description={
                 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, erat ut ultricies.'
               }
               icon={<SlStar/>}
              />
              <BannerCard 
               title={'Fast Booking'}
               description={
                 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, erat ut ultricies.'
               }
               icon={<SlStar/>}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




export default About
