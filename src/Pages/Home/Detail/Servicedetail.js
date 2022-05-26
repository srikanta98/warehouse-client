import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { async } from '@firebase/util';
const axios = require('axios');


const Servicedetail = () => {

    const { inventoryId } = useParams();
    const [user] = useAuthState(auth);

    const url = `https://tranquil-taiga-14357.herokuapp.com/inventory/${inventoryId}`
    const [inventoryes, setinventoryes] = useState({});

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setinventoryes(data);
                setorder(data.minOrder)
            });
    }, [url, inventoryes])

    const [order, setorder] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            user: event.target.user.value,
            email: event.target.email.value,
            product: event.target.product.value,
            quantity: event.target.quantityField.value,
            phone: event.target.phone.value,
            price: inventoryes.price,
            address: event.target.address.value,

        }
        axios.post('https://tranquil-taiga-14357.herokuapp.com/book',
            data
        )
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    // let quantityError;
    // if (inventoryes.quantity > inventoryes.minOrder) {
    //     quantityError = (
    //         <div>
    //             <p>{`you cant order more ${inventoryes.minOrder}`}</p>
    //         </div>
    //     )
    // } else if (inventoryes.quantity < inventoryes.minOrder) {
    //     quantityError = (
    //         <div>
    //             <p>{`you cant order more ${inventoryes.minOrder}`}</p>
    //         </div>
    //     )
    // }

    return (
        <div className="min-h-full ">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                <div>
                    <div className="card card-side border border-primary rounded-lg mt-5 mx-12 my-5  lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                        <figure><img src={inventoryes.img} alt="Shoes" />
                        </figure>
                        <div className="card-body text-left">
                            <h2 className="card-title">Name:{inventoryes.name}</h2>
                            <p>Price:{inventoryes.price}</p>
                            <p>Available quantity:{inventoryes.quantity}</p>
                            <p>Minimum quantity:{inventoryes.minQuantity}</p>
                            <p>{inventoryes.description}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <form onSubmit={handleSubmit} class="w-full max-w-lg bg-white p-12 border rounded-lg mx-auto">
                        <div className='flex flex-wrap -mx-3 mb-6'>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">Name</label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" name='user' value={user.displayName} />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">Email</label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="email" disabled name='email' value={user.email} />
                            </div>
                        </div>
                        <div className='flex flex-wrap -mx-3 mb-6'>
                            <div className="w-full  px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">Product</label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" name='product' value={inventoryes.name} />
                            </div>
                        </div>


                        <div className="flex flex-wrap -mx-3 mb-6 md:mb-0">
                            <div className="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name
                            "></label>
                                <div className={`flex flex-row`}>
                                    <button
                                        className='text-white bg-primary p-1 font-bold text-2xl'
                                        onClick={async (event) => {
                                            event.preventDefault();
                                            setorder(order + 1);
                                        }}>
                                      +
                                    </button>
                                    <input
                                        class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                        name='quantityField'
                                        id='quantity'
                                        value={order}

                                        type="text"
                                        onChange={async (event) => {
                                            await setorder(parseInt(event.target.value))
                                        }} />
                                    <button disabled={inventoryes.minOrder > order}
                                    onClick={
                                        (event) =>{
                                            event.preventDefault();
                                            setorder(parseInt(order -1))
                                        }
                                    } className="text-white bg-primary p-2 font-bold text-2xl"
                                    >

                                    -</button>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <lebel class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">Phone</lebel>
                                <input 
                                class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                name='phone'
                                id='grid-zip'
                                

                               
                                type="text" />
                            </div>

                        </div>


                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">Address</label>
                            <input
                            class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            name='address'
                            id='grid-zip'
                            type="text" />
                        </div>

                        <button className='btn bg-accent text-white border border-primary mt-5' type='submit'>Order now</button>
                    </form>
                </div>
               
            </div>
        </div>
    );
};

export default Servicedetail;