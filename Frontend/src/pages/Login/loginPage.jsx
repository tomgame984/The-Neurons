import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../services/authentication";

export const LoginPage = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errorMessage, setErrorMessage] = useState("")
const navigate = useNavigate();

const handleSubmit = async (event) => {
event.preventDefault();
try {
    const [token, userId, event_history] = await login(email, password);
    console.log(userId)
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId)
    localStorage.setItem("events", JSON.stringify(event_history));

    setEmail("")
    setPassword("")
    navigate("/Dashboard");
} catch (err) {
    console.error(err);
    setEmail("")
    setPassword("")
    console.log(email)
    setErrorMessage("Invalid email or password. Please try again.")
    navigate("/");
}
};

const handleEmailChange = (event) => {
setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
setPassword(event.target.value);
};

return (
<>
    <h2 role="login-heading">Login</h2>
    
    <form onSubmit={handleSubmit} role= "login-form">
    <label htmlFor="email">Email:</label>
    <input
        id="email"
        placeholder="Email"
        type="text"
        role="email"
        value={email}
        onChange={handleEmailChange}
    />
    <label htmlFor="password">Password:</label>
    <input
        id="password"
        placeholder="Password"
        type="password"
        role="password"
        value={password}
        onChange={handlePasswordChange}
    />
    <input role="submit-button" id="submit" type="submit" value="Log in" />
    </form>
    <p role="login-error-msg" style={{color: "red"}}>{errorMessage}</p>
</>
);
};
