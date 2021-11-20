import React, { useEffect, useState } from 'react';
import {api} from '../../services/api'
import './styles.scss';
import { useParams } from 'react-router-dom'
import{ VscHeart } from 'react-icons/vsc'

type Hero = {

  id:string;
  name:string;
  description: string;
  thumbnail:{
    path:string;
    extension:string;
  }
  
}
interface ParamTypes {
  id: string;
}




function HeroInfo() {
  const{ id } = useParams<ParamTypes>();
  const [hero, setHero] = useState<Hero[]>([]);
  

  useEffect(()=>{
   
    async function loadHero(){
  
     const keyTimeStamp = '1637171720'
     const keyMd5 = 'd53442a0c3f85d6c21b9e5a9d1791c5d'
     const keyPublica = '64848faabd63b03da8406ef12859179f'
  
     const response = await api.get(`characters/${id}?ts=${keyTimeStamp}&apikey=${keyPublica}&hash=${keyMd5}`)
     setHero(response.data.data.results)
    }

    loadHero();
  
  },[])

  if(hero.length===0){
    return (
      <div className='heroInfo'>
      <div className='containerHero'>
     
      <img className='imageHero'/>
      <p className="description">...</p>
      <h4 className='nameHero'>...</h4> 
      <div className="like">
         <button className="likeButton"> 
           carregando
         </button>  
         </div>
    
      </div>
      
         </div>
    )
  }
  

  return (
  <div className='heroInfo'>
    <div className='containerHero' id={hero[0].id} >
   
    <img className='imageHero' src={hero[0].thumbnail.path +'.' + hero[0].thumbnail.extension} alt={hero[0].name}/>
    <p>{hero[0].description}</p>
    <h4 className='nameHero'>{hero[0].name}</h4> 
    <div className="like">
       <button className="likeButton"> 
         <VscHeart/> 
       </button>
       </div>
  
    </div>
    
       </div>
  )
  }
    
  export default HeroInfo