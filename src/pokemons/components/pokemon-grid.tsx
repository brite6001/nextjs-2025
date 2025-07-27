import { SimplePokemon } from "../interfaces/simple-pokemon";
import { PokemonCard } from "./pokemon-card";

interface Pros {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Pros) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
