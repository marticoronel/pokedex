import React, { useState, useEffect } from "react";
import styles from './styles.module.css';

export default function PokemonList() {
    const [loading, setLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=9");
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
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

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

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    <div className={styles.pokemonList}>
                        {pokemonList.map((pokemon, index) => (
                            <li
                                key={index}
                                className={styles.pokemonIcon}
                                style={{
                                    borderColor: getPokemonColor(pokemon.types[0]),
                                    background: 'linear-gradient(to bottom, white 10% 75%, ' + getPokemonColor(pokemon.types[0]) + ' 75%'
                                }}
                            >
                                <p className={styles.idNumber}>#{String(index + 1).padStart(3, '0')}</p>  
                                {/* padStart RELLENA UNA STRING .padStart(numero total de caracteres en la string, 'relleno') */}
                                <img
                                    src={pokemon.img}
                                    alt={pokemon.name}
                                    className={styles.pokemonPic}
                                />
                                <p className={styles.pokemonName}>{pokemon.name}</p>
                            </li>
                        ))}
                    </div>
                </ul>
            )}
        </div>
    );
}


