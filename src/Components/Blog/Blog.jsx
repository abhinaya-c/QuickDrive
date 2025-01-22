import React from 'react'
import Slider from 'react-slick'
import BgImage from '../../assets/Blog.png'

const bgStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: "no-repeat",
    // minHeight: "520px",
    // width: '100vw',
}

const BlogData = [
    {
        id: 1,
        name: 'Dilshad',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia .",
        img: "https://img.freepik.com/free-photo/positive-male-youngster-with-curly-hair_176532-8174.jpg?ga=GA1.1.1880888619.1737476052&semt=ais_hybrid"
    },
    {
        id: 2,
        name: 'Mugal',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia .",
        img: "https://img.freepik.com/free-photo/portrait-handsome-bearded-man-with-glasses-posing-white-wall_114579-47365.jpg?ga=GA1.1.1880888619.1737476052&semt=ais_incoming"
    },
    {
        id: 3,
        name: 'Badshah',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia .",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjsdrJhuv3FcZmEE9MHYjIaJ5DOxSIQ39BWg&s"
    },
    {
        id: 4,
        name: 'Kumar',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia .",
        img: "https://t4.ftcdn.net/jpg/06/78/09/75/360_F_678097580_mgsNEISedI7fngOwIipYtEU0T6SN8qKv.jpg"
    },

]

const Blog = () => {

    // Slider Config
    const settings={
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        caseEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    // infinite: true,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // infinite: true,
                },
            },   
        ]
    }

    return (
    <div style={bgStyle}>
      <div className='bg-white/80 dark:bg-gray-800/90 py-14
      dark:text-white'>
        <div className='container'>
            {/* Header section */}
            <div data-aos= 'fade-up' className='text-center mb-10'>
                <h1 className='text-4xl font-bold'>Blogs</h1>
            </div>

            {/* Blogs Cards section */}
            <div data-aos='zoom-in'>
                <Slider {...settings}>
                    {BlogData.map(({id, name, text, img}) => {
                        return(
                            <div key={id} className='my-6'>
                            <div className='flex flex-col gap-6 shadow-lg py-8
                            px-6 mx-4 rounded-3xl bg-white dark:bg-dark
                            relative'>
                                {/* Content section */}
                                <div className='flex flex-col items-center gap-4'>
                                    <p className='text-xs'>{text}</p>
                                </div>
                                {/* Image section */}
                                <div className='flex items-center gap-4'>
                                    <img 
                                     src={img}
                                     alt={name}
                                     className='rounded-full w-16 h-16' 
                                    />
                                    <div className='space-y-2'>
                                        <h1 className='text-xl font-bold text-black/60
                                        dark:text-primary font-cursive'>
                                            {name}
                                        </h1>
                                        <p className='text-sm font-bold text-black/45
                                        dark:text-white'>Developer</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blog;
