import React, { useEffect } from 'react'

export const Message = () => {
    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            console.log(e)
        })
        return () => {
        console.log('Componene desmontado');
        }
    }, [])
    return (
        <div>
            <h3>Mensaje</h3>
        </div>
    )
}
