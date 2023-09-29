import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPokemonDetails, getImageUrl } from "../Utils/Api";
import { PokemonDetails } from "../Utils/types";

const ProductDescriptionPage: React.FC = () => {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemonDetails(name as string);
        setPokemonDetails(data);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, [name]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-container">
      <div className="pokemon-card">
        <div className="pokemon-image">
          <img
            src={getImageUrl(pokemonDetails?.id)}
            className="img-fluid rounded"
            alt={pokemonDetails?.name}
          />
        </div>
        <div className="pokemon-info">
          <h1 className="title">{pokemonDetails?.name}</h1>
          <div className="details">
            <strong>Height:</strong> {pokemonDetails?.height} decimetres
          </div>
          <div className="details">
            <strong>Weight:</strong> {pokemonDetails?.weight} hectograms
          </div>
          <div className="details">
            <strong>Abilities:</strong>
            <ul>
              {pokemonDetails.abilities?.map((ability) => (
                <li key={ability?.ability.name} className="list-item">
                  {ability?.ability.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="details">
            <strong>Forms:</strong>
            <ul>
              {pokemonDetails.forms?.map((form) => (
                <li key={form?.name} className="list-item">
                  {form?.name}
                </li>
              ))}
            </ul>
          </div>

          <Link to="/" className="back-link">
            <button className="back-button">Back to PLP</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionPage;
