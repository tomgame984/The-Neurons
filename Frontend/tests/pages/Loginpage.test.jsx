import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

// import { useNavigate } from "react-router-dom";
// import { login } from "../../src/services/authentication";

import { LoginPage } from "../../src/pages/Login/loginPage";

// Mocking React Router's useNavigate function
// vi.mock("react-router-dom", () => {
// const navigateMock = vi.fn();
// const useNavigateMock = () => navigateMock; // Create a mock function for useNavigate
// return { useNavigate: useNavigateMock };
// });

// // Mocking the login service
// vi.mock("../../src/services/authentication", () => {
// const loginMock = vi.fn();
// return { login: loginMock };
// });

// Reusable function for filling out login form
const completeLoginForm = async () => {
const user = userEvent.setup();

const emailInputEl = screen.getByLabelText("Email:");
const passwordInputEl = screen.getByLabelText("Password:");
const submitButtonEl = screen.getByRole("submit-button");

await user.type(emailInputEl, "test@email.com");
await user.type(passwordInputEl, "1234");
await user.click(submitButtonEl);
};

describe("Login Page unit testing", () => {
    test("that login page renders", () => {
        render(<LoginPage />)
        const emailInputEl = screen.getByRole("email");
        const passwordInputEl = screen.getByRole("password");
        const submitButtonEl = screen.getByRole("submit-button");
        expect(emailInputEl).to.exist
        expect(passwordInputEl).to.exist
        expect(submitButtonEl).to.exist

    })
    test("that login page fields accept values", async () => {
        render(<LoginPage />)
        const user = userEvent.setup();

        const emailInputEl = screen.getByRole("email");
        const passwordInputEl = screen.getByRole("password");

        await user.type(emailInputEl, "test@email.com");
        await user.type(passwordInputEl, "1234");
    
        expect(emailInputEl.value).toBe("test@email.com")
        expect(passwordInputEl.value).toBe("1234")

    })

// beforeEach(() => {
// vi.resetAllMocks();
// });

// test("allows a user to login", async () => {
// render(<LoginPage />);

// await completeLoginForm();

// expect(login).toHaveBeenCalledWith("test@email.com", "1234");
// });

// test("navigates to /posts on successful login", async () => {
// render(<LoginPage />);

// login.mockResolvedValue("secrettoken123");
// const navigateMock = useNavigate();

// await completeLoginForm();

// expect(navigateMock).toHaveBeenCalledWith("/posts");
// });

// test("navigates to /login on unsuccessful login", async () => {
// render(<LoginPage />);

// login.mockRejectedValue(new Error("Error logging in"));
// const navigateMock = useNavigate();

// await completeLoginForm();

// expect(navigateMock).toHaveBeenCalledWith("/login");
// });

// test("shows error message on an unsucessful login", async () => {
// render(<LoginPage />);
// login.mockRejectedValue(new Error("Error loggin in"));
// await completeLoginForm();


// expect(screen.getByText("Invalid email or password. Please try again.")).toBeInTheDocument();
// })
});
