/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import RecepiesList from "../../component/RecepiesList";
import { db } from "../../firebase/config";
import { useTheme } from "../../hook/useTheme";
import './Home.css';



export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const { mode } = useTheme();

  useEffect(() => {
    setIsPending(true); 

    const unsub = db.collection('recipeis').onSnapshot((querySnapshot) => {
      if(querySnapshot.empty){
        setError('No Recipes to loade')
        setIsPending(false)
      } else {
        let results = [];
        querySnapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
        })
        setData(results)
        setIsPending(false)
      }
    }, (err) => {
      console.log(err);
      setIsPending(false)
    }
    )

    return () => unsub() 
  }, [])
  return (
      <div className={`home ${mode}`}>
        <h2>All Recepies</h2>
        { isPending && <div className="loader">Loading...</div> }
        { error && <div className="error">{ error }</div>}
        { data && <RecepiesList recepies={data} />}
    </div>
  )
}
