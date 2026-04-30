import { Link } from "react-router-dom";
import styles from "../styles/DriverLineupCard.module.css"


export default function DriverLineupCard({ driver, backEndUrl }) {
    return (
        <Link
            to={`/drivers/${driver.id}`}
            className={styles.card}
            aria-label={`Vai al pilota ${driver.first_name} ${driver.last_name}`}
        >
            <div className={styles.imageBox}>
                <img
                    src={`${backEndUrl}storage/${driver.photo}`}
                    alt={`${driver.first_name} ${driver.last_name}`}
                />

                <span className={styles.number}>
                    #{driver.driver_number}
                </span>
            </div>

            <div className={styles.body}>
                <div>
                    <span className={styles.kicker}>{driver.nationality}</span>

                    <h3>
                        {driver.first_name} {driver.last_name}
                    </h3>
                </div>

                <div className={styles.stats}>
                    <div>
                        <span>Wins</span>
                        <strong>{driver.total_wins}</strong>
                    </div>

                    <div>
                        <span>Poles</span>
                        <strong>{driver.total_pole_positions}</strong>
                    </div>

                    <div>
                        <span>Podiums</span>
                        <strong>{driver.total_podiums}</strong>
                    </div>
                </div>

                {driver.driver_slogan && (
                    <p>{driver.driver_slogan}</p>
                )}
            </div>
        </Link>
    );
}