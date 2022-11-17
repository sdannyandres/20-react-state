import {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client'
const root = document.getElementById('root')
const rootReat =createRoot(root)

const Post = ({numero}) => {
    const [data, setData] = useState(null)
    const [c, setC] = useState(0)    
    console.log("render")
    usseEffect (() => {
        console.log("acceso a la base de datos")
        fetch ('https://jsonplaceholder.typicode.com/posts/${numero}')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])
    
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
 

