import React, { useState, useEffect } from "react";
import styles from './styles.module.css';
import { useLocation, Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function PokeCard() {
    const [pokemon, setPokemon] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const prevPokemonId = Math.max(1, parseInt(id) - 1);
    const nextPokemonId = parseInt(id) + 1;

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
                const dataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await dataResponse.json();
                setPokemon({
                    id: data.id,
                    name: data.name,
                    types: data.types.map((type) => type.type.name),
                    color: getPokemonColor(data.types[0].type.name),
                    img: data.sprites.other['official-artwork'].front_default,
                    stats: data.stats.map((stat) => ({
                        name: stat.stat.name,
                        value: stat.base_stat,
                    })),
                    height: data.height,
                    weight: data.weight,
                    moves: data.moves.map((move) => ({
                        name: move.move.name,
                    })),
                });
            } catch (error) {
                console.error("Error al obtener datos:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <>
            {pokemon && (
                <div
                    className={styles.backgroundCard}
                    style={{
                        backgroundColor: pokemon.color,
                    }}
                >
                    <div className={styles.header}>
                        <div className={styles.header}>
                            <img onClick={() => navigate('/')} src="../../public/icons/arrow_back.png" alt="" />
                            <h1 className={styles.pokemonName} onClick={() => navigate('/')} src="../../public/icons/arrow_back.png" alt="" >{pokemon.name}</h1>
                        </div>
                        <h1 className={styles.pokemonId}>#{String(pokemon.id).padStart(3, '0')}</h1>
                    </div>
                    <div className={styles.imageSection}>
                        <img
                            onClick={() => pokemon.id >= 1 && navigate(`/pokemon/${prevPokemonId >= 1 ? prevPokemonId : 1}`)}
                            src="../../public/icons/chevron_left.png"
                            alt="Previous Pokemon"
                        />
                        <img
                            src={pokemon.img}
                            alt={pokemon.name}
                            className={styles.pokemonPic}
                        />
                        <img
                            onClick={() => pokemon.id >= 1 && navigate(`/pokemon/${nextPokemonId}`)}
                            src="../../public/icons/chevron_right.png"
                            alt="Next Pokemon"
                        />

                    </div>

                    <div className={styles.infoSection}>
                        <div className={styles.pokemonTypes}
                            style={{ backgroundColor: pokemon.color, }}>
                            <p className={styles.pokemonTypesText}>{pokemon.types}</p>
                        </div>
                        <h1 className={styles.h1}
                            style={{ color: pokemon.color, }}>About</h1>
                        <div className={styles.features}>
                            <div className={styles.features_weight}>
                                <div className={styles.features_weightInfo}>
                                    <img className={styles.features_weightImg} src="../../public/icons/Weight.svg" alt="" />
                                    <p>{pokemon.weight / 10} Kg</p>
                                </div>
                                <p className={styles.features_subTitle}>Weight</p>
                            </div>
                            <div className={styles.features_height}>
                                <div className={styles.features_heightInfo}>
                                    <img className={styles.features_heightImg} src="../../public/icons/Height.svg" alt="" />
                                    <p>{pokemon.height / 10} m</p>
                                </div>
                                <p className={styles.features_subTitle}> Height</p>
                            </div>
                            <div className={styles.features_moves}>
                                {<ul className={styles.features_movesInfo}>
                                    {pokemon.moves.slice(0, 2).map((move, index) => (
                                        <li key={index}>
                                            {move.name}
                                        </li>
                                    ))}
                                </ul>}
                                <p className={styles.features_subTitle} > Moves</p>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <p>There is a plant seed on its back right from the day this <br />Pokemos is born. The seed slowly grows larger.</p>
                        </div>
                        <h1 className={styles.h1}
                            style={{ color: pokemon.color, }}
                        >Base Stats</h1>
                        <div className={styles.pokemonSkills}>
                            <ul className={styles.abilities}
                                style={{ color: pokemon.color, }}>
                                {pokemon.stats.map((stat, index) => (
                                    <li key={index}>
                                        {stat.name}
                                    </li>
                                ))}
                            </ul>
                            <ul className={styles.abilitiesValue}>
                                {pokemon.stats.map((stat, index) => (
                                    <li key={index}>
                                        {stat.value}
                                    </li>
                                ))}
                            </ul>
                            <div >
                                {pokemon.stats.map((stat, index) => (
                                    <progress
                                        className={styles.progressBar}
                                        key={index}
                                        value={stat.value / 100} />
                                        // accent-color
                                ))}
                            </div>
                        </div>
                    </div>
                </div >
            )
            }
        </>
    )
}
