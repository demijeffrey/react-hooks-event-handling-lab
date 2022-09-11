// Code Keypad Component Here
import React from 'react'
import ReactDOM from 'react-dom';

function Keypad (){
    function handleChange() {
        console.log('Entering password...')
    }

    return (
        <div>
            <input onChange={handleChange} type="password" />
        </div>
    )
}

export default Keypad;