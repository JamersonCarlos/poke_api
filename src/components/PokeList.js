import React, { useState } from 'react'
import { useFetch } from '../hooks/apiServer'
import './PokeList.css';

function PokeList() {
    const {data: items, loading, images} = useFetch("https://pokeapi.co/api/v2/pokemon/?limit=42");
    const [searchInput, setSearchInput] = useState();
    function randomColor(opacidade = 1) { 
        let r = Math.random() * 255; 
        let g = Math.random() * 255; 
        let b = Math.random() * 255;
        
        return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
    } 
  return (
    <div>
        <h1>PokeDex</h1>
        <input type="text" name='search' onChange={(e) => setSearchInput(e.target.value)} placeholder='Search Pokemon'/>
        <div className='grid_pokemons'>
            {items != null && 
                items.map((pokemon, index) => {
                    if (!searchInput) { 
                        return (
                        <div key={index} className='card_pokemon' style={{backgroundColor: 'rgb(79, 118, 3)'}}>
                            <img style={{width: 120}} src={images[index]} alt=""/>
                            <p>{pokemon.name}</p>
                        </div>)
                    } else { 
                        if (Object.values(pokemon)[0].split('').join('').includes(searchInput.toLowerCase())) { 
                            return (
                            <div key={index} className='card_pokemon' style={{backgroundColor: 'rgb(79, 118, 3)'}}>
                                <img style={{width: 120}} src={images[index]} alt=""/>
                                <p>{pokemon.name}</p>
                            </div>)
                        } 
                    }
                })
            }
        </div>
    </div>
  )
}

export default PokeList;
