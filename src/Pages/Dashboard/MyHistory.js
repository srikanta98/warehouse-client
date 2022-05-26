import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
// import me from '../../assets/icons/phone.svg'

const MyHistory = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    return (
        <div class="card w-96 bg-base-100 shadow-xl flex items-center mx-auto">
        <figure class="px-10 pt-10">
          <img src={user?.photoURL} alt="Image" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Name:{user.displayName}</h2>
          <h3>Email:{user.email}</h3>
          <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' placeholder='Linkdin Profile' type="text" {...register("minQuantity")} />
          <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' placeholder='Education' type="text" {...register("price")} />
          <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' placeholder='Phone Number' type="text" {...register("price")} />
          <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' placeholder='Location' type="text" {...register("price")} />
                
         <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' type="submit" value="Submit" />
          
        </div>
      </div>
    );
};

export default MyHistory;