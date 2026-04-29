import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function TeamDetails({ setLoading }) {

    const navigate = useNavigate();

    const backEndUrl = import.meta.env.VITE_BACKEND_URL;

    const { id } = useParams();

    const [team, setTeam] = useState({
        drivers: [],
        car_specs: null
    });

    useEffect(() => {
        setLoading(true);
        axios.get(`${backEndUrl}api/teams/${id}`)
            .then(res => {
                setTeam(res.data.data);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [id]);

    return (
        <>
            <h1>Pagina del singolo team</h1>

            <button onClick={() => navigate(-1)}>
                ← Indietro
            </button>

            <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>

                {/* HEADER TEAM */}
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>

                    <img
                        src={`${backEndUrl}storage/${team.logo_image}`}
                        alt={team.name}
                        style={{
                            width: "120px",
                            height: "120px",
                            objectFit: "contain"
                        }}
                    />

                    <div>
                        <h1>{team.name}</h1>
                        <h3>{team.full_name}</h3>

                        <p>📍 {team.base_city}</p>
                        <p>👔 Team Chief: {team.team_chief}</p>
                        <p>⚙️ Technical Chief: {team.technical_chief}</p>
                        <p>🏆 World Championships: {team.total_world_championships}</p>
                        <p>📅 First Entry: {team.first_team_entry}</p>
                        <p>🪪 Reserve Driver: {team.reserve_driver}</p>
                    </div>
                </div>

                <hr style={{ margin: "20px 0" }} />

                {/* CAR SPECS */}
                {team.car_specs && (
                    <div>

                        <h2>🚗 Car Specs</h2>

                        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>

                            <img
                                src={`${backEndUrl}storage/${team.car_specs.car_image}`}
                                alt="car"
                                style={{
                                    width: "250px",
                                    height: "150px",
                                    objectFit: "cover",
                                    borderRadius: "10px"
                                }}
                            />

                            <div>
                                <p>🏁 Chassis: {team.car_specs.chassis}</p>
                                <p>⚖️ Weight: {team.car_specs.weight_kg} kg</p>
                                <p>🔧 Front Suspension: {team.car_specs.front_suspension}</p>
                                <p>🔧 Rear Suspension: {team.car_specs.rear_suspension}</p>

                                {team.car_specs.power_unit && (
                                    <>
                                        <p>⚡ Power Unit: {team.car_specs.power_unit.name}</p>
                                        <p>🏭 Manufacturer: {team.car_specs.power_unit.manufacturer}</p>
                                        <p>📆 Season: {team.car_specs.power_unit.season}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <hr style={{ margin: "20px 0" }} />

                {/* DRIVERS */}
                <h2>🏎️ Drivers</h2>

                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

                    {team.drivers.map(driver => (
                        <div
                            key={driver.id}
                            style={{
                                border: "1px solid #ddd",
                                padding: "15px",
                                borderRadius: "12px",
                                width: "280px"
                            }}
                        >

                            {/* DRIVER IMAGE */}
                            <img
                                src={`${backEndUrl}storage/${driver.photo}`}
                                alt={driver.first_name}
                                style={{
                                    width: "100%",
                                    height: "180px",
                                    objectFit: "cover",
                                    objectPosition: "center top",
                                    borderRadius: "10px",
                                    marginBottom: "10px"
                                }}
                            />

                            {/* INFO */}
                            <h3>
                                {driver.first_name} {driver.last_name}
                            </h3>

                            <p>#{driver.driver_number}</p>
                            <p>🇳🇱 {driver.nationality}</p>
                            <p>📅 {driver.date_of_birth}</p>

                            <p>🏁 Wins: {driver.total_wins}</p>
                            <p>🥇 Poles: {driver.total_pole_positions}</p>
                            <p>🏆 Podiums: {driver.total_podiums}</p>

                            <p style={{ fontSize: "12px", marginTop: "10px" }}>
                                {driver.driver_slogan}
                            </p>
                            <Link to={`/drivers/${driver.id}`}>
                                Vai al Pilota
                            </Link>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}