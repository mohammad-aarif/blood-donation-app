import React from 'react';
import Slider from '../Slider/Slider';

const Home = () => {
    // const data ={
    //     name: 'sakil',
    //     group: 'a+',
    //     district: 'cumilla',
    //     area: 'sadar road'
    // }
    // fetch('https://evening-river-70665.herokuapp.com/donar',{
    //     method: "POST",
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
    return (
        <div>
            <h1>Home</h1>
            <h4>updated by arif
            </h4>
            <h2 className='text-4xl text-red-400'>Changed by Monib Bormon test branch</h2>
            <Slider />
        </div>
    );
};

export default Home;