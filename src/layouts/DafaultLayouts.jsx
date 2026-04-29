import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar"


export default function DefaultLayout() {
    return (
        <>
            <Sidebar />
            <main>
                <Outlet />
            </main>

        </>
    )
}