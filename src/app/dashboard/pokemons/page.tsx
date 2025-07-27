import { PokemonGrid, PokemonsReponse, SimplePokemon } from "@/pokemons";

const getPokemon = async (limit = 20, offSet = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsReponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offSet}`
  ).then((res) => res.json());

  const pokemon = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").slice(-2, -1)[0],
    name: pokemon.name,
  }));

  return pokemon;
};

export default async function PokemonPage() {
  const pokemons = await getPokemon(125);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokémons <small>estático</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
