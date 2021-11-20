import React from 'react';
import './styles.scss';
import logoImg  from '../../assets/marvel.svg';
import { useEffect, useState } from 'react';
import{ VscSearch, VscHeart } from 'react-icons/vsc'


import {Link} from 'react-router-dom'

function Header() {
    const [search, setSearch] = useState("")

    return (
        
       <header>
          <Link  to="/">
           <img src={logoImg} className="logoImg" alt="logoMarvel"/>
           </Link>       
          
        
          <div className="search">
           <input id='inputSearch' type="text" className="inputSearch" placeholder="Search" value={search} onChange={(e)=> setSearch(e.target.value)}/>
           <VscSearch className="iconSearch" size="24"/>
          </div>
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
  