import axios from "axios";
import { useEffect, useState } from "react";


export default function Drivers() {

    const backEndUrl = import.meta.env.VITE_BACKEND_URL;

    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        axios.get(`${backEndUrl}api/drivers`)
            .then(res => {
                setDrivers(res.data.data);
            })

    }, []);
    return (
        <>
            <h1>Pagina Piloti</h1>
            <div style={{ padding: "20px" }}>

                {drivers.map((driver, index) => (
                    <div
                        key={driver.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "20px",
                            borderRadius: "12px",
                            marginBottom: "20px"
                        }}
                    >

                        {/* INDEX */}
                        <h3>Index: {index}</h3>

                        {/* HEADER CON IMMAGINE */}
                        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>

                            <img
                                src={`${backEndUrl}storage/${driver.photo}`}
                                alt={`${driver.first_name} ${driver.last_name}`}
                                style={{
                                    width: "150px",
                                    height: "150px",
                                    objectFit: "cover",
                                    objectPosition: "center top",
                                    borderRadius: "12px"
                                }}
                            />

                            <div>
                                <h1>
                                    {driver.first_name} {driver.last_name}
                                </h1>

                                <h2>#{driver.driver_number}</h2>

                                <p>🇳🇱 {driver.nationality}</p>
                                <p>📅 {driver.date_of_birth}</p>
                                <p>📆 Season: {driver.season}</p>
                                <p>💬 "{driver.driver_slogan}"</p>
                            </div>
                        </div>

                        <hr />

                        {/* STATS */}
                        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>

                            <div>
                                <p>🏁 Wins</p>
                                <strong>{driver.total_wins}</strong>
                            </div>

                            <div>
                                <p>🥇 Pole Positions</p>
                                <strong>{driver.total_pole_positions}</strong>
                            </div>

                            <div>
                                <p>🏆 Podiums</p>
                                <strong>{driver.total_podiums}</strong>
                            </div>

                            <div>
                                <p>🌍 Titles</p>
                                <strong>{driver.total_world_championships}</strong>
                            </div>
                        </div>

                        <hr />

                        {/* BIO */}
                        <h3>Biography</h3>
                        <p style={{ lineHeight: "1.6" }}>
                            {driver.biography}
                        </p>

                        <hr />


                        {/* TEAM */}
                        {driver.team && (
                            <div>
                                <h3>🏎️ Team</h3>

                                <p><b>{driver.team.name}</b></p>
                                <p>{driver.team.full_name}</p>

                                <p>📍 {driver.team.base_city}</p>
                                <p>👔 {driver.team.team_chief}</p>
                                <p>⚙️ {driver.team.technical_chief}</p>
                                <p>🏆 Championships: {driver.team.total_world_championships}</p>
                            </div>
                        )}

                    </div>
                ))}

            </div>
        </>
    )
}