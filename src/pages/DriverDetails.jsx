import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import styles from "../styles/DriverDetails.module.css"

export default function DriverDetails({ setLoading }) {

    const navigate = useNavigate();
    const backEndUrl = import.meta.env.VITE_BACKEND_URL;

    const [driver, setDriver] = useState({});

    const { id } = useParams();

    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`${backEndUrl}api/drivers/${id}`)
            .then(res => {
                setDriver(res.data.data);
            })
            .catch((err) => {
                console.log(err);
                if (err.response?.status === 404) {
                    setNotFound(true);
                }
            })
            .finally(() => {
                setLoading(false);
            });

    }, [id]);

    if (notFound) {
        return <NotFound />;
    }

    return (
        <div className={styles.page}>
            <button
                className={styles.backButton}
                type="button"
                onClick={() => navigate(-1)}
            >
                Indietro
            </button>

            <section className={styles.hero}>
                <div className={styles.heroText}>
                    <span className={styles.eyebrow}>
                        {driver.team?.name || "Formula 1 Driver"}
                    </span>

                    <h1>
                        <span>{driver.first_name}</span>
                        {driver.last_name}
                    </h1>

                    <p className={styles.slogan}>{driver.driver_slogan}</p>

                    <p className={styles.biography}>
                        {driver.biography}
                    </p>
                </div>


                <div className={styles.number}>
                    #{driver.driver_number}
                </div>

                <img
                    className={styles.driverImage}
                    src={`${backEndUrl}storage/${driver.photo}`}
                    alt={`${driver.first_name} ${driver.last_name}`}
                />

                <div className={styles.heroInfo}>
                    <div>
                        <span>Nazionalit&agrave;</span>
                        <strong>{driver.nationality}</strong>
                    </div>

                    <div>
                        <span>Data di nascita</span>
                        <strong>{driver.date_of_birth}</strong>
                    </div>

                    <div>
                        <span>Stagione</span>
                        <strong>{driver.season}</strong>
                    </div>
                </div>
            </section>

            <section className={styles.statsGrid}>
                <article>
                    <span>Vittorie</span>
                    <strong>{driver.total_wins}</strong>
                </article>

                <article>
                    <span>Pole Positions</span>
                    <strong>{driver.total_pole_positions}</strong>
                </article>

                <article>
                    <span>Podi</span>
                    <strong>{driver.total_podiums}</strong>
                </article>

                <article>
                    <span>Titoli Mondiali</span>
                    <strong>{driver.total_world_championships}</strong>
                </article>
            </section>

            {driver.team && (
                <section className={styles.teamSection}>
                    <Link
                        to={`/teams/${driver.team.id}`}
                        className={styles.teamCard}
                    >
                        <div className={styles.teamContent}>
                            <div className={styles.teamHeader}>
                                <div className={styles.teamLogoBox}>
                                    <img
                                        src={`${backEndUrl}storage/${driver.team.logo_image}`}
                                        alt={driver.team.name}
                                    />
                                </div>

                                <div>
                                    <span className={styles.kicker}>Team Attuale</span>
                                    <h2>{driver.team.name}</h2>
                                    <p>{driver.team.full_name}</p>
                                </div>
                            </div>

                            <div className={styles.teamMeta}>
                                <div>
                                    <span>Sede</span>
                                    <strong>{driver.team.base_city}</strong>
                                </div>

                                <div>
                                    <span>Team Principal</span>
                                    <strong>{driver.team.team_chief}</strong>
                                </div>

                                <div>
                                    <span>Direttore Tecnico</span>
                                    <strong>{driver.team.technical_chief}</strong>
                                </div>

                                <div>
                                    <span>Titoli Mondiali</span>
                                    <strong>{driver.team.total_world_championships}</strong>
                                </div>
                            </div>
                        </div>
                    </Link>
                </section>
            )}

        </div>
    )
}