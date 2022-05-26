import React from 'react';
import '../Banner/Banner.css'
import chairi from '../../../assets/images/final1.jpg';
// import PrimaryButton from '../../Shared/PrimaryButton'

const Banner = () => {
    return (
        <div class="carousel d-block w-full mb-14 hi ">
            <div class="carousel-item">
                <img className='d-block w-100' src={chairi} alt="Pizza" />
            </div>
        </div>
    );
};

export default Banner;