import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import "../index.css"

function RecipeList({ searchChange, search, recipes, setRecipes }) {

  useEffect(() => {
    fetch("/recipes")
      .then((r) => r.json())
      .then(setRecipes);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Wrapper className="background">
        <input
          id="search"
          type="text"
          placeholder="Find a Recipe"
          onChange={(e) => searchChange(e.target.value)}
        />
      </Wrapper>
      <Wrapper>
        {recipes.length > 0 ? (
          recipes.filter(recipes => recipes.title.toLowerCase().includes(search)).map((recipe) => (
            <Recipe key={recipe.id}>
              <Box>
                {/* TODO: RESIZE IMAGE HOLDERS */}
                <img src={recipe.image_url} alt="Holder" style={{ width: 500, height: 500, objectFit: "cover" }} />
                <h2>{recipe.title}</h2>
                <p>
                  <em>Time to Complete: {recipe.minutes_to_complete} minutes</em>
                  &nbsp;·&nbsp;
                  <cite>By {recipe.user.username}</cite>
                </p>
                <ReactMarkdown>{recipe.instructions}</ReactMarkdown>
                {/* TODO: work on update */}
                  <Button as={Link} to={`/update/${recipe.id}`}>
                    Edit
                  </Button>
                  <gap id="gap"></gap>
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
