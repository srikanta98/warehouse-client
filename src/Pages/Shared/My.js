import React from 'react';
import me from '../../assets/images/plus.jpg'

const My = () => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl flex items-center mx-auto">
        <figure class="px-10 pt-10">
          <img src={me} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Name:Srikanta datta</h2>
          <h3>Email:dattasrikanta32@gmail.com</h3>
          <h3>Educational background:Hsc 2023 batch</h3>
          <h3> Technologies: I can work with Html,css,js,react,bootsrap,tailwind,firebase,node js,mongodb</h3>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <a href="https://heuristic-archimedes-741732.netlify.app/">First project</a>
          <a href="https://serviceproviderassi.netlify.app/">Second project</a>
          <a href="https://jolly-empanada-be2cee.netlify.app/">Third project</a>
          
        </div>
      </div>
    );
};

export default My;