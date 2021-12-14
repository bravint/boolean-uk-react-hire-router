import { useState } from "react";

import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard/index";
import PersonProfile from "./pages/PersonProfile/index";

import "./styles.css";

export default function App() {
    const [hiredPeople, setHiredPeople] = useState([]);

    return (
        <>
            <header>
                <h1>Hire Your Team</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route
                    path="/dashboard"
                    element={<Dashboard hiredPeople={hiredPeople} />}
                />
                <Route
                    path="/view/:id"
                    element={
                        <PersonProfile
                            hiredPeople={hiredPeople}
                            setHiredPeople={setHiredPeople}
                        />
                    }
                />
            </Routes>
        </>
    );
}
