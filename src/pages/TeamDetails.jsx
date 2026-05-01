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
                        <span className={styles.eyebrow}>Team</span>
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
                        <span>Sede</span>
                        <strong>{team.base_city}</strong>
                    </div>

                    <div>
                        <span>Team Principal</span>
                        <strong>{team.team_chief}</strong>
                    </div>

                    <div>
                        <span>Direttore Tecnico</span>
                        <strong>{team.technical_chief}</strong>
                    </div>

                    <div>
                        <span>Titoli Mondiali</span>
                        <strong>{team.total_world_championships}</strong>
                    </div>
                </div>
            </section>

            <section className={styles.infoGrid}>
                <article className={styles.panel}>
                    <span className={styles.kicker}>Profilo</span>
                    <h2>Team</h2>

                    <div className={styles.dataList}>
                        <div>
                            <span>Debutto</span>
                            <strong>{team.first_team_entry}</strong>
                        </div>

                        <div>
                            <span>Pilota di riserva</span>
                            <strong>{team.reserve_driver}</strong>
                        </div>

                        <div>
                            <span>Nome completo</span>
                            <strong>{team.full_name}</strong>
                        </div>
                    </div>
                </article>

                {team.car_specs && (
                    <article className={styles.panel}>
                        <span className={styles.kicker}>Tecnica</span>
                        <h2>Monoposto</h2>

                        <div className={styles.dataList}>
                            <div>
                                <span>Telaio</span>
                                <strong>{team.car_specs.chassis}</strong>
                            </div>

                            <div>
                                <span>Peso</span>
                                <strong>{team.car_specs.weight_kg} kg</strong>
                            </div>

                            <div>
                                <span>Sospensioni anteriori</span>
                                <strong>{team.car_specs.front_suspension}</strong>
                            </div>

                            <div>
                                <span>Sospensioni posteriori</span>
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
                                <span>Costruttore</span>
                                <strong>{team.car_specs.power_unit.manufacturer}</strong>
                            </div>

                            <div>
                                <span>Stagione</span>
                                <strong>{team.car_specs.power_unit.season}</strong>
                            </div>
                        </div>
                    </article>
                )}
            </section>

            <section className={styles.driversSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.kicker}>Formazione</span>
                    <h2>Piloti</h2>
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