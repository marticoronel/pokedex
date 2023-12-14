import React, { useState, useEffect } from "react";

import Header from '../Header/index'
import Pokelist from '../PokeList/index'
import PokeCard from '../PokeCard/index'
import styles from './styles.module.css'

function App() {
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonColors, setPokemonColors] = useState({});

  const typeColors = {
    rock: "#B69E31",
    ghost: "#70559B",
    steel: "#B7B9D0",
    water: "#6493EB",
    grass: "#74CB48",
    psychic: "#FB5584",
    ice: "#9AD6DF",
    dark: "#75574C",
    fairy: "#E69EAC",
    normal: "#AAA67F",
    fighting: "#C12239",
    flying: "#A891EC",
    poison: "#A43E9E",
    ground: "#DEC16B",
    bug: "#A7B723",
    fire: "#FF5733",
    electric: "#F9CF30",
    dragon: "#7037FF",
  };

  const getPokemonColor = (type) => {
    return typeColors[type];
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=18");
        const data = await response.json();

        const dataPokedexPromises = data.results.map(async (pokemon) => {
          const dataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          const data = await dataResponse.json();
          return {
            id: data.id,
            name: data.name,
            types: data.types.map((type) => type.type.name),
            img: data.sprites.other['official-artwork'].front_default,
          };
        });

        const dataPokedex = await Promise.all(dataPokedexPromises);
        setPokemonList(dataPokedex);

        const colors = {};
        dataPokedex.forEach((pokemon) => {
          colors[pokemon.name] = getPokemonColor(pokemon.types[0]);
        });
        setPokemonColors(colors);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Pokelist data={pokemonList} colors={pokemonColors} loading={loading} />
    </>
  );
}

export default App;
