import {useState} from 'react'

export const useForm = ( initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    //const { userName, email, password } = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target

        setFormState({
            ...formState,
            [name]: value
        })
        
    }

    return {
        ...formState, //esto de colocar los  tres puntos lo hacemos para cuando en el fomularioComponet poder destructurar los tres valores inciales 
        formState,
        onInputChange
    }
}
