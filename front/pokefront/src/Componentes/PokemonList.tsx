import React, { useEffect, useState } from 'react';
import { getRequestPokemon } from '../Services/ServicePokemons';
import { Pokemon } from '../types/pokemon';
import { BackHome } from '../utils/BackHome';

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await getRequestPokemon('pokemons');
        setPokemons(response.data.pokemons); 
        setLoading(false);
      } catch (err) {
        setError('Error fetching pokemons');
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='w-screen  text-white flex flex-col h-80 items-center'>
      <h1 className='text-3xl'>Pokémon List</h1>
      <ul className='flex gap-2 min-w-[400px] max-w-[900px]'>
        {pokemons.map(pokemon => (
          <li key={pokemon.id} className='flex-1 border border-black rounded-2xl p-3 '>
            <h2 className='text-center pb-1'>{pokemon.name.toUpperCase()}</h2> 
            <p className='pb-1'>{pokemon.description}</p>
            <p className='pb-1'><strong>Type:</strong> {pokemon.type}</p>
            <h3>Abilities:</h3>
            <ul className='pb-1'>
              {pokemon.abilities.map((ability, index) => (
                <li key={index} className='pl-5'>
                  <strong>{ability.name}:</strong> {ability.description}
                </li>
              ))}
            </ul>
            <h3>Stats:</h3>
            <ul className='pb-1'>
              <li className='pl-5'><strong>HP:</strong> {pokemon.stats.hp}</li>
              <li className='pl-5'><strong>Attack:</strong> {pokemon.stats.attack}</li>
              <li className='pl-5'><strong>Defense:</strong> {pokemon.stats.defense}</li>
              <li className='pl-5'><strong>Speed:</strong> {pokemon.stats.speed}</li>
            </ul>
            <h3>Evolutions:</h3>
            <ul>
              {pokemon.evolutions.map(evolution => (
                <li key={evolution.id} className='pl-5' >{evolution.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <BackHome />
    </div>
  );
};

export default PokemonList;
