
import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

 import Home from './pages/Home'
 import Header from './components/Header'
 import ListHeros from './pages/ListHeros'
 import HeroInfo from './pages/HeroInfo'
 const Routes = () =>{
     return(
       
     <BrowserRouter>
        <Header/>
        <Switch>
        <Route exact path="/"> <Home/> </Route>
        <Route exact path="/heroInfo/:id"> <HeroInfo/> </Route>
        <Route exact path="/listHeros"> <ListHeros/> </Route>
         
        </Switch>
        
     </BrowserRouter>
     )
 }

 export default Routes;