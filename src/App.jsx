import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import css files
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Features from './Components/Features/Features.jsx';
import About from './Components/About/About.jsx';
import Blog from './Components/Blog/Blog.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Footer from './Components/Footer/Footer.jsx';


const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    Aos.refresh();
  }, [])
  return (
    <Router>
      <Routes>
        {/* Main Layout Wrapper */}
        <Route path='/' element={<Layout />}>
          {/* Root Route: Show all content on the root page */}
          <Route
            index
            element={
              <>
                <Home />
                <Contact />
                <Features />
                <About />
                <Blog />
              </>
            }
          />
          {/* Individual routes for each page */}
          <Route path='Home' element={<Home />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='Features' element={<Features />} />
          <Route path='About' element={<About />} />
          <Route path='Blog' element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;



// <div className='dark:bg-dark dark:text-white'>
//       <Navbar />
//       <Home />
//       <Contact />
//       <Features />
//       <About />
//       <Blog />
//       <Footer />
//     </div>