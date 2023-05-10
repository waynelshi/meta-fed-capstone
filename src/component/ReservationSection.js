import { useState } from "react";

const ReservationSection = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [occasion, setOccasion] = useState("occasion")
    const [diner, setDiner] = useState("one")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [request, setRequest] = useState("")

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setOccasion("occasion");
        setDiner("one");
        setDate("");
        setTime("");
        setRequest("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        AudioListener("Reservation submitted!");
        clearForm();
    }

    return(
        <div id="reservation-section">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h1>Reserve a Table</h1>
                    <div className="field name">
                        <label>First Name:</label>
                        <input placeholder="Your First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="field name">
                        <label>Last Name:</label>
                        <input placeholder="Your Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="field phone">
                        <label>Phone Number:</label>
                        <input placeholder="Your Contact Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="field email">
                        <label>Email Address:</label>
                        <input placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="field occasion">
                        <label>Occasion</label>
                        <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Celebration</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="field diner">
                        <label>Number of Diners</label>
                        <select value={diner} onChange={(e) => setDiner(e.target.value)}>
                            <option>one</option>
                            <option>two</option>
                            <option>three</option>
                            <option>four</option>
                            <option>five</option>
                            <option>more than five</option>
                        </select>
                    </div>
                    <div className="field date">
                        <label>Date</label>
                        <input 
                            type="date" 
                            name="reservation-date"
                            min="2023-01-01"
                            max="2024-12-31"
                            value={date}
                            onChange={(e)=>setDate(e.target.value)}
                        />
                    </div>
                    <div className="field time">
                        <label>Time</label>
                        <select value={time} onChange={(e) => setTime(e.target.value)}>
                            <option>10:30 ~ 11:00</option>
                            <option>11:00 ~ 11:30</option>
                            <option>11:30 ~ 12:00</option>
                            <option>12:00 ~ 12:30</option>
                            <option>12:30 ~ 13:00</option>
                            <option>13:00 ~ 13:30</option>
                            <option>-------------------</option>
                            <option>17:30 ~ 18:00</option>
                            <option>18:00 ~ 18:30</option>
                            <option>18:30 ~ 19:00</option>
                            <option>19:00 ~ 19:30</option>
                            <option>19:30 ~ 20:00</option>
                        </select>
                    </div>
                    <div className="field request">
                        <label>Other Requirement:</label>
                        <textarea placeholder="Enter any other requirements here..." type="text" value={request} onChange={(e)=>setRequest(e.target.value)} />
                    </div>
                </fieldset>
                <div className="submit-button">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default ReservationSection;