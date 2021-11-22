import React, {useEffect, useState} from 'react';
import Hero from '../../components/Hero';
import{ VscTrash } from 'react-icons/vsc'
import {Link} from 'react-router-dom'
import './styles.scss';
type Heros ={
  img:string;
  name: string;
  id: string;
 
}
function ListHeros() {
 const [heros, setHeros] = useState<Heros[]>([])

useEffect(()=>{
  const heroList = localStorage.getItem('heros')
  console.log(heroList)
  setHeros(JSON.parse(heroList || '[]') || [])

},[])
function RemoveHero(id:string){
  let filterHeros = heros.filter((hero)=>{
    return (hero.id !== id)
  })
   setHeros(filterHeros);

   localStorage.setItem('heros', JSON.stringify(filterHeros))
 
 }
    return (

   <div className="containerFavHeros">
     <h1 className="titleFav">Your favorite heroes</h1>
     <div className="contentFavHero">
        {heros.map((hero)=>{
          return(
        
            <div className='hero'id={hero.id} key={hero.id} >
            <Link className='containerhero' to={`/heroInfo/${hero.id}`}>
              <div className='contentHero' id={hero.id} >
              <img className='image' src={hero.img} alt={hero.name}/>
              <h4 className='name'>{hero.name}</h4> 
              </div>
              </Link>
              <div className="contentLike">
                 <button className="buttonRemove" onClick={()=>{RemoveHero(hero.id)}}> 
                   <VscTrash/> 
                 </button>
               
                 </div>
           </div>
           )
        })
        
      }
        </div>
   </div>
    
    )
  }
    
  export default ListHeros
  