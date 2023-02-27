import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase/config';
import './Create.css' 

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIng, setNewIng] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingInput = useRef(null)

  const navigate = useNavigate()


  const saveRecipe = async (e) => {
    e.preventDefault();
    const doc = ({ title, ingredients, method, cookingTime: cookingTime + ' minutes'})
    try {
      await db.collection('recipeis').add(doc)
      navigate('/')
    } catch (err) {
      console.log(err);
    }
}

const addIng = (e) => {
  e.preventDefault();
  const ing = newIng.trim();

  if(ing && !ingredients.includes(ing)){
    setIngredients( prevIng => [...prevIng, ing])
  };
  setNewIng('');
  ingInput.current.focus();
}

  return (
    <div className='create'>
      <h1 className='page-title'>Create A New Recipe</h1>
      
      <form onSubmit={saveRecipe}>
      <label>
        <span>Recipe Title:</span>
        <input type="text" onChange={ (e) => setTitle(e.target.value)} value={title} />
      </label>

      <label>
        <span>Recipes Ingredients</span>
        <div className='ing'>
        <input type="text" onChange={ e => setNewIng(e.target.value)} value={ newIng } ref={ingInput} />
        <button onClick={addIng}>Add</button>
        </div>
      </label>
        <p>Current ingredients: {ingredients.map(i => <em key={i}>{i},</em>)} </p>

      <label>
        <span>Recipe Method:</span>
        <textarea type="text" onChange={ e => setMethod(e.target.value)} value={ method } />
      </label>

      <label>
        <span>Cooking Time</span>
        <input type="number" onChange={ e => setCookingTime(e.target.value)} value={ cookingTime } />
      </label>

      <button className="btn">save</button>
      </form>
    </div>
  )
}
