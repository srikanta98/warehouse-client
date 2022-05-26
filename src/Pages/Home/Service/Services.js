import React, { useEffect, useState } from 'react';
import '../Service/Service.css'
import Service from './Service';

const Services = () => {
    const [inventoryes, setinventoryes] = useState([]);
    // const limited = inventoryes.slice().reverse();
 

    useEffect( ()=>{
        fetch('https://tranquil-taiga-14357.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setinventoryes(data));
    }, [])
    return (
        <div id='services' className='max-w-7xl mx-auto px-12'>
            <h1 className='text-center font-bold text-sky-500 font-mono text-4xl mb-6'>This is services</h1>
            <div className="services grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
               inventoryes.slice(inventoryes.length-6,inventoryes.length).reverse().map(inventory => <Service
                    key={inventory._id}
                    inventory={inventory}
                >
                </Service>)
            }
           
            </div>
        </div>
    );
};

export default Services;