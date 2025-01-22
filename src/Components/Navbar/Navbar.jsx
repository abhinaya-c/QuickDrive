import React from 'react'
import DarkMode from './DarkMode';
// import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi';
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi';


export const Navlinks = [
  {
    id: 1,
    name: 'Home',
    link: '/Home',
  },
  {
    id: 2,
    name: 'About',
    link: '/About',
  },
  {
    id: 3,
    name: 'Features',
    link: '/Features',
  },
  {
    id: 4,
    name: 'Blog',
    link: '/Blog',
  },
  {
    id: 5,
    name: 'Contact',
    link: '/Contact',
  },

]

export const Navbar = () => {
  return (
    <nav className='relative z-10 shadow-md w-full 
    dark:bg-black dark:text-white duration-300'>
      <div className='container py-2 md:py-0'>
        <div className='flex items-center justify-between'>
        {/* logo section */}
            <a href='/'className='text-3xl font-bold'>
                <span>Quick</span>
                <span className='text-primary '>Drive</span>
            </a>

        {/* Desktop Menu Section */}
        <div className='hidden md:block'>
          <ul className='flex items-center gap-6'>
            {Navlinks.map(({ id, name, link}) => {
              return(
                <li key={id} className='py-4'>
                  <a
                  href={link}
                  className={`text-lg font-medium
                  text-black dark:text-white py-2 px-4
                  rounded-full hover:bg-primary
                  duration-300`}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
            {/* Darkmode feature */}
            <DarkMode />
          </ul>
        </div>
        
        {/* Mobile Menu Section */}
        {/* <div>
          <DarkMode/>
          {
            <HiMenuAlt1/>
          }
        </div> */}
        </div>
      </div> 
    </nav>
  );
}

