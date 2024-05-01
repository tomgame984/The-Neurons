import { LoginPage } from "../Login/loginPage"
import { useNavigate } from "react-router-dom";
export const HomePage = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/signup");
    }
    return(
        <>
        
            <LoginPage />
        
        <div role="signup-navigation-link">
            <button role="navigation-to-signup" onClick={handleNavigation}>Join The Neurons</button>
        </div>
        </>
    )



}