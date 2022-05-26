import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ inventory }) => {
    const { _id, quantity, name, img, minQuantity, suppliar, description, price } = inventory;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className="card lg:max-w-lg copy ">
            <figure className="px-2 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-64" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name:{name}</h2>
                <p>Price:{price}</p>
                <p>Available quantity:{quantity}</p>
                <p>Minimum quantity:{minQuantity}</p>
                <p>{description}</p>
                <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary btn-pop'>Update</button>
            </div>
        </div>

    );
};

export default Service;