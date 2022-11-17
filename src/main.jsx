import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client'
const root = document.getElementById('root')
const rootReat = createRoot(root)

const useContador = () => {
  const [c, setC] = useState(0)
  const incrementar = () => setC(c + 1)
  const decrementar = () => setC(c - 1)
  const reset = () => setC(0)

  return {
    contador : c,
    incrementar,
    decrementar,
    reset
  }

const Post = ({ numero }) => {
    const [data, setData] = useState(null)
    const [c, setC] = useState(0)
    console.log("render")
    useEffect(() => {
        console.log("acceso a la base de datos", numero)
        fetch('https://jsonplaceholder.typicode.com/posts/${numero}')
            .then(response => response.json())
            .then(data => setData(data))
    })

    if (!data) return <div>
        cargando el post {numero}
        <hr></hr>
    </div>


    return <div>
        <button onClick={() => setC(c + 1)}>Sumar {c}</button>
        post {numero}
        {JSON.stringify(data)}
        <hr></hr>
    </div>
}
const App = () => {

  const { contador, incrementar, decrementar, reset } = useContador()
  return <div>
    {contador}
    <button onClick={() => incrementar()}>Incrementar</button>
    <button onClick={() => decrementar()}>Decrementar</button>
    <button onClick={() => reset()}>Reset</button>
  </div>
}

rootReat.render(
  <App>

  </App>
)
}



