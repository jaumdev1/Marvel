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
function SaveHero(){
 const heroList = localStorage.getItem('heros')
 let saveHeros:Array<Props> = JSON.parse(heroList || `[]`) || []
 const hasHero = saveHeros.some((saveHero:Props)=> saveHero.id === props.id)

if(hasHero){
  alert('Você já tem esse herói em sua lista!');
  return;
}else{
saveHeros.push({id:props.id, name:props.name, img: props.img})
localStorage.setItem('heros', JSON.stringify(saveHeros))
alert('O heroi foi salvo!')
}
}



    return (
     <div className='hero'id={props.id} key={props.id} >
       <Link className='containerhero' to={`/heroInfo/${props.id}`}>
         <div className='contentHero' id={props.id} >
         <img className='image' src={props.img} alt={props.name}/>
         <h4 className='name'>{props.name}</h4> 
         </div>
         </Link>
         <div className="contentLike">
            <button className="buttonLike" onClick={SaveHero}> 
              <VscHeart/> 
            </button>
          
            </div>
      </div>
     
       
    
    )
  }
    
  export default Hero
  