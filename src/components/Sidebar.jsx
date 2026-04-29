import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <>
            <h3>Sidebar</h3>
            <nav>
                <NavLink to={`/`}><img src="logo.jpg" alt="logo" />Home</NavLink>
                <NavLink to={`/teams`}>Teams</NavLink>
                <NavLink to={`/drivers`}>Piloti</NavLink>
            </nav>
            <hr></hr>
        </>
    )
}