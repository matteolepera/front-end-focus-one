import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


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
        return navigate("/not-found");;
    }

    return (
        <>
            <h1>Pagina del singolo pilota</h1>

            <button onClick={() => navigate(-1)}>
                ← Indietro
            </button>

            <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>

                {/* HEADER */}
                <div
                    style={{
                        display: "flex",
                        gap: "25px",
                        alignItems: "center",
                        marginBottom: "30px"
                    }}
                >
                    <img
                        src={`${backEndUrl}storage/${driver.photo}`}
                        alt={`${driver.first_name} ${driver.last_name}`}
                        style={{
                            width: "220px",
                            height: "260px",
                            objectFit: "cover",
                            objectPosition: "center top",
                            borderRadius: "16px"
                        }}
                    />

                    <div>
                        <h1>
                            {driver.first_name} {driver.last_name}
                        </h1>

                        <h2>#{driver.driver_number}</h2>

                        <p>🌍 Nationality: {driver.nationality}</p>
                        <p>📅 Born: {driver.date_of_birth}</p>
                        <p>🏁 Season: {driver.season}</p>
                        <p>💬 "{driver.driver_slogan}"</p>
                    </div>
                </div>

                <hr />

                {/* STATS */}
                <h2>Statistics</h2>

                <div
                    style={{
                        display: "flex",
                        gap: "20px",
                        flexWrap: "wrap",
                        marginBottom: "30px"
                    }}
                >
                    <div>
                        <h3>🏁 Wins</h3>
                        <p>{driver.total_wins}</p>
                    </div>

                    <div>
                        <h3>🥇 Pole Positions</h3>
                        <p>{driver.total_pole_positions}</p>
                    </div>

                    <div>
                        <h3>🏆 Podiums</h3>
                        <p>{driver.total_podiums}</p>
                    </div>

                    <div>
                        <h3>🌍 Championships</h3>
                        <p>{driver.total_world_championships}</p>
                    </div>
                </div>

                <hr />

                {/* BIOGRAPHY */}
                <h2>Biography</h2>
                <p style={{ lineHeight: "1.7", marginBottom: "30px" }}>
                    {driver.biography}
                </p>

                <hr />

                {/* TEAM */}
                {driver.team && (
                    <div>
                        <h2>Team</h2>

                        <div
                            style={{
                                display: "flex",
                                gap: "20px",
                                alignItems: "center",
                                border: "1px solid #ccc",
                                padding: "20px",
                                borderRadius: "12px"
                            }}
                        >
                            <img
                                src={`${backEndUrl}storage/${driver.team.logo_image}`}
                                alt={driver.team.name}
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    objectFit: "contain"
                                }}
                            />

                            <div>
                                <h3>{driver.team.name}</h3>
                                <p>{driver.team.full_name}</p>
                                <p>📍 {driver.team.base_city}</p>
                                <p>👔 {driver.team.team_chief}</p>
                                <p>🏆 Championships: {driver.team.total_world_championships}</p>

                                <Link to={`/teams/${driver.team.id}`}>
                                    Vai al Team
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}