import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.home}>
            <section className={styles.hero}>
                <div className={styles.heroMedia}>
                    <video
                        src="/videos/hero.mp4"
                        poster="/images/hero.jpg"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </div>

                <div className={styles.heroOverlay}></div>

                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>FocusOne</span>

                    <h1>The New Era of Speed</h1>

                    <p>
                        Teams, drivers and performance insights from the 2026 Formula 1 season.
                    </p>
                </div>

                <div className={styles.scrollHint} aria-hidden="true">
                    <span></span>
                </div>
            </section>

            <section className={styles.featureSection}>
                <div className={styles.featureMedia}>
                    <img src="/images/teams.jpg" alt="Formula 1 team garage" />
                </div>

                <div className={styles.featureContent}>
                    <span className={styles.kicker}>Constructors</span>

                    <h2>Team</h2>

                    <p>
                        Esplora le scuderie della competizione, la loro identità, la storia,
                        le performance e i dettagli tecnici che definiscono la stagione.
                    </p>

                    <Link to="/teams" className={styles.linkButton}>
                        Visualizza team
                    </Link>
                </div>
            </section>

            <section className={`${styles.featureSection} ${styles.reverse}`}>
                <div className={styles.featureMedia}>
                    <img src="/images/drivers.jpg" alt="Formula 1 driver helmet" />
                </div>

                <div className={styles.featureContent}>
                    <span className={styles.kicker}>The Grid</span>

                    <h2>Piloti</h2>

                    <p>
                        Scopri i protagonisti in pista: profili, carriere, risultati e
                        caratteristiche dei piloti che stanno plasmando la nuova era della Formula 1.
                    </p>

                    <Link to="/drivers" className={styles.linkButton}>
                        Visualizza piloti
                    </Link>
                </div>
            </section>
        </div>
    )
}