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
                    <span className={styles.eyebrow}>Stagione 2026</span>

                    <h1>L’evoluzione della velocità</h1>

                    <p>
                        Tutti i team, i piloti e le statistiche della stagione di Formula 1.
                    </p>
                </div>

                <div className={styles.scrollHint} aria-hidden="true">
                    <span></span>
                </div>
            </section>

            <section className={styles.featureSection}>
                <div className={styles.featureMedia}>
                    <img src="/images/teams.png" alt="Formula 1 team garage" />
                </div>

                <div className={styles.featureContent}>
                    <span className={styles.kicker}>Costruttori</span>

                    <h2>Team</h2>

                    <p>
                        Scopri le scuderie della stagione: identità, prestazioni e dettagli tecnici che fanno la differenza in pista.
                    </p>

                    <Link to="/teams" className={styles.linkButton}>
                        Scopri i team
                    </Link>
                </div>
            </section>

            <section className={`${styles.featureSection} ${styles.reverse}`}>
                <div className={styles.featureMedia}>
                    <img src="/images/drivers.png" alt="Formula 1 driver helmet" />
                </div>

                <div className={styles.featureContent}>
                    <span className={styles.kicker}>Griglia</span>

                    <h2>Piloti</h2>

                    <p>
                        Scopri i protagonisti della stagione: profili, carriere e prestazioni dei piloti che fanno la differenza in pista.
                    </p>

                    <Link to="/drivers" className={styles.linkButton}>
                        Scopri i piloti
                    </Link>
                </div>
            </section>
        </div>
    )
}