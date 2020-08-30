import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
    console.log('Me volvi a genarar');
    return (

            <button onClick={() => {increment(5)}} className='btn btn-primary'>
                Incrementar
            </button>
    )
})
