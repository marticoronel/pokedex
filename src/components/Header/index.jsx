import styles from './styles.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pokeball from "/public/icons/Pokeball.png"


export default function Header({ handleSortAlphabetically, isSortedAlphabetically, handleInputChange }) {
    const navigate = useNavigate();

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.title}>
                    <img className={styles.pokeball} src={pokeball} />
                    <h1>Pokédex</h1>
                </div>
                <div className={styles.btn__title}>
                    <div className={styles.btnNumeral} style={{ display: isSortedAlphabetically ? 'none' : 'block' }}>
                        #
                    </div>
                    <div className={styles.btnAlfabetico} style={{ display: isSortedAlphabetically ? 'block' : 'none' }}>
                        A-Z
                    </div>
                    <button onClick={handleSortAlphabetically} className={styles.btn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="white" className="bi bi-arrow-down arrowDown" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                        </svg>
                    </button>
                </div>
            </div>
            <form action="">
                <input onChange={handleInputChange} className={styles.input} type="text" placeholder='Buscar' />
            </form>
        </div>
    );
}
