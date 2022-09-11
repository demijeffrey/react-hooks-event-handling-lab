// Code EyesOnMe Component Here
import React from 'react'
import ReactDOM from 'react-dom';

function EyesOnMe() {
    function focusEvent () {
        console.log('Good!')
    }
    function blurEvent() {
        console.log('Hey! Eyes on me!')
    }

    return (
        <button onFocus={focusEvent} onBlur={blurEvent}>Eyes on me</button>
    )
}

export default EyesOnMe