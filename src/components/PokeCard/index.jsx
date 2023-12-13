import React from 'react'
import styles from './styles.module.css';
import PokemonType from '../PokemonType/index'


export default function PokeCard() {
    return (
        <>
            <div
                className={styles.backgroundCard}
                style={{
                    // background: getPokemonColor(pokemon.types[0])
                }}
            >
                <div className={styles.header}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <g filter="url(#filter0_d_1112_209)">
                            <path d="M14.8999 25.9666L5.63325 16.6999C5.52214 16.5888 5.44436 16.4777 5.39992 16.3666C5.35547 16.2555 5.33325 16.1333 5.33325 15.9999C5.33325 15.8666 5.35547 15.7444 5.39992 15.6333C5.44436 15.5222 5.52214 15.4111 5.63325 15.2999L14.9333 5.99994C15.111 5.82216 15.3333 5.73328 15.5999 5.73328C15.8666 5.73328 16.0999 5.83328 16.2999 6.03328C16.4999 6.23328 16.5999 6.46661 16.5999 6.73328C16.5999 6.99994 16.4999 7.23328 16.2999 7.43328L8.73325 14.9999H25.2666C25.5555 14.9999 25.7944 15.0944 25.9833 15.2833C26.1721 15.4722 26.2666 15.7111 26.2666 15.9999C26.2666 16.2888 26.1721 16.5277 25.9833 16.7166C25.7944 16.9055 25.5555 16.9999 25.2666 16.9999H8.73325L16.3333 24.5999C16.511 24.7777 16.5999 24.9999 16.5999 25.2666C16.5999 25.5333 16.4999 25.7666 16.2999 25.9666C16.0999 26.1666 15.8666 26.2666 15.5999 26.2666C15.3333 26.2666 15.0999 26.1666 14.8999 25.9666Z" fill="white" />
                        </g>
                        <defs>
                            <filter id="filter0_d_1112_209" x="1.33325" y="2.73328" width="28.9333" height="28.5333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1112_209" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="1.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1112_209" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1112_209" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    <h1 className={styles.pokemonName}>Pokemon</h1>
                    <h1 className={styles.pokemonId}>#000</h1>
                </div>
                <div className={styles.imageSection}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g filter="url(#filter0_d_1112_297)">
                            <path d="M13.475 17.45L8.52505 12.5C8.44171 12.4167 8.38338 12.3333 8.35005 12.25C8.31672 12.1667 8.30005 12.075 8.30005 11.975C8.30005 11.875 8.31672 11.7833 8.35005 11.7C8.38338 11.6167 8.44171 11.5333 8.52505 11.45L13.5 6.475C13.65 6.325 13.8292 6.25 14.0375 6.25C14.2459 6.25 14.425 6.325 14.575 6.475C14.725 6.625 14.7959 6.80833 14.7875 7.025C14.7792 7.24167 14.7 7.425 14.55 7.575L10.15 11.975L14.575 16.4C14.725 16.55 14.8 16.725 14.8 16.925C14.8 17.125 14.725 17.3 14.575 17.45C14.425 17.6 14.2417 17.675 14.025 17.675C13.8084 17.675 13.625 17.6 13.475 17.45Z" fill="white" />
                        </g>
                        <defs>
                            <filter id="filter0_d_1112_297" x="4.30005" y="3.25" width="14.5" height="19.425" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1112_297" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="1.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1112_297" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1112_297" result="shape" />
                            </filter>
                        </defs>
                    </svg>

                    <img className={styles.pokemonPic}
                        src="../../public/icons/charmander.png"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g filter="url(#filter0_d_1112_216)">
                            <path d="M8.84995 17.45C8.71662 17.2834 8.64579 17.1 8.63745 16.9C8.62912 16.7 8.69995 16.525 8.84995 16.375L13.25 11.975L8.82495 7.55003C8.69162 7.4167 8.62912 7.23753 8.63745 7.01253C8.64579 6.78753 8.71662 6.60837 8.84995 6.47503C9.01662 6.30837 9.19579 6.2292 9.38745 6.23753C9.57912 6.24587 9.74995 6.32503 9.89995 6.47503L14.875 11.45C14.9583 11.5334 15.0166 11.6167 15.05 11.7C15.0833 11.7834 15.1 11.875 15.1 11.975C15.1 12.075 15.0833 12.1667 15.05 12.25C15.0166 12.3334 14.9583 12.4167 14.875 12.5L9.92495 17.45C9.77495 17.6 9.59995 17.6709 9.39995 17.6625C9.19995 17.6542 9.01662 17.5834 8.84995 17.45Z" fill="white" />
                        </g>
                        <defs>
                            <filter id="filter0_d_1112_216" x="4.63672" y="3.23694" width="14.4631" height="19.4263" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1112_216" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="1.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1112_216" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1112_216" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>

                <div className={styles.infoSection}>
                    <div className={styles.pokemonTypes}>
                        <PokemonType />
                        <PokemonType />
                    </div>
                    <h1 className={styles.h1}>About</h1>
                    <div className={styles.features}>
                        <div className={styles.features_weight}>
                            <div className={styles.features_weightInfo}>
                                <img src="../../public/icons/Weight.svg" alt="" />
                                <p>0,0kg</p>
                            </div>
                            <p className={styles.features_subTitle}>Weight</p>
                        </div>
                        <div className={styles.features_height}>
                            <div className={styles.features_heightInfo}>
                                <img src="../../public/icons/Height.svg" alt="" />
                                <p>0,0m</p>
                            </div>
                            <p className={styles.features_subTitle}> Height</p>
                        </div>
                        <div className={styles.features_moves}>
                            <div className={styles.features_movesInfo}>
                                <p>Chlorophyll</p>
                                <p>Overgrow</p>
                            </div>
                            <p className={styles.features_subTitle} > Moves</p>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <p>There is a plant seed on its back right from the day this <br />Pokemos is born. The seed slowly grows larger.</p>
                    </div>
                    <h1 className={styles.h1}>Base Stats</h1>
                    <div className={styles.pokemonSkills}>
                        <ul className={styles.abilities}>
                            <li>HP</li>
                            <li>ATK</li>
                            <li>DEF</li>
                            <li>SATK</li>
                            <li>SDEF</li>
                            <li>SPD</li>
                        </ul>
                        <ul className={styles.abilitiesValue}>
                            <li>045</li>
                            <li>049</li>
                            <li>049</li>
                            <li>065</li>
                            <li>065</li>
                            <li>045</li>
                        </ul>
                        <div className={styles.progressBar}>
                            <progress value={0.45} bgcolor={""} />
                            <progress value={0.49} />
                            <progress value={0.49} />
                            <progress value={0.65} />
                            <progress value={0.65} />
                            <progress value={0.45} />
                        </div>
                    </div>

                </div>


            </div >
        </>
    )
}


