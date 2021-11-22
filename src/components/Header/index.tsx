import React from 'react';
import './styles.scss';
import logoImg  from '../../assets/marvel.svg';

import{ VscHeart } from 'react-icons/vsc'

import Banner from '../../assets/banner.jpg'
import {Link} from 'react-router-dom'


function Header() {

    

   
   
      
    
   
    return (
        
       <header>
         <img className="banner" src={Banner}/>
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
  