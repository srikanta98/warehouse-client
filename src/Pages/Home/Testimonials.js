import React, { useEffect, useState } from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonials = () => {
    const [reviews, setreview] = useState([]);
    
 

    useEffect( ()=>{
        fetch('https://tranquil-taiga-14357.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setreview(data));
    }, [])
    return (
        <section className='my-28 max-w-7xl mx-auto px-12'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Reviews</h4>
                    <h2 className='text-3xl'>What our Customers say</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;