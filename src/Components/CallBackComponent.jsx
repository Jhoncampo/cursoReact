import React, { useCallback, useState } from 'react'
import { Increment } from './Increment'

export const CallBackComponent = () => {

    const [counter, setCounter] = useState(0)

    const incrementParent = useCallback((val) => {
        setCounter(counter => counter + val)
    }, [])

    return (
        <>
            <h1>Contador: {counter}</h1>
            <Increment increment={incrementParent} ></Increment>
        </>
    )
}
