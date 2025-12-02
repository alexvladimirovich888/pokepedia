export enum PokemonType {
  Normal = "Normal",
  Fire = "Fire",
  Water = "Water",
  Grass = "Grass",
  Electric = "Electric",
  Ice = "Ice",
  Fighting = "Fighting",
  Poison = "Poison",
  Ground = "Ground",
  Flying = "Flying",
  Psychic = "Psychic",
  Bug = "Bug",
  Rock = "Rock",
  Ghost = "Ghost",
  Dragon = "Dragon",
  Steel = "Steel",
  Dark = "Dark",
  Fairy = "Fairy"
}

export interface Evolution {
  targetId: number;
  targetName: string;
  condition: string; // e.g., "Level 16", "Thunder Stone"
}

export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
  description: string; // The "Introduction"
  biology?: string;
  inTheGames?: string;
  inTheAnime?: string;
  trivia?: string;
  height?: string;
  weight?: string;
  abilities?: string[];
  evolutions: Evolution[];
  isStub: boolean;
  imageUrl: string;
}

export interface SearchResult {
  id: number;
  name: string;
  types: PokemonType[];
  isStub: boolean;
}
