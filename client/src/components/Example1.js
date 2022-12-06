import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {Splide,SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Button } from "../styles";

function Example1() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes")
      .then((r) => r.json())
      .then(setRecipes);
  }, []);

  return (
    <Wrapper>
      <h3>Recipe</h3>

        <Splide options={{
          perPage: 4,
          arrows:false,
          pagination:false,
          drag:'free',
          gap:'3rem'
        }}>

      {recipes.length > 0 ? (
        recipes.map((recipe)=>
        (
          <SplideSlide key={recipe.id}>
            <Card>
                <p>{recipe.title}</p>
                <img src="https://thumbs.dreamstime.com/b/balanced-diet-food-background-balanced-diet-food-background-organic-food-healthy-nutrition-superfoods-meat-fish-legumes-nuts-121936796.jpg" alt="example"/>
                <Gradient/>
            </Card>
          </SplideSlide>
        ))
      ) : (
        <>
          <h2>No Recipes Found</h2>
          <Button as={Link} to="/new">
            Make a New Recipe
          </Button>
        </>
      )} 
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 15rem;
  margin: 50px auto;
  max-width:80%;
`;

const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position:relative;
  

  img{
    border-radius: 2rem;
    position: absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
  }
  p{
    position: absolute;
    z-index: 10;
    left:70%;
    bottom:0%;
    transform: translate(-50%, 0%);
    color:white;
    width:100%;
    text-align:centre;
    font-weight:600;
    font-size: 1rem; 
    height: 15%;
    display:flex;
    justify-content: centre;
    align-items:centre;
  }
`;

const Gradient = styled.div`
  z-index:3;
  position:absolute;
  width:100%;
  height:100%;
  background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))
`

export default Example1;