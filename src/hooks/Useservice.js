import React, { useEffect, useState } from 'react';

const Useservice = (inventoryId) => {
    const [inventoryes, setinventoryes] = useState({});

    useEffect( () =>{
        //single gula dekhabe
         const url = `https://salty-plains-42346.herokuapp.com/service/${inventoryId}`
         fetch(url)
         .then(res => res.json())
         .then(data => setinventoryes(data));
    },[inventoryId])
    return [inventoryes]
    
};

export default Useservice;