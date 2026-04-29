import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Teams() {

    const backEndUrl = import.meta.env.VITE_BACKEND_URL;

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios.get(`${backEndUrl}api/teams`)
            .then(res => {
                setTeams(res.data.data);
            })

    }, []);

    return (
        <>
            <h1>Pagina Teams</h1>
            <div style={{ padding: "20px" }}>

                {teams.map(team => (
                    <div
                        key={team.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "16px",
                            marginBottom: "20px",
                            borderRadius: "10px"
                        }}
                    >
                        <Link to={`/teams/${team.id}`}>
                            Vai al team
                        </Link>

                        {/* TEAM HEADER */}
                        <h2>{team.name}</h2>
                        <h4>{team.full_name}</h4>

                        <p>📍 Base: {team.base_city}</p>
                        <p>👔 Team Chief: {team.team_chief}</p>
                        <p>⚙️ Technical Chief: {team.technical_chief}</p>
                        <p>🏆 Titoli mondiali: {team.total_world_championships}</p>

                        <hr />

                        {/* CAR SPECS */}
                        {team.car_specs && (
                            <div>
                                <h3>🚗 Car Specs</h3>
                                <p>Chassis: {team.car_specs.chassis}</p>
                                <p>Peso: {team.car_specs.weight_kg} kg</p>
                                <p>Sospensioni anteriori: {team.car_specs.front_suspension}</p>
                                <p>Sospensioni posteriori: {team.car_specs.rear_suspension}</p>

                                {/* POWER UNIT */}
                                {team.car_specs.power_unit && (
                                    <div>
                                        <h4>🔋 Power Unit</h4>
                                        <p>Nome: {team.car_specs.power_unit.name}</p>
                                        <p>Costruttore: {team.car_specs.power_unit.manufacturer}</p>
                                        <p>Season: {team.car_specs.power_unit.season}</p>
                                    </div>
                                )}
                            </div>
                        )}

                        <hr />

                        {/* DRIVERS */}
                        <h3>🏎️ Drivers</h3>

                        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                            {team.drivers?.map(driver => (
                                <div
                                    key={driver.id}
                                    style={{
                                        border: "1px solid #ddd",
                                        padding: "10px",
                                        borderRadius: "8px",
                                        width: "250px"
                                    }}
                                >
                                    <h4>
                                        {driver.first_name} {driver.last_name}
                                    </h4>

                                    <p>🇳🇱 {driver.nationality}</p>
                                    <p># {driver.driver_number}</p>
                                    <p>🏁 Wins: {driver.total_wins}</p>
                                    <p>🏆 Podiums: {driver.total_podiums}</p>

                                    <p style={{ fontSize: "12px" }}>
                                        {driver.biography?.slice(0, 120)}...
                                    </p>
                                </div>


                            ))}
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}