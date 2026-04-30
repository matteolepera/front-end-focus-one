import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TeamCard from "../components/TeamCard";
import styles from "../styles/Teams.module.css";


export default function Teams({ setLoading }) {

    const navigate = useNavigate();
    const backEndUrl = import.meta.env.VITE_BACKEND_URL;

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios.get(`${backEndUrl}api/teams`)
            .then(res => {
                setTeams(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    return (
        <div className={styles.teamsPage}>
            <header className={styles.header}>
                <button
                    className={styles.backButton}
                    type="button"
                    onClick={() => navigate(-1)}
                >
                    Indietro
                </button>

                <div>
                    <span className={styles.eyebrow}>Constructors</span>
                    <h1>Teams</h1>
                    <p>
                        Scopri le scuderie protagoniste della stagione, le monoposto
                        e i piloti che compongono la griglia.
                    </p>
                </div>
            </header>

            <section className={styles.grid}>
                {teams.map((team) => (
                    <TeamCard
                        key={team.id}
                        team={team}
                        backEndUrl={backEndUrl}
                    />
                ))}
            </section>
        </div>
    )
}