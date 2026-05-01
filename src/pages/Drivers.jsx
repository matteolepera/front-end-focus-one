import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DriverCard from "../components/DriverCard";
import styles from "../styles/Drivers.module.css"


export default function Drivers({ setLoading }) {

    const navigate = useNavigate();
    const backEndUrl = import.meta.env.VITE_BACKEND_URL;

    const [drivers, setDrivers] = useState([]);


    useEffect(() => {
        setLoading(true);
        axios.get(`${backEndUrl}api/drivers`)
            .then(res => {
                setDrivers(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    return (
        <div className={styles.driversPage}>
            <header className={styles.header}>
                <button
                    className={styles.backButton}
                    type="button"
                    onClick={() => navigate(-1)}
                >
                    Indietro
                </button>

                <div>
                    <span className={styles.eyebrow}>Griglia</span>
                    <h1>Piloti</h1>
                    <p>
                        I piloti della stagione 2026.
                    </p>
                </div>
            </header>

            <section className={styles.grid}>
                {drivers.map((driver) => (
                    <DriverCard
                        key={driver.id}
                        driver={driver}
                        backEndUrl={backEndUrl}
                    />
                ))}
            </section>
        </div>
    )
}