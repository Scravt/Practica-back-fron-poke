// src/types/pokemon.ts

export interface Ability {
  name: string;
  description: string;
}

export interface Stats {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}

export interface Evolution {
  id: number;
  name: string;
}

export interface Pokemon {
  id: number;
  name: string;
  type: string;
  description: string;
  abilities: Ability[];
  stats: Stats;
  evolutions: Evolution[];
}

export interface PokemonResponse {
  pokemons: Pokemon[];
}

