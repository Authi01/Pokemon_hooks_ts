import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

import { fetchPokemonList, getImageUrl } from "../Utils/Api";
import { Pokemon } from "../Utils/types";

const ProductListingPage: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemonList();
        setPokemonList(data);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="product-listing1">
      <h1 className="centered1">Pokemon List</h1>
      <div className="pokemon-grid1">
        {pokemonList.map((pokemon, index) => {
          const imageUrl = getImageUrl(index + 1);
          return (
            <PokemonCard key={index} pokemon={pokemon} imageUrl={imageUrl} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductListingPage;
