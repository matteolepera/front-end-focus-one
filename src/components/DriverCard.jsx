import { Link } from "react-router-dom";
import styles from "../styles/DriverCard.module.css";

export default function DriverCard({ driver, backEndUrl }) {
    return (
        <Link
            to={`/drivers/${driver.id}`}
            className={styles.card}
            aria-label={`Vai al pilota ${driver.first_name} ${driver.last_name}`}
        >
            <img
                className={styles.driverImage}
                src={`${backEndUrl}storage/${driver.photo}`}
                alt={`${driver.first_name} ${driver.last_name}`}
            />

            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <div>
                    <span className={styles.teamName}>
                        {driver.team?.name || "Formula 1"}
                    </span>

                    <h2>
                        <span>{driver.first_name}</span>
                        {driver.last_name}
                    </h2>
                </div>

                <span className={styles.number}>
                    #{driver.driver_number}
                </span>
            </div>
        </Link>
    );
}
