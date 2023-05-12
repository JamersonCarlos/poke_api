import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './PokemonCard.css';
import PokeStats from './PokeStats';

function PokemonCard({pokemon}) {
    const [pokemonId, setPokemonId] = useState();
    const [urlImage, setImg] = useState();
    const [statistics, setStatistics] = useState();
    
    useEffect(() => { 
        async function getInfoPokemon() { 
            const response = await fetch(pokemon.url);
            const responseJson = await response.json();
            setPokemonId(responseJson.id);
            setImg(responseJson.sprites.front_default);
            setStatistics(responseJson.stats);
        }

        getInfoPokemon();
    }, [pokemon.url]);

  return (
    
    <div className='card_pokemon' style={{backgroundColor: 'white'}}>
        <img style={{width: 120}} src={urlImage} alt=""/>
        <PokeStats statistics={statistics} typeListStats={true}/>
        <Link to={`pokemons/${pokemonId}`}>
            <div className='textButton'>
                Mais Informações
            </div>
        </Link>
    </div>
  )
}

export default PokemonCard;