import React, { useEffect, useState } from 'react';
import './styles.scss';
import Hero from '../../components/Hero'
import {api} from '../../services/api'
type Heros ={
  id:string;
  name:string;
  thumbnail:{
    path:string;
    extension:string;
  }
  
}


function Home() {
  function RandomAlfa(){
    var result  = '';
    var characters= 'abcdefghijklmnopqrstuvwxyz';
  
  
     
        result = characters.charAt(Math.floor(Math.random() * characters.length));
     
   
     return result;
    
  }
 

const [heros, setHeros] = useState<Heros[]>([])
useEffect(()=>{

  async function loadHeros(){

    const keyTimeStamp = '1637171720'
    const keyMd5 = 'd53442a0c3f85d6c21b9e5a9d1791c5d'
    const keyPublica = '64848faabd63b03da8406ef12859179f'

   const response = await api.get(`characters?ts=${keyTimeStamp}&apikey=${keyPublica}&hash=${keyMd5}&nameStartsWith=${RandomAlfa()}`)
   setHeros(response.data.data.results)
  }
  loadHeros();


},[])
    return (
      <div> 
       
      <div className="contentHeros">
       <div className='heros'>
         {heros.map((heros)=>{
            return(
              <Hero img={heros.thumbnail.path +`.`+ heros.thumbnail.extension} name={heros.name} id={heros.id} />
            )
         })}
       
       </div>
       </div>
       </div>
    
    )
  }
    
  export default Home
  