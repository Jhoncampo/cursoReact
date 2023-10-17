import { useMemo, useState } from "react"

export const CalculosPesados = () => {

  const [listaNumeros, setListaNumeros] = useState([1,2,3,4,5])
  const [show, setShow] = useState(true)

  const getLista = (listaNumeros) =>  useMemo(()=>{
      console.log("Calculando")
      return listaNumeros.reduce((a,b)=> a*b)
  },[listaNumeros])

  const agregarNumero = () =>{
    setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length-1] + 1])
    console.log(listaNumeros)
  }

  return (
    <>
    <h1>Calculo</h1>
    <p>{getLista(listaNumeros)}</p>

    <button className="btn btn-primary" onClick={ () => setShow(!show) }>{ show ? "show" : "hide"}</button>
    <button className="btn btn-primary" onClick={() => agregarNumero()}> Agregar número</button>
    </>
  )
}
