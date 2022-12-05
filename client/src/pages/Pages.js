import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Homepage from "./Homepage";
import LoginForm from "../components/LoginForm";
import NewRecipe from "./NewRecipe";
import React from 'react'
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

function Pages() {
  return (
    <div>
      <Router>
      <Navbar/>

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

      </Switch>


      <Footer/>
      </Router>
    </div>
  )
}

export default Pages