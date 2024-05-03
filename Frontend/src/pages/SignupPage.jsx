import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/authentication";
import { Fireworks } from "@fireworks-js/react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";


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

  // const ref = useRef(null);

  return (
    <>
      <img src="/src/assets/image.png" style={{height: "100px", margin: "auto"}}></img>

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
          boxShadow: "0px 0px 9px -3px rgba(143,143,143,1)",
        }}
      >
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="name"
            style={{ fontSize: "12px", position: "relative", right: "80px" }}
          >
            First Name:
          </label>
          <TextField
            id="firstName"
            placeholder="First Name"
            role="name"
            type="text"
            value={name}
            onChange={handlefirstNameChange}
            sx={{ marginBottom: "15px", display: "block" }}
          />
          <label
            htmlFor="Surname"
            style={{ fontSize: "12px", position: "relative", right: "85px" }}
          >
            Surname:
          </label>
          <TextField
            id="Surname"
            placeholder="Surname"
            role="surname"
            type="text"
            value={surname}
            onChange={handlelastNameChange}
            sx={{ marginBottom: "15px", display: "block" }}
          />
          <label
            htmlFor="email"
            style={{ fontSize: "12px", position: "relative", right: "93px" }}
          >
            Email:
          </label>
          <TextField
            id="email"
            placeholder="Email"
            role="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
            sx={{ marginBottom: "15px", display: "block" }}
          />
          <label
            htmlFor="password"
            style={{ fontSize: "12px", position: "relative", right: "80px" }}
          >
            Password:
          </label>
          <TextField
            placeholder="Password"
            id="password"
            type="password"
            role="password"
            value={password}
            onChange={handlePasswordChange}
            sx={{ marginBottom: "15px", display: "block" }}
          />
          <label
            htmlFor="Neurodiversity"
            style={{ fontSize: "12px", position: "relative", right: "70px" }}
          >
            Neurodiversity:
          </label>
          <TextField
            placeholder="Neurodiversity"
            id="Neurodiversity"
            role="neurodiversity"
            type="text"
            value={neurodiversity}
            onChange={handleNeurodiversityChange}
            sx={{ marginBottom: "15px", display: "block" }}
          />

          <Button
            variant="outlined"
            role="submit-button"
            id="submit"
            type="submit"
            value="Join us"
            sx={{
              marginBottom: "20px",
            }}
          >Sign Up</Button>
        </form>
      </Box>
      {errorMessage && (
        <div
          role="signup-error-msg"
          style={{ color: "red", font: "bold", marginTop: "0.5rem" }}
        >
          {errorMessage}
        </div>
      )}
      {/* <div
        style={{
          top: "30%",
          left: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
          background: "transparent",
          zIndex: 0,
        }}
      > */}
        {/* <Fireworks
          // ref={ref}
          options={{ opacity: 0.5 }}
        /> */}
      {/* </div> */}
    </>
  );
};
