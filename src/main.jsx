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




