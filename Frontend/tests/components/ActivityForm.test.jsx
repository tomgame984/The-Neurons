import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ActivityForm from "../../src/components/ActivityForm";
import { describe, test } from "vitest";

describe("ActivityForm", () => {

    test("disappears when the close button icon is clicked", () => {
        const TestComponent = () => {
            const [open, setOpen] = useState(true);
            const handleOpen = () => {
                setOpen(!open);
            };

            return open ? (
                <ActivityForm open={open} handleOpen={handleOpen} count={0} setCount={() => {}} />
            ) : null;
        };

        render(<TestComponent />);
        const closeButton = screen.getByTestId("close-button");
        fireEvent.click(closeButton);
        expect(screen.queryByTestId("activity-form")).toBeNull();
    });

    test("disappears when the submit button is clicked and score is filled", () => {
        const TestComponent = () => {
            const [open, setOpen] = useState(true);
            const [score, setScore] = useState("");
            const handleOpen = () => {
                setOpen(!open);
            };

            return open ? (
                <ActivityForm
                    open={open}
                    handleOpen={handleOpen}
                    count={0}
                    setCount={() => {}}
                    score={score}
                    setScore={setScore}
                />
            ) : null;
        };

        render(<TestComponent />);
        const submitButton = screen.getByTestId("submit-button");
        fireEvent.click(submitButton);
        expect(screen.queryByTestId("activity-form")).toBeNull();
    });
});



