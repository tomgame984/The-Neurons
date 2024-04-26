import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { vi } from "vitest";
import { HomePage } from "../../src/pages/Landing/Homepage";

// Mocking React Router's useNavigate function
vi.mock("react-router-dom", () => {
    const navigateMock = vi.fn();
    const useNavigateMock = () => navigateMock; // Create a mock function for useNavigate
    return { useNavigate: useNavigateMock };
    });

describe("Home page unit testing", () => {
    test("that Homepage renders login component", () => {

        render(<HomePage />)
        const loginHeading = screen.getByRole("login-heading")
        const loginForm = screen.getAllByRole("login-form")
        expect(loginForm).to.exist
        expect(loginHeading.textContent).toBe("Login")
    })

    test("that Homepage has navigate link to signup route", () => {

        render(<HomePage />)
        const signupLink = screen.getByRole("signup-navigation-link")
        expect(signupLink).to.exist
        expect(signupLink.textContent).toBe("Join The Neurons")
    })

    test("navigates to /signup when clicked", async () => {
        render(<HomePage />)

        // const user = userEvent.setup();
        const navigateMock = useNavigate();
        const navigationToSignup = screen.getByRole("navigation-to-signup")
        
        await act(async () => {
            await userEvent.click(navigationToSignup);
        });
    
        expect(navigateMock).toHaveBeenCalledWith("/signup");
        });
})