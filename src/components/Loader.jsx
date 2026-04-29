import styles from "../styles/Loader.module.css"

export default function Loader() {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>

                <div className={styles.barContainer}>
                    <div className={styles.bar}></div>
                </div>

                <p className={styles.text}>i dati sono in arrivo...(forse)</p>

            </div>
        </div>
    );
}