import { useState, useEffect } from "react";
import { useLocation } from "react-router";

import HireForm from "./components/HireForm";

function PersonProfile(props) {
    const { setHiredPeople, hiredPeople } = props;

    const [person, setPerson] = useState(null);

    const location = useLocation();

    useEffect(() => {
        if (location.state) {
            const { person } = location.state;
            console.log("personProfile", { person });
            setPerson(person);
        }
    }, [location]);

    if (!person) return <p>Loading...</p>;

    return (
        <article>
            <h2>
                {person.name.first} {person.name.last}
            </h2>
            <HireForm
                person={person}
                setHiredPeople={setHiredPeople}
                hiredPeople={hiredPeople}
            />
        </article>
    );
}

export default PersonProfile;
