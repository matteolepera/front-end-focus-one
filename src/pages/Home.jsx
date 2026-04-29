import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>Home Page</h1>

            <section className="section">
                <img src="/images/hero.jpg" alt="hero" />

                <h2>The new Era of Speed</h2>
                <p>
                    Discover the Team and Drivers

                    shaping the 2026 season and beyond
                </p>

            </section>
            <hr></hr>

            <section className="section">
                <img src="/images/teams.jpg" alt="Team" />

                <h2>Team</h2>
                <p>
                    Scopri tutti i team della competizione, la loro storia e le loro performance.
                </p>

                <Link to={"/teams"}>
                    <button>Visualizza tutti i team</button>
                </Link>
            </section>
            <hr></hr>
            <section className="section">
                <img src="/images/drivers.jpg" alt="driver" />

                <h2>Driver</h2>
                <p>
                    Scopri tutti i piloti della competizione, la loro storia e le loro performance.
                </p>

                <Link to={"/drivers"}>
                    <button>Visualizza tutti i piloti</button>
                </Link>
            </section>
            <hr></hr>

        </>
    )
}