import React from 'react';
import './styles.scss';
import{ VscHeart } from 'react-icons/vsc'
import {Link} from 'react-router-dom'
type SerieProps={
  id:string;
  title:string;
  thumbnail:{
    extension: string;
     path: string;
  }
}
function Serie(props:SerieProps) {


    return (
     <div className='serie'id={props.id} >
       <div className='containerSerie'>
      
         <h4 className='nameSerie'>{props.title}</h4> 
         <img className='imageSerie' src={props.thumbnail.path + '.' + props.thumbnail.extension} alt={props.title}/>
        
         
         </div>
        
      </div>
     
       
    
    )
  }
    
  export default Serie
  