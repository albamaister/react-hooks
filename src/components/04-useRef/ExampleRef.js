import React, { useState, useRef, useEffect } from 'react';
import './focusScream.css';
import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks';

export const ExampleRef = () => {

    const [show, setShow] = useState(false);    

    return (
        <div>
            <h1>ExampleRef</h1>  
            { show && <MultipleCustomHooks/> }
            <button onClick={ () => {setShow(!show)} } className='btn btn-primary mt-5'>
                Show/Hide
            </button>
        </div>
    )
}
