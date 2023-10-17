import React from 'react'
import { useForm } from '../Hooks/useForm'

const initialState = [{
    id: 1,
    tarea: 'Explicar Reducers',
    finalizada: false
}]

const nuevaTarea = {
    id: 2,
    tarea: 'Explicar useReducer',
    finalizada: false
}

const agregarTarea = {
    type: '[TAREAS] Agregar Tarea',
    payload: nuevaTarea
}

const tareaReducer = (state = initialState, action = {}) => {
    if (action.type === '[TAREAS] Agregar Tarea') {
        return [...state, action.payload]
    }
}

console.log(tareaReducer(initialState, agregarTarea))




export const TaskList = () => {

    const { tarea, formState, onInputChange, } = useForm({ tarea: "" })
    const agregarTareaForm = (e) => {
        e.preventDefault()
        console.log(formState)
    }

    return (
        <>
            <form onSubmit={agregarTareaForm}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="tarea"
                        name='tarea'
                        value={tarea}
                        placeholder="Ingrese tarea"
                        onChange={onInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
