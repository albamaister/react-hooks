import React, { useRef } from 'react';
import './focusScream.css';

export const FocusScream = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus scream</h1>
            <input
                ref={inputRef}
                className='form-control'
                placeholder='Su nombre'
            />
            <button onClick={ handleClick } className='btn btn-outline-primary mt-5'>
                Focus
            </button>
        </div>
    )
}
