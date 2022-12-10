// TODO: FIX PATCH
import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useParams } from "react-router-dom"
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";

function UpdateRecipe({recipes}) {
  const {id} = useParams() //useParams for prop drilling from App component so as to use the id
  const [title, setTitle] = useState("");
  const [minutesToComplete, setMinutesToComplete] = useState("");
  const [instructions, setInstructions] = useState();
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("")
  const history = useHistory();
  const updatedRecipe = recipes[parseInt(id)-1]

  // This displays on the console the object.id while updating
  console.log(recipes[parseInt(id)-1])

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch(`/recipes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        instructions,
        minutes_to_complete: minutesToComplete,
        image_url: imageUrl
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <h2>Update Recipe</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              placeholder={updatedRecipe.title}
              value={title}
              required={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="minutesToComplete">Minutes to complete</Label>
            <Input
              type="number"
              id="minutesToComplete"
              placeholder={updatedRecipe.minutes_to_complete}
              required={true}
              value={minutesToComplete}
              onChange={(e) => setMinutesToComplete(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="instructions">Instructions</Label>
            <Textarea
              id="instructions"
              rows="10"
              placeholder={updatedRecipe.instructions}
              required={true}
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="imageUrl">Recipe Image</Label>
            <Input
              type="text"
              id="imageUrl"
              placeholder={updatedRecipe.image_url}
              required={true}
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Changes"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default UpdateRecipe;
