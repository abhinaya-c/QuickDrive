import React from 'react'
import{
    FaAndroid,
    FaAppStoreIos,
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaMapMarker,
    FaMousePointer,
    FaTwitter,
} from 'react-icons/fa';
import { MdEmail, MdCall } from 'react-icons/md'


const Footer = () => {
  return (
    <div className='bg-white text-black
    dark:bg-black dark:text-white'>
    {/* Upper Section Banner  */}
        <div className='bg-primary'>
            <div className='container text-black py-10 lg:py-14
            text-center text-2xl font-bold space-y-4'>
                <p className='uppercase'>we are ready to take your call 24 hours, 7 days!</p>
                <h1 className='text-3xl md:text-5xl
                font-bold'>+977 9876543210</h1>
            </div>
        </div>

         {/* Bottom footer section */}
         <div  className='container grid grid-cols-1 sm:grid-cols-2
         md:grid-cols-3 gap-10 md:gap-20 py-12'>
            {/* first col section */}
            <div className='space-y-6'>
                {/* heading */}
                <h1 className='text-2xl py-3
                font-bold uppercase border-b-8
                border-primary'>About Quick Drive</h1>
                <p>
                    Lorem ipsum Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. 
                    Nullam vitae ex ut nisi faucibus feugiat. 
                    Ut nec lorem id felis fringilla auctor.
                </p>
                {/* Social Links */}
                <div className='flex items-center
                text-primary gap-3 text-2xl'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaGoogle />
                    <FaTwitter />
                </div>
            </div>
            {/* second col section */}
            <div className='space-y-6'>
                <h1 className='text-2xl py-3
                 font-bold uppercase border-b-8
                 border-primary'>
                Contact
                </h1>
                <div className='flex items-center
                gap-4'>
                    <FaMapMarker /> Lalitpur, Kathmandu
                </div>
                <div className='flex items-center
                gap-4'>
                    <MdCall />+977 9876543210
                </div>
                <div className='flex items-center
                gap-4'>
                    <MdEmail />nGqo6@example.com
                </div>
                <div className='flex items-center
                gap-4'>
                    <FaMousePointer/> www.quickdrive.com
                </div>
            </div>
         </div>
         <p className='text-center py-4 text-sm'>Copyright &copy; 2025. All rights reserved.</p>

    </div>

    
  )
}

export default Footer
