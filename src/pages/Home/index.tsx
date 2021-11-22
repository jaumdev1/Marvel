import React, { useEffect, useState } from 'react';
import './styles.scss';
import Hero from '../../components/Hero'
import {api} from '../../services/api'
import { VscSearch } from 'react-icons/vsc';
type Heros ={
  id:string;
  name:string;
  thumbnail:{
    path:string;
    extension:string;
  }
  
}


function Home() {
  const [search, setSearch] = useState("")
  const [heros, setHeros] = useState<Heros[]>([])
  
  function RandomAlfa(){
    var result  = '';
    var characters= 'abcdefghijklmnopqrstuvwxyz';
  
  
     
        result = characters.charAt(Math.floor(Math.random() * characters.length));
     
   
     return result;
    
  }
 


useEffect(()=>{
 if(heros.length==0){
  async function loadHeros(){

    const keyTimeStamp = '1637171720'
    const keyMd5 = 'd53442a0c3f85d6c21b9e5a9d1791c5d'
    const keyPublica = '64848faabd63b03da8406ef12859179f'

   const response = await api.get(`characters?ts=${keyTimeStamp}&apikey=${keyPublica}&hash=${keyMd5}&nameStartsWith=${RandomAlfa()}&limit=15`)
   setHeros(response.data.data.results)
  }
  loadHeros();

}
},[])

useEffect(()=>{
  async function SearchHero(){

     const keyTimeStamp = '1637171720'
     const keyMd5 = 'd53442a0c3f85d6c21b9e5a9d1791c5d'
     const keyPublica = '64848faabd63b03da8406ef12859179f'
  
     const response = await api.get(`characters?ts=${keyTimeStamp}&apikey=${keyPublica}&hash=${keyMd5}&nameStartsWith=${search}`)
     setHeros(response.data.data.results)
    }

    SearchHero();
},[search])

    return (

       
      <div className="contentHeros">
      <div className="search">
           <input id='inputSearch' type="text" className="inputSearch" placeholder="Search" value={search} onChange={(e)=> setSearch(e.target.value)}/>
           
          </div>  
       <div className='heros'>
         {heros.map((heros)=>{
            return(
              <Hero img={heros.thumbnail.path +`.`+ heros.thumbnail.extension} name={heros.name} id={heros.id} key={heros.id} />
            )
         })}
       
       </div>
       </div>
      
    
    )
  }
    
  export default Home
  