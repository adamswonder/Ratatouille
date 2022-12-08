import React from 'react';
import { useEffect, useState } from "react";
import Example1 from '../components/Example1';
import RecipeIndex from '../components/RecipeIndex';



function Homepage() {
  const [recipes, setRecipes] = useState([]);
  const [ url, setUrl ] = useState("/recipes")

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then(setRecipes);
  }, [url]);

  const setIndex =(alpha)=>{
      setUrl(`/recipes/1`)
  }


  return (
   <div className='homepage'>
    <div className='search' >
        <h1 className='head'>Search your food recipe </h1>
        <input className='search-bar' type="text"/>
    </div >
    <div className='meal-container'>
      <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
     </div>
     <Example1 recipes={ recipes }/>
     
     
   </div>
  )
}

export default Homepage