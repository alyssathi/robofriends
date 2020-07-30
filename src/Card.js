import React from 'react';

const Card =(props)=>{
    return (
        <div className ='bg-light-green dib br3 grow ma2 bw2 shadow-5 tc'>
            <img src={`https://robohash.org/${props.id}`} className = 'w5 h5' alt='Profile'/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;