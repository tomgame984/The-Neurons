import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, vi } from "vitest";
import { useNavigate } from "react-router-dom";
import { signup } from "../../src/services/authentication";
import { SignupPage } from "../../src/pages/SignupPage";

// Mocking React Router's useNavigate function
vi.mock("react-router-dom", () => {
    const navigateMock = vi.fn();
    const useNavigateMock = () => navigateMock; // Create a mock function for useNavigate
    return { useNavigate: useNavigateMock };
    });

// Mocking the signup service
vi.mock("../../src/services/authentication", () => {
const signupMock = vi.fn();
return { signup: signupMock };
});

beforeEach(() => {
    vi.resetAllMocks();
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

    test("allows a user to signup", async () => {
    render(<SignupPage />);
    await completeSignupForm();
    expect(signup).toHaveBeenCalledWith("userfirstName", "userlastName", "test@email.com", "1234", "None");
    });

    test("navigates to /homepage on successful signup", async () => {
    render(<SignupPage />);

    const navigateMock = useNavigate();

    await completeSignupForm();

    expect(navigateMock).toHaveBeenCalledWith("/");
    });

    test("navigates to /signup on unsuccessful signup", async () => {
    render(<SignupPage />);

    signup.mockRejectedValue(new Error("Error signing up"));
    const navigateMock = useNavigate();

    await completeSignupForm();

    expect(navigateMock).toHaveBeenCalledWith("/signup");
    });

    test("throw an error on unsuccessful signup for missing password`", async () => {
        render(<SignupPage />);
        const user = userEvent.setup();
        const firstName = screen.getByRole("name")
        const lastName = screen.getByRole("surname")
        const emailInputEl = screen.getByRole("email");
        const neurodiversity = screen.getByRole("neurodiversity");
        
        const submitButtonEl = screen.getByRole("submit-button");

        await user.type(firstName, "userfirstName")
        await user.type(lastName, "userlastName")
        await user.type(emailInputEl, "test@email.com");
        await user.type(neurodiversity, "None");

        await act(async () => {
            await user.click(submitButtonEl);
        });
    
        await (() => {
            expect(screen.getByRole("signup-error-msg")).toBeInTheDocument();
        });
    });

    test("throw an error on unsuccessful signup for missing name`", async () => {
        render(<SignupPage />);
        const user = userEvent.setup();
        const lastName = screen.getByRole("surname")
        const emailInputEl = screen.getByRole("email");
        const passwordInputEl = screen.getByRole("password");
        const neurodiversity = screen.getByRole("neurodiversity");
        
        const submitButtonEl = screen.getByRole("submit-button");

        await user.type(lastName, "userlastName")
        await user.type(passwordInputEl, "ABCD1234$")
        await user.type(emailInputEl, "test@email.com");
        await user.type(neurodiversity, "None");

        await act(async () => {
            await user.click(submitButtonEl);
        });
    
        await (() => {
            expect(screen.getByRole("signup-error-msg")).toBeInTheDocument();
        });

        
    });

    test("throw an error on unsuccessful signup for missing last name`", async () => {
        render(<SignupPage />);
        const user = userEvent.setup();
        const firstName = screen.getByRole("name")
        const emailInputEl = screen.getByRole("email");
        const passwordInputEl = screen.getByRole("password");
        const neurodiversity = screen.getByRole("neurodiversity");
        
        const submitButtonEl = screen.getByRole("submit-button");

        await user.type(firstName, "userfirstName")
        await user.type(passwordInputEl, "ABCD1234$")
        await user.type(emailInputEl, "test@email.com");
        await user.type(neurodiversity, "None");

        await act(async () => {
            await user.click(submitButtonEl);
        });
    
        await (() => {
            expect(screen.getByRole("signup-error-msg")).toBeInTheDocument();
        });
    })
    test("throw an error on unsuccessful signup for missing email`", async () => {
        render(<SignupPage />);
        const user = userEvent.setup();
        const firstName = screen.getByRole("name")
        const lastName = screen.getByRole("surname")
        const passwordInputEl = screen.getByRole("password");
        const neurodiversity = screen.getByRole("neurodiversity");
        const submitButtonEl = screen.getByRole("submit-button");

        await user.type(firstName, "userfirstName")
        await user.type(lastName, "userlastName")
        await user.type(passwordInputEl, "ABCD1234$")
        await user.type(neurodiversity, "None");

        await act(async () => {
            await user.click(submitButtonEl);
        });
    
        await (() => {
            expect(screen.getByRole("signup-error-msg")).toBeInTheDocument();
        });
    })
    test("throw an error on unsuccessful signup for missing neurodiversity`", async () => {
        render(<SignupPage />);
        const user = userEvent.setup();
        const firstName = screen.getByRole("name")
        const lastName = screen.getByRole("surname")
        const emailInputEl = screen.getByRole("email");
        const passwordInputEl = screen.getByRole("password");
        const submitButtonEl = screen.getByRole("submit-button");

        await user.type(firstName, "userfirstName")
        await user.type(lastName, "userlastName")
        await user.type(emailInputEl, "test@email.com");
        await user.type(passwordInputEl, "ABCD1234$")

        await act(async () => {
            await user.click(submitButtonEl);
        });
    
        await (() => {
            expect(screen.getByRole("signup-error-msg")).toBeInTheDocument();
        });

        
    })
})