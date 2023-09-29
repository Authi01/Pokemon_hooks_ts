import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Pokemon } from "../Utils/types";

function PokemonCard({
  pokemon,
  imageUrl,
}: {
  pokemon: Pokemon;
  imageUrl: string;
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text></Card.Text>
        <Link to={`/description/${pokemon.name}`}>
          <Button variant="primary"> Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;
