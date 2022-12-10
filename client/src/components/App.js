import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import RecipeList from "../pages/RecipeList";
import NewRecipe from "../pages/NewRecipe";
import Footer from "./Footer";
import UpdateRecipe from "../pages/UpdateRecipe";

function App() {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // keep the user session {maintain login}
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
    {/* Adds Route path for Navigation */}
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            <NewRecipe user={user} />
          </Route>
          <Route path="/update/:id">
            <UpdateRecipe user={user} recipes={recipes} setRecipes={setRecipes}/>
          </Route>
          <Route path="/">
            <RecipeList search={ search } searchChange={setSearch} recipes={recipes} setRecipes={setRecipes}/>
          </Route>
        </Switch>
        <Footer />
      </main>
    </>
  );
}

export default App;
