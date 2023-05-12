import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './PokemonCard.css';
import PokeStats from './PokeStats';

function PokemonCard({pokemon}) {
    const [pokemonId, setPokemonId] = useState();
    const [urlImage, setImg] = useState();
    const [hp, setHp] = useState();
    const [attack, setAttack] = useState();
    const [defense, setDefense] = useState();
    
    useEffect(() => { 
        async function getInfoPokemon() { 
            const response = await fetch(pokemon.url);
            const responseJson = await response.json();
            setPokemonId(responseJson.id);
            setImg(responseJson.sprites.front_default);
            setHp(responseJson.stats[0].base_stat);
            setAttack(responseJson.stats[1].base_stat);
            setDefense(responseJson.stats[2].base_stat);
        }

        getInfoPokemon();
    }, [pokemon.url]);

  return (
    
    <div className='card_pokemon' style={{backgroundColor: 'white'}}>
        <img style={{width: 120}} src={urlImage} alt=""/>
        <PokeStats hp={hp} attack={attack} defense={defense}/>
        <Link to={`pokemons/${pokemonId}`}>
            <div className='textButton'>
                Mais Informações
            </div>
        </Link>
    </div>
  )
}

export default PokemonCard;