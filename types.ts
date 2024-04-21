export type CategoryResponse = {
  count: number;
  next: null;
  previous: number;
  results: {
    name: string;
    url: string;
  }[];
};

export type PokemonItem = {
  is_hidden: true;
  pokemon: {
    name: string;
    url: string;
  };
  slot: 3;
};
export type PokemonResponse = {
  pokemon: PokemonItem[];
};

export interface Category {
  name: string;
  id?: string;
  url: string;
}

interface Ability {
  name: string;
  url: string;
}

interface AbilityResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Ability[];
}

type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

type PokemonGameIndex = {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
};

type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PokemonApiResponse = {
  abilities: PokemonAbility[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: {
    name: string;
    url: string;
  }[];
  game_indices: PokemonGameIndex[];
  height: number;
  held_items: any[]; // Placeholder for the actual type definition
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[]; // Placeholder for the actual type definition
  name: string;
  order: number;
  past_abilities: any[]; // Placeholder for the actual type definition
  past_types: any[]; // Placeholder for the actual type definition
  species: {
    name: string;
    url: string;
  };
  sprites: any; // Placeholder for the actual type definition
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
};
