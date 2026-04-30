import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <span>F1</span>
                </div>

                <span className={styles.brandName}>FocusOne</span>
            </div>

            <button
                className={styles.toggle}
                type="button"
                aria-label={isOpen ? "Chiudi sidebar" : "Apri sidebar"}
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" />
                </svg>
            </button>

            <nav className={styles.nav}>
                <NavLink
                    to="/"
                    end
                    title="Home"
                    className={({ isActive }) =>
                        `${styles.link} ${isActive ? styles.active : ""}`
                    }
                >
                    <span className={styles.icon}>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 10.8 12 4l8 6.8V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9.2Z" />
                        </svg>
                    </span>
                    <span className={styles.label}>Home</span>
                </NavLink>

                <NavLink
                    to="/teams"
                    title="Teams"
                    className={({ isActive }) =>
                        `${styles.link} ${isActive ? styles.active : ""}`
                    }
                >
                    <span className={styles.icon}>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M5.2 14.5 6.8 10c.3-.9 1.1-1.5 2.1-1.5h6.2c1 0 1.8.6 2.1 1.5l1.6 4.5h.7c.8 0 1.5.7 1.5 1.5v2.2c0 .5-.4.8-.8.8h-1.4a2.6 2.6 0 0 1-5.1 0H10.3a2.6 2.6 0 0 1-5.1 0H3.8a.8.8 0 0 1-.8-.8V16c0-.8.7-1.5 1.5-1.5h.7Zm3.5-4.1-1.4 4.1h9.4l-1.4-4.1H8.7Zm-.9 8.9a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Zm8.4 0a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2ZM10 6.5h4l.7-2h-5.4l.7 2Z" />
                        </svg>
                    </span>
                    <span className={styles.label}>Teams</span>
                </NavLink>

                <NavLink
                    to="/drivers"
                    title="Piloti"
                    className={({ isActive }) =>
                        `${styles.link} ${isActive ? styles.active : ""}`
                    }
                >
                    <span className={styles.icon}>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 3C8.1 3 5 6.1 5 10v2.1c0 4.1 2.8 7.7 7 8.9 4.2-1.2 7-4.8 7-8.9V10c0-3.9-3.1-7-7-7Zm0 2c2.5 0 4.5 1.7 4.9 4H7.1c.4-2.3 2.4-4 4.9-4Zm-5 6h10v1.1c0 .7-.1 1.4-.4 2H7.4c-.3-.6-.4-1.3-.4-2V11Zm5 7.8c-1.4-.5-2.6-1.5-3.4-2.8h6.8c-.8 1.3-2 2.3-3.4 2.8Z" />
                        </svg>
                    </span>
                    <span className={styles.label}>Piloti</span>
                </NavLink>
            </nav>
        </aside>
    )
}