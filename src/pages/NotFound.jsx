import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>404</h1>
            <h2>Page Not Found</h2>

            <p>La pagina che stai cercando non esiste.</p>

            <Link to="/">
                ← Torna alla Home
            </Link>
        </div>
    );
}