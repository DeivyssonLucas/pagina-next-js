import Link from 'next/link'
import styles from '../styles/NavBar.module.css'
export default function NavBar() {
    return (
        <ul className={styles.navbar}>
        <li>
            <Link href="/" legacyBehavior>
            <a>Home</a>
            </Link>

            </li>
            <li>
                <Link href="/products" legacyBehavior>
                    <a>Produtos</a>
                </Link>
            </li>
            <li>
                <Link href="about" legacyBehavior>
                    <a>Sobre nós</a>
                </Link>
            </li>
            <li>
                <Link href="/contact" legacyBehavior>
                    <a>Contato</a>
                </Link>
            </li>
        </ul>
    )
}