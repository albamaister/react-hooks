import React from 'react';
import './multipleCustomHooks.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    const {data, loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
      
    const {author, quote} = (!!data && data[0]);    

    return (
        <div>
            <h1>Breakingbad Quotes</h1>
            { loading ? (
                <div className='alert alert-info text-center'>
                    Loading...
                </div>
                ) : (
                    <blockquote className='blockquote text-right'>
                        <p className='mb-0'>
                            {author}
                        </p>
                        <footer className='blockquote-footer'>{quote}</footer>
                    </blockquote>
                )
            }
            <button onClick={increment} className='btn btn-primary'> 
                Siguiente quote
            </button>
        </div>
    )
}
