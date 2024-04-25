import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, vi } from "vitest";

// import { useNavigate } from "react-router-dom";
// import { signup } from "../../src/services/authentication";

import { SignupPage } from "../../src/pages/SignupPage";

// Mocking the signup service
vi.mock("../../src/services/authentication", () => {
const signupMock = vi.fn();
return { signup: signupMock };
});

// Reusable function for filling out signup form
const completeSignupForm = async () => {
const user = userEvent.setup();
const firstName = screen.getByRole("name")
const lastName = screen.getByRole("surname")
const emailInputEl = screen.getByRole("email");
const passwordInputEl = screen.getByRole("password");
const neurodiversity = screen.getByRole("neurodiversity");
const submitButtonEl = screen.getByRole("submit-button");

await user.type(firstName, "userfirstName")
await user.type(lastName, "userlastName")
await user.type(emailInputEl, "test@email.com");
await user.type(passwordInputEl, "1234");
await user.type(neurodiversity, "None");
await user.click(submitButtonEl);
};

describe("Signup Page unit testing", () => {
    test("Signup Page renders with input fields", () => {
        render(<SignupPage />)
        const firstName = screen.getByRole("name")
        const lastName = screen.getByRole("surname")
        const emailInputEl = screen.getByRole("email");
        const passwordInputEl = screen.getByRole("password");
        const neurodiversity = screen.getByRole("neurodiversity");
        const submitButtonEl = screen.getByRole("submit-button");
        expect(firstName).to.exist
        expect(lastName).to.exist
        expect(emailInputEl).to.exist
        expect(passwordInputEl).to.exist
        expect(neurodiversity).to.exist
        expect(submitButtonEl).to.exist

    })

    test("Signup Page accepts input in fields", async() => {
        render(<SignupPage />)
        const user = userEvent.setup();
        const firstName = screen.getByRole("name")
        const lastName = screen.getByRole("surname")
        const emailInputEl = screen.getByRole("email");
        const passwordInputEl = screen.getByRole("password");
        const neurodiversity = screen.getByRole("neurodiversity");

        await user.type(firstName, "userfirstName")
        await user.type(lastName, "userlastName")
        await user.type(emailInputEl, "test@email.com");
        await user.type(passwordInputEl, "1234");
        await user.type(neurodiversity, "None");

        expect(firstName.value).toBe("userfirstName")
        expect(lastName.value).toBe("userlastName")
        expect(emailInputEl.value).toBe("test@email.com")
        expect(passwordInputEl.value).toBe("1234")
        expect(neurodiversity.value).toBe("None")

    })
// beforeEach(() => {
// vi.resetAllMocks();
// });

// test("allows a user to signup", async () => {
// render(<SignupPage />);

// await completeSignupForm();

// expect(submitButtonEl).toHaveBeenCalled();
// expect(signup).toHaveBeenCalledWith("userfirstName", "userlastName", "test@email.com", "1234", "None");
});

// test("navigates to /login on successful signup", async () => {
// render(<SignupPage />);

// const navigateMock = useNavigate();

// await completeSignupForm();

// expect(navigateMock).toHaveBeenCalledWith("/login");
// });

// test("navigates to /signup on unsuccessful signup", async () => {
// render(<SignupPage />);

// signup.mockRejectedValue(new Error("Error signing up"));
// const navigateMock = useNavigate();

// await completeSignupForm();

// expect(navigateMock).toHaveBeenCalledWith("/signup");
// });

