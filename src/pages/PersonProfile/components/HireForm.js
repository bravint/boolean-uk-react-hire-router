import { useState } from "react";
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
        setHiredPeople([...hiredPeople, newPerson]);
        navigate("/dashboard", { replace: true });
    }
 
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
