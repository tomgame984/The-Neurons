import { LoginPage } from "../Login/loginPage"
import { useNavigate } from "react-router-dom";
export const HomePage = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/signup");
    }
    return (
        <>
            <LoginPage />
            <div style={{ position: "relative", marginTop: "-50px", textAlign: "center" }}>
                <button onClick={handleNavigation} style={{ padding: "10px", backgroundColor: "teal", color: "#fff", border: "none", cursor: "pointer" }}>
                    Join The Neurons
                </button>
            </div>
        </>
    );



}