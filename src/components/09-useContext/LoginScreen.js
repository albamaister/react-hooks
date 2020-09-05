import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    const {setUser} = useContext(UserContext);
    const user = {
        id: 1234,
        name: 'andreseses'
    }
    return (
        <div>
             <h1>LoginScreen</h1>
             <button onClick={() => setUser(user)} className='btn btn-primary'>Login</button>
        </div>
    )
}
