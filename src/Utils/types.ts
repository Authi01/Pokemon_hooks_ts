export interface Pokemon {
  name: string;
}

export interface PokemonDetails {
  weight: number;
  height: number;
  id: number;
  name: string;
  forms: { name: string }[];
  abilities: { ability: { name: string } }[];
}

export interface ParamType {
  name: string;
}
