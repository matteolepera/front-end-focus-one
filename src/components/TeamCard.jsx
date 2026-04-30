import { Link } from "react-router-dom";
import styles from "../styles/TeamCard.module.css";

export default function TeamCard({ team, backEndUrl }) {
    return (
        <Link
            to={`/teams/${team.id}`}
            className={styles.card}
        >
            <img
                className={styles.backgroundImage}
                src={`${backEndUrl}storage/${team.car_specs?.car_image}`}
                alt={`Monoposto ${team.name}`}
            />

            <div className={styles.cardOverlay}></div>

            <div className={styles.cardContent}>
                <div className={styles.teamHeader}>
                    <div className={styles.logoBox}>
                        <img
                            className={styles.teamLogo}
                            src={`${backEndUrl}storage/${team.logo_image}`}
                            alt={`Logo ${team.name}`}
                        />
                    </div>

                    <div>
                        <span className={styles.teamLabel}>Team</span>
                        <h2>{team.name}</h2>
                    </div>
                </div>

                <div className={styles.drivers}>
                    {team.drivers?.slice(0, 2).map((driver) => (
                        <div className={styles.driver} key={driver.id}>
                            <div className={styles.driverAvatar}>
                                <img
                                    src={`${backEndUrl}storage/${driver.photo}`}
                                    alt={`${driver.first_name} ${driver.last_name}`}
                                />
                            </div>

                            <div className={styles.driverInfo}>
                                <span>{driver.first_name}</span>
                                <strong>{driver.last_name}</strong>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    );
}
