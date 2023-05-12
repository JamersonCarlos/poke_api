import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function PokeInfo() {
  const {id} = useParams();
  const [name, setName] = useState();
  const [urlImg, setImg] = useState();
  
  useEffect(() => { 
    async function getInfoPokemon() { 
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const responseJson = await response.json();
      setName(responseJson.forms[0].name);
      setImg(responseJson.sprites.front_default);
    }

    getInfoPokemon();
  }, [id]);

  return (
    <div>
      <h1>Pokemon Details</h1>
      <div className='infoPokemon'>
        <h3 className='namePoke'>{name}</h3>
        <img src={urlImg} alt="" />    
      </div>
    </div>  
  )
}

export default PokeInfo;