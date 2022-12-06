import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Homepage from "./Homepage";
import Login from "./Login";
import LoginForm from "../components/LoginForm";
import NewRecipe from "./NewRecipe";
import SignUpForm from "../components/SignUpForm";
import React from 'react'
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { useState , useEffect } from "react";

function Pages() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
    }, []);

    if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <Router>
      <Navbar user={ user } setUser={ setUser }/>

      <Switch>
        <Route path='/' component={ Homepage } exact>
         <Homepage/> 
        </Route>
        <Route path='/log-in' component={ LoginForm } exact>
         <LoginForm/> 
        </Route>
        <Route path='/new-recipe' component={ NewRecipe } exact>
         <NewRecipe/> 
        </Route>
        <Route path='/sign-up' component={ SignUpForm } exact>
          <SignUpForm/>
        </Route>

      </Switch>


      <Footer/>

      </Router>
    </div>
  )
}

export default Pages