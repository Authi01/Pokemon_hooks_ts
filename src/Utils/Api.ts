import axios from "axios";
import { Pokemon } from "./types";

let cachedPokemonList: Pokemon[] | [] = [];

export const fetchPokemonList = async () => {
  try {
    if (cachedPokemonList?.length) {
      return cachedPokemonList;
    }

    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    cachedPokemonList = response.data.results;

    return cachedPokemonList;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};

export const fetchPokemonDetails = async (name: string) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};

export const getImageUrl = (id: number) => {
  const paddedId = String(id).padStart(3, "0");
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedId}.png`;
};
