import { LoginPage } from "../Login/loginPage"

export const HomePage = () => {

    return(
        <>
        <title role="home-page-title">Home Page</title>
            <LoginPage />
        
        <div role="signup-navigation-link">
            <a href="/signup">Join The Neurons</a>
        </div>
        </>
    )



}