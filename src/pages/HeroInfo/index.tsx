import React, { useCallback, useEffect, useState, useLayoutEffect} from 'react';
import {api} from '../../services/api'
import './styles.scss';
import { useParams } from 'react-router-dom'
import{ VscHeart } from 'react-icons/vsc'
import Serie from '../../components/Serie'

type Hero = {

  id:string;
  name:string;
  description: string;
  series:{
    items:[2]
  }
  thumbnail:{
    path:string;
    extension:string;
  }
  
}
interface ParamTypes {
  id: string;
}

type Series={
  name:string;
  resourceURI:string;
}
type Serie={
  id:string;
  title:string;
  thumbnail:{
    extension: string;
     path: string;
  }
}

type Props =  {
  img:string;
  name: string;
  id: string;
}
function HeroInfo():JSX.Element {

  const{ id } = useParams<ParamTypes>();
  const [hero, setHero] = useState<Hero[]>([]);
  const [series, setSeries] = useState<Series[]>([]);

  const [serie, setSerie] = useState<Serie[]>([]);


  function SaveHero(){
    const heroList = localStorage.getItem('heros')
    let saveHeros:Array<Props> = JSON.parse(heroList || `[]`) || []
    const hasHero = saveHeros.some((saveHero:Props)=> saveHero.id === hero[0].id)
   
   if(hasHero){
     alert('Você já tem esse herói em sua lista!');
     return;
   }else{
   saveHeros.push({id:hero[0].id, name:hero[0].name, img: (hero[0].thumbnail.path +'.'+ hero[0].thumbnail.extension )})
   localStorage.setItem('heros', JSON.stringify(saveHeros))
   alert('O heroi foi salvo!')
   }
   }


  useEffect(()=>{
   
    async function loadHero(){
  
     const keyTimeStamp = '1637171720'
     const keyMd5 = 'd53442a0c3f85d6c21b9e5a9d1791c5d'
     const keyPublica = '64848faabd63b03da8406ef12859179f'
  
     const response = await api.get(`characters/${id}?ts=${keyTimeStamp}&apikey=${keyPublica}&hash=${keyMd5}`)
     setHero(response.data.data.results)
     setSeries(response.data.data.results[0].series.items)
     console.log(response.data.data.results[0].series.items)
     

    }

    loadHero();
    

  },[])
  

   useEffect(()=>{
   if(series.length !=0){
    async function loadSerie(){
  
      const keyTimeStamp = '1637171720'
      const keyMd5 = 'd53442a0c3f85d6c21b9e5a9d1791c5d'
      const keyPublica = '64848faabd63b03da8406ef12859179f'

        console.log(series[0])
        const response = await api.get(`${(series[0].resourceURI).replace("http", "https")}?ts=${keyTimeStamp}&apikey=${keyPublica}&hash=${keyMd5}`)      
        
        setSerie(response.data.data.results)
         
       
      
     }
     
     loadSerie();
    }
  
   },[series])
  


  if(hero.length===0 || series.length===0 || serie.length === 0){
    return (
      <div className='heroInfo'>
      <div className='containerHero'>
     
      <img className='imageHero'/>
      <p className="description">...</p>
      <h4 className='nameHero'>...</h4> 
      <div className="like">
         <button className="likeButton"> 
           carregando...
         </button>  
         </div>
     <div>
    
              <h1> 
              carregando...
              </h1>
        
   
    </div>
      </div>
      
         </div>
    )
  }
 
  
 return (
  <div className='heroInfo'>
    <h4 className='nameHero'>{hero[0].name}</h4> 
    <div className='containerHero' id={hero[0].id} >
    
    <img className='imageHero' src={hero[0].thumbnail.path +'.' + hero[0].thumbnail.extension} alt={hero[0].name}/>
    <p className="description">{hero[0].description}</p>
    
    <div className="like">
       <button className="likeButton" onClick={SaveHero}> 
         <VscHeart/> 
       </button>
       </div>
       
    </div>
    <h3>Participated in the series </h3>
    <Serie id={serie[0].id} title={serie[0].title} thumbnail={serie[0].thumbnail}/>

    
       </div>
  )
}
  
    
  export default HeroInfo