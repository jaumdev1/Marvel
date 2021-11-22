import React from 'react';
import './styles.scss';
import logoImg  from '../../assets/marvel.svg';
import { useEffect, useState } from 'react';
import{ VscSearch, VscHeart } from 'react-icons/vsc'


import {Link} from 'react-router-dom'
import { api } from '../../services/api';

function Header() {

    

   
   
      
    
   
    return (
        
       <header>
          <Link  to="/">
           <img src={logoImg} className="logoImg" alt="logoMarvel"/>
           </Link>       
          
        
         
           <Link to="/listHeros">
          <button className="buttonList"> 
           <VscHeart className="iconHeart" size="24"/>
            heros fav
          </button>
          </Link>
       </header>
    
    )
  }
    
  export default Header
  