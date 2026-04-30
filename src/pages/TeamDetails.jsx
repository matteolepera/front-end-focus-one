import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import DriverLineupCard from "../components/DriverLineupCard"
import styles from "../styles/TeamDetails.module.css"

export default function TeamDetails({ setLoading }) {

    const navigate = useNavigate();

    const backEndUrl = import.meta.env.VITE_BACKEND_URL;

    const { id } = useParams();

    const [team, setTeam] = useState({
        drivers: [],
        car_specs: null
    });

    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`${backEndUrl}api/teams/${id}`)
            .then(res => {
                setTeam(res.data.data);
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
                <div className={styles.heroContent}>
                    <div className={styles.logoBox}>
                        <img
                            src={`${backEndUrl}storage/${team.logo_image}`}
                            alt={team.name}
                        />
                    </div>

                    <div>
                        <span className={styles.eyebrow}>Formula 1 Team</span>
                        <h1>{team.name}</h1>
                        <p>{team.full_name}</p>
                    </div>
                </div>

                {team.car_specs?.car_image && (
                    <img
                        className={styles.carImage}
                        src={`${backEndUrl}storage/${team.car_specs.car_image}`}
                        alt={`Monoposto ${team.name}`}
                    />
                )}

                <div className={styles.stats}>
                    <div>
                        <span>Base</span>
                        <strong>{team.base_city}</strong>
                    </div>

                    <div>
                        <span>Team Chief</span>
                        <strong>{team.team_chief}</strong>
                    </div>

                    <div>
                        <span>Technical Chief</span>
                        <strong>{team.technical_chief}</strong>
                    </div>

                    <div>
                        <span>World Titles</span>
                        <strong>{team.total_world_championships}</strong>
                    </div>
                </div>
            </section>

            <section className={styles.infoGrid}>
                <article className={styles.panel}>
                    <span className={styles.kicker}>Identity</span>
                    <h2>Team Profile</h2>

                    <div className={styles.dataList}>
                        <div>
                            <span>First Entry</span>
                            <strong>{team.first_team_entry}</strong>
                        </div>

                        <div>
                            <span>Reserve Driver</span>
                            <strong>{team.reserve_driver}</strong>
                        </div>

                        <div>
                            <span>Full Name</span>
                            <strong>{team.full_name}</strong>
                        </div>
                    </div>
                </article>

                {team.car_specs && (
                    <article className={styles.panel}>
                        <span className={styles.kicker}>Engineering</span>
                        <h2>Car Specs</h2>

                        <div className={styles.dataList}>
                            <div>
                                <span>Chassis</span>
                                <strong>{team.car_specs.chassis}</strong>
                            </div>

                            <div>
                                <span>Weight</span>
                                <strong>{team.car_specs.weight_kg} kg</strong>
                            </div>

                            <div>
                                <span>Front Suspension</span>
                                <strong>{team.car_specs.front_suspension}</strong>
                            </div>

                            <div>
                                <span>Rear Suspension</span>
                                <strong>{team.car_specs.rear_suspension}</strong>
                            </div>
                        </div>
                    </article>
                )}

                {team.car_specs?.power_unit && (
                    <article className={styles.panel}>
                        <span className={styles.kicker}>Power Unit</span>
                        <h2>{team.car_specs.power_unit.name}</h2>

                        <div className={styles.dataList}>
                            <div>
                                <span>Manufacturer</span>
                                <strong>{team.car_specs.power_unit.manufacturer}</strong>
                            </div>

                            <div>
                                <span>Season</span>
                                <strong>{team.car_specs.power_unit.season}</strong>
                            </div>
                        </div>
                    </article>
                )}
            </section>

            <section className={styles.driversSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.kicker}>The Lineup</span>
                    <h2>Drivers</h2>
                </div>

                <div className={styles.driversGrid}>
                    {team.drivers?.map((driver) => (
                        <DriverLineupCard
                            key={driver.id}
                            driver={driver}
                            backEndUrl={backEndUrl}
                        />
                    ))}
                </div>

            </section>
        </div>
    )
}