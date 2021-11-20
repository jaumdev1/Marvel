import React from 'react';
import './styles.scss';
import{ VscHeart } from 'react-icons/vsc'
import {Link} from 'react-router-dom'
type Props =  {
  img:string;
  name: string;
  id: string;
}

function Hero(props:Props) {


    return (
     <div className='hero'id={props.id} >
       <Link className='containerhero' to={`/heroInfo/${props.id}`}>
         <div className='contentHero' id={props.id} >
         <img className='image' src={props.img} alt={props.name}/>
         <h4 className='name'>{props.name}</h4> 
         </div>
         </Link>
         <div className="contentLike">
            <button className="buttonLike"> 
              <VscHeart/> 
            </button>
            </div>
      </div>
     
       
    
    )
  }
    
  export default Hero
  