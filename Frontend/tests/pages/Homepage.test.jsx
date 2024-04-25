import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { HomePage } from "../../src/pages/Landing/Homepage";

describe("Home page unit testing", () => {
    test("that Homepage renders login component", () => {

        render(<HomePage />)
        const loginHeading = screen.getByRole("login-heading")
        const loginForm = screen.getAllByRole("login-form")
        const homePageTitle = screen.getAllByRole("home-page-title")
        expect(loginForm).to.exist
        expect(homePageTitle).to.exist
        expect(loginHeading.textContent).toBe("Login")
        expect(homePageTitle.textContent).toBe("Home Page")
    })

    test("that Homepage has navigate link to signup route", () => {

        render(<HomePage />)
        const signupLink = screen.getByRole("signup-navigation-link")
        expect(signupLink).to.exist
        expect(signupLink.textContent).toBe("Join The Neurons")
    })
})