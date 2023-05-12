import React, { useState } from 'react'
import { useFetch } from '../hooks/apiServer'
import './PokeList.css';
import PokemonCard from './PokemonCard';

function PokeList() {
    const {data: items, loading} = useFetch("https://pokeapi.co/api/v2/pokemon/?limit=42");
    const [searchInput, setSearchInput] = useState("");

    const renderPokemonsList = () => {
        const pokemonsList = [];
    
        items.forEach((pokemon) => {
          if (!pokemon.name.includes(searchInput)) {
            return;
          }
          pokemonsList.push(<PokemonCard key={pokemon.name} pokemon={pokemon}/>);
        });
    
        return pokemonsList;
      };
    
  return (
    <div>
        <h1>PokeDex</h1>
        <input type="text" name='search' onChange={(e) => setSearchInput(e.target.value)} placeholder='Search Pokemon'/>
        <div className='grid_pokemons'>
            {items != null && renderPokemonsList()}
        </div>
    </div>
  )
}

export default PokeList;
