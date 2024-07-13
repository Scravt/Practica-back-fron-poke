import React, { useEffect, useState } from 'react';
import { getRequestPokemon } from '../Services/ServicePokemons';
import { Pokemon } from '../types/pokemon';

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
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.id}>
            <h2>{pokemon.name}</h2>
            <p><strong>Type:</strong> {pokemon.type}</p>
            <p>{pokemon.description}</p>
            <h3>Abilities:</h3>
            <ul>
              {pokemon.abilities.map((ability, index) => (
                <li key={index}>
                  <strong>{ability.name}:</strong> {ability.description}
                </li>
              ))}
            </ul>
            <h3>Stats:</h3>
            <ul>
              <li><strong>HP:</strong> {pokemon.stats.hp}</li>
              <li><strong>Attack:</strong> {pokemon.stats.attack}</li>
              <li><strong>Defense:</strong> {pokemon.stats.defense}</li>
              <li><strong>Speed:</strong> {pokemon.stats.speed}</li>
            </ul>
            <h3>Evolutions:</h3>
            <ul>
              {pokemon.evolutions.map(evolution => (
                <li key={evolution.id}>{evolution.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
