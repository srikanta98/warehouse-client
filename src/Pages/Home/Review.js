import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mb-10">
            <div className="card-body">
               
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt=""/>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl'>{review.name}</h2>
                        <p>{review.location}</p>
                        <p>{review.review}</p>
                        <p>Rating:{review.ratings}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Review;