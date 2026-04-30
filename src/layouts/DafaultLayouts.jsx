import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar"


export default function DefaultLayout() {
    return (
        <>
            <Sidebar />
            <main style={{ marginLeft: "5.25rem" }}>
                <Outlet />
            </main>

        </>
    )
}