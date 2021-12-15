/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HireForm(props) {
    const { person, setHiredPeople, hiredPeople } = props;

    let navigate = useNavigate();

    const [wage, setWage] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();
        let newPerson = JSON.parse(JSON.stringify(person));
        let wageOffer = { wage: wage };
        Object.assign(newPerson, wageOffer);
        const objIndex = hiredPeople.findIndex(
            (element) => element.login.uuid === person.login.uuid
        );
        const newHiredList = hiredPeople.filter(
            (element) => element.login.uuid !== person.login.uuid
        );
        newHiredList.splice(objIndex, 0, newPerson);
        setHiredPeople(newHiredList);
        navigate("/dashboard", { replace: true });
    }

    useEffect(() => {
        if (person.wage) setWage(person.wage);
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="wage">Wage Offer</label>
            <input
                type="text"
                id="wage"
                name="wage"
                onChange={(e) => setWage(e.target.value)}
                value={wage}
            />
            <button type="submit">Hire</button>
        </form>
    );
}

export default HireForm;
