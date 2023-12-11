import styles from './styles.module.css'

export default function Header() {
    return (
        <div>
            <img className='header__pokeball__icon' src="../../public/icons/Pokeball.png" alt="icono pokeball" />
            <h1>Pokédex</h1>
            <form action="">
                <input className='input' type="text" placeholder='Buscar' />
            </form>
        </div>
    )
}