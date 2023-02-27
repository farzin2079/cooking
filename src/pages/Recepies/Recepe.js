import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/config'
import { useTheme } from '../../hook/useTheme'
import './Recepe.css'

export default function Recepe() {
  const {id} = useParams();
  const { mode } = useTheme()

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true); 

    db.collection('recipeis').doc(id).get().then((result) => {
        if(result.exists) {
          setData(result.data());
          setIsPending(false);
    } else {
    setError('Recipe not found');
      setIsPending(false);
    }
    }).catch((err) => {
     console.log(err.message); 
    });
  }, [id])

  return (
    <div className={`recepie ${mode}`}>
        { isPending && <div className="loading">Loading...</div> }
        { error && <div className="error">{ error }</div> }
        { data && 
          <div className="card" key={data.id}>
            <h2>{ data.title }</h2>
            <h3>{data.cookingTime} to cooke</h3>
            <ul>{data.ingredients.map(ing => ( <li key={ing}> { ing }</li> ))}</ul>
            <p className='method'>{ data.method }</p>
          </div>
        }
    </div>
  )
}
