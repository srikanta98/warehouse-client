import React from 'react';

import Contact from './Contact';
import Footer from '../Shared/Footer';



import Testimonials from './Testimonials';
import Banner from './Banner/Banner';
import Services from './Service/Services';
import Stat from './Stat/Stat';

const Home = () => {
    return (
        <div className='font-mono'>
            <Banner></Banner>
           
            <Services></Services>
            
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Stat></Stat>
            <Footer></Footer>
        </div>
    );
};

export default Home;