import React from 'react'

export const Increment = React.memo(({ increment }) => {

console.log("Me estoy redibujando")

    return (
        <button onClick={()=> increment(10)} className='btn btn-primary'>+1</button>
    )
})
