import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/authentication";

export const SignupPage = () => {
const [name, setName] = useState("");
const [surname, setSurname] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errorMessage, setErrorMessage] = useState("");
const [neurodiversity, setNeurodiversity] = useState("");
const navigate = useNavigate();

const handleSubmit = async (event) => {
event.preventDefault();
try {
    console.log("redirecting...:");
    await signup(name, surname, email, password, neurodiversity);
    navigate("/");
} catch (err) {
    console.log("i am here")
    console.error(err);
    console.log("line break")
    console.error("error msg", err.message);
    setErrorMessage(err.message)
    navigate("/signup");
}
};

const handlefirstNameChange = (event) => {
setName(event.target.value);
};

const handlelastNameChange = (event) => {
setSurname(event.target.value);
};

const handleEmailChange = (event) => {
setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
setPassword(event.target.value);
};

const handleNeurodiversityChange = (event) => {
setNeurodiversity(event.target.value);
};


return (
<>
    <h2>Signup</h2>
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">First Name:</label>
    <input
        id="firstName"
        placeholder="First Name"
        role="name"
        type="text"
        value={name}
        onChange={handlefirstNameChange}
    />
    <label htmlFor="Surname">Surname:</label>
    <input
        id="Surname"
        placeholder="Surname"
        role="surname"
        type="text"
        value={surname}
        onChange={handlelastNameChange}
    />
    <label htmlFor="email">Email:</label>
    <input
        id="email"
        placeholder="Email"
        role="email"
        type="text"
        value={email}
        onChange={handleEmailChange}
    />
    <label htmlFor="password">Password:</label>
    <input
        placeholder="Password"
        id="password"
        type="password"
        role="password"
        value={password}
        onChange={handlePasswordChange}
    />
    <label htmlFor="Neurodiversity">Neurodiversity:</label>
    <input
        placeholder="Neurodiversity"
        id="Neurodiversity"
        role="neurodiversity"
        type="text"
        value={neurodiversity}
        onChange={handleNeurodiversityChange}
    />
    
    <input role="submit-button" id="submit" type="submit" value="Join us" />
    </form>

    {errorMessage && (
    <div role="signup-error-msg" style={{ color: 'white', marginTop: '0.5rem' }}>
    {errorMessage}
    </div>
)}
</>
);
};
