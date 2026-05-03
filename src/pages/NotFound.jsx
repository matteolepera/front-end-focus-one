import { Link } from "react-router-dom";
import styles from "../styles/NotFound.module.css"

export default function NotFound() {
    return (
        <div className={styles.page}>
            <h1 className={styles.code}>404</h1>
            <h2 className={styles.title}>Page Not Found</h2>
            <div className={styles.divider} />
            <p className={styles.description}>
                La pagina che stai cercando non esiste.
            </p>
            <Link to="/" className={styles.link}>
                ← Torna alla Home
            </Link>
        </div>
    );
}