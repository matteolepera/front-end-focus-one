import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <>
            <h3>Sidebar</h3>
            <nav>
                <NavLink to={`/teams`}>Teams</NavLink>
                <NavLink to={`/drivers`}>Piloti</NavLink>
            </nav>
            <hr></hr>
        </>
    )
}