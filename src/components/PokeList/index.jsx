import styles from './styles.module.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


navigate("/new-route", { state: { key: "value" } });


export default function PokemonList({ data, loading, colors }) {
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <Link to="/pokemon">
          <div className={styles.pokemonList}>
            {data.map((pokemon, index) => (
              <li
                key={index}
                className={styles.pokemonIcon}
                style={{
                  borderColor: colors[pokemon.name],
                  background: `linear-gradient(to bottom, white 10% 75%, ${colors[pokemon.name]} 75%)`,
                }}
              >
                <p className={styles.idNumber}>#{String(index + 1).padStart(3, '0')}</p>
                <img
                  src={pokemon.img}
                  alt={pokemon.name}
                  className={styles.pokemonPic}
                />
                <p className={styles.pokemonName}>{pokemon.name}</p>
              </li>
            ))}
          </div>
          </Link>
        </ul>
      )}
    </div>
  );
}



