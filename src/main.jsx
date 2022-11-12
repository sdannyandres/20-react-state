import {useState} from 'react';
import {createRoot} from 'react-dom/client'

const root = document.getElementById('root')
const rootReat =createRoot(root)

const Likes = (props) => {
    const [likes, setLikes] = useState(0)
    console.log('render',likes)
    
    const increment = () => {
        setLikes  (likes + 1);
        console.log(likes)
}

   return <button onClick={() => increment ()}>Likes{likes}</button>

}
rootReat.render(
  <div>
    <Likes/>
  </div>
)

