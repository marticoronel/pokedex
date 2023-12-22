// PokemonList.jsx
import React from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

export default function PokemonList({ data, loading, colors,  }) {
  const navigate = useNavigate();

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <div className={styles.pokemonList}>
            {data.map((pokemon, index) => (
              <li
                key={index}
                className={styles.pokemonIcon}
                style={{
                  borderColor: colors[pokemon.name],
                  background: `linear-gradient(to bottom, white 10% 75%, ${colors[pokemon.name]} 75%)`,
                }}
                onClick={() => navigate(`/pokemon/${pokemon.id}`)}
              >
                <p className={styles.idNumber}>#{String(pokemon.id).padStart(3, '0')}</p>
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