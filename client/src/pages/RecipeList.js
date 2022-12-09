import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
// import landing from "./landing.jpg";
import "../index.css"
// import NavBar from "../components/NavBar";

function RecipeList({ search }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes")
      .then((r) => r.json())
      .then(setRecipes);
  }, []);

  return (
    <>
      <Wrapper className="background">
      </Wrapper>
      <Wrapper>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Recipe key={recipe.id}>
              <Box>
                <img src={recipe.image_url} alt="Holder" />
                <h2>{recipe.title}</h2>
                <p>
                  <em>Time to Complete: {recipe.minutes_to_complete} minutes</em>
                  &nbsp;·&nbsp;
                  <cite>By {recipe.user.username}</cite>
                </p>
                <ReactMarkdown>{recipe.instructions}</ReactMarkdown>
                <Button as={Link} to="/update">
                  Edit
                </Button>
                <Button onClick={() => {
                  fetch(`/recipes/${recipe.id}`, {
                    method: "DELETE"
                  })
                    // .then((r) => r.json())
                    .then(() => {
                      setRecipes((prev) => prev.filter(reci => reci.id !== recipe.id))
                    })
                }}>Delete</Button>
              </Box>
            </Recipe>
          ))
        ) : (
          <>
            <h2>No Recipes Found</h2>
            <Button as={Link} to="/new">
              Make a New Recipe
            </Button>
          </>
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  max-width: 100vw;
  margin: 40px auto;
  display: flex;
  flex: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Recipe = styled.article`
  margin-bottom: 24px;
  max-width: 30%;
`;

export default RecipeList;
