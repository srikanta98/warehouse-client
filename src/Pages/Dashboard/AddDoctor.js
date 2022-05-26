import React from 'react';
import { useForm } from "react-hook-form";


const AddDoctor = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);


        const url = `https://tranquil-taiga-14357.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });


    };
    return (
        <div>
            <h2 className='text-gray-700'>Please add a review</h2>

            <form className='w-full  bg-white rounded-lg mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' placeholder='Description' {...register("description")} />
                <textarea className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' placeholder='Quantity' {...register("quantity")} />
                
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' placeholder='Img' type="text" {...register("img")} />
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' placeholder='Minquantity' type="text" {...register("minQuantity")} />
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' placeholder='Price' type="text" {...register("price")} />
                
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' type="submit" value="Add Service" />
            </form>


        </div>
    );
};

export default AddDoctor;