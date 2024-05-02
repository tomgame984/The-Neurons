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
<h2 style={{ marginBottom: "2px", textAlign: "center", marginTop: "30px"}} role="login-heading">
    Login
  </h2>
<div style={{ display: "flex", justifyContent: "center", alignItems: "center", top }}>

    
    <form onSubmit={handleSubmit} role= "login-form" style={{ display: "flex", flexDirection: "column", marginBottom: "2%" }}>
    <label htmlFor="email" style={{ marginBottom: "10px" }}>Email:</label>
    <input
        id="email"
        placeholder="Email"
        type="text"
        role="email"
        value={email}
        onChange={handleEmailChange}
        style={{ marginBottom: "10px", padding: "5px" }}
    />
    <label htmlFor="password" style={{ marginBottom: "10px" }}>Password:</label>
    <input
        id="password"
        placeholder="Password"
        type="password"
        role="password"
        value={password}
        onChange={handlePasswordChange}
        style={{ marginBottom: "10px", padding: "5px" }}
    />
    <input role="submit-button" id="submit" type="submit" value="Log in" style={{ padding: "10px", backgroundColor: "teal", color: "#fff", border: "none", cursor: "pointer" }}/>
    <p role="login-error-msg" style={{color: "red", marginTop: "10px"}}>{errorMessage}</p>
    </form>
   
    </div>
</>
);
};
