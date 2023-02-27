import { Link } from 'react-router-dom'
import { useTheme } from '../hook/useTheme'
import Delete from '../assets/delete.svg'
import { db } from '../firebase/config'


import './RecepiesList.css'


export default function RecepiesList({ recepies }) {
  const { mode } = useTheme()
  
  const handelDelete = (id) => {
    db.collection('recipeis').doc(id).delete()
  }

  return (
    <div className='recipe-list'>
        {recepies.map(recepie => (
          <div className={`card ${mode}`} key={recepie.id}>
            <h3>{ recepie.title }</h3>
            <p>{ recepie.cookingTime }</p>
            <div>{recepie.method.substring(0,100) }...</div>
            <Link to={`/recepies/${recepie.id}`}>Let's cooke</Link>
            <img src={Delete} alt="Delete" className='delete' onClick={() => handelDelete(recepie.id)} />
          </div>
        ))}
    </div>
  )
}
