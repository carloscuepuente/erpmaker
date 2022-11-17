import { useState } from 'react'

export default function useToggle(initialVal = false) {

    // usamos el patron de useState de desestrucuturar lo que retorna el useState de react
    // los nombres pueden ser como queramos, lo que tenemos que recordar es que el primero es la referencia al state que estamos creando y el segundo la funcion para modificarlo
    const [state, setState] = useState(initialVal)

    // definimos la funcion que va a cambiar el state
    const toggle = () => {
        setState(!state)
    }

    // aqui retornamos el state y la funcion para cambiar el state en la covencion de hooks que es en un array
    return (
        [state, toggle]
    )
}