import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { login } from "../../services/authentication";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const [token, userId, event_history] = await login(email, password);
      console.log(userId);
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("events", JSON.stringify(event_history));

      setEmail("");
      setPassword("");
      navigate("/Dashboard");
    } catch (err) {
      console.error(err);
      setEmail("");
      setPassword("");
      console.log(email);
      setErrorMessage("Invalid email or password. Please try again.");
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
          <p role="login-error-msg" style={{ color: "red" }}>
            {errorMessage}
          </p>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f0f0f0",
          margin: "10px",
          borderRadius: "10px",
          minWidth: "320px",
          minHeight: "300px",
          boxShadow: "0px 0px 9px -3px rgba(143,143,143,1)"
        }}
      >
        <h2 role="login-heading">Login</h2>

        <form onSubmit={handleSubmit} role="login-form">
          <label
            htmlFor="email"
            style={{ fontSize: "12px", position: "relative", right: "92px" }}
          >
            Email:
          </label>
          <TextField
            id="email"
            placeholder="Email"
            type="text"
            role="email"
            value={email}
            onChange={handleEmailChange}
            sx={{ marginBottom: "15px", display: "block" }}
          />
          <label
            htmlFor="password"
            style={{ fontSize: "12px", position: "relative", right: "81px" }}
          >
            Password:
          </label>
          <TextField
            id="password"
            placeholder="Password"
            type="password"
            role="password"
            value={password}
            onChange={handlePasswordChange}
            sx={{ display: "block" }}
          />
          <Button
            variant="outlined"
            role="submit-button"
            id="submit"
            type="submit"
            value="Log in"
            sx={{ margin: "20px" }}
          >Log In</Button>
        </form>
      </Box>
    </>
  );
};
