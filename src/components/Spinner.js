import React from 'react';
import spinner from '../../public/svg-loaders/tail-spin.svg';

export default() => {
    return (
        <div className="spinner">
            <img 
                src={spinner} 
                alt={'Loading...'}
                style={{ width: '50px', margin: '40px auto', display: 'block' }} 
                />
        </div>
    )   
}