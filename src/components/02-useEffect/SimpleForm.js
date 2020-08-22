import React, { useEffect, useState } from 'react';
import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect (() => {
        console.log('hey cambio en la rama 1!!')
    }, []);

    useEffect (() => {
        console.log('formState cambio')
    }, [formState]);

    useEffect (() => {
        console.log('email cambio')
    }, [email]);

    const handleinputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name] : target.value
        })
    }

    return (
        <>
            <h1>UseEfect</h1>
            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleinputChange}
                />
            </div>

            <div className='form-group'>
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='email@gmail.com'
                    autoComplete='off'
                    value={email}
                    onChange={handleinputChange}
                />
            </div>
        </>
    )
}
