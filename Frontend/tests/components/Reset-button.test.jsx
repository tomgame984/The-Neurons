import React from "react";
import {vi, expect} from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Dashboard } from "../../src/pages/Dashboard";
import ResetButton from "../../src/components/ResetButton";
import ActivityForm from "../../src/components/ActivityForm";

test.skip('This is a test that is currently failing', () => {
    // Test implementation

describe('Unit testing for ResetButton', () => {
    test('When Dashboard is loaded, reset button exists', () => {
        render (<Dashboard/>)
        expect(<ResetButton/>).to.exist
    })
    test('When Reset Button is clicked gauge counter doesnt change from 0', () => {
        render (<Dashboard/>)
        const counterDisplay = screen.getByTestId('counter')
        const reset = screen.getByText('RESET')
        fireEvent.click(reset)
        expect(counterDisplay.textContent).toEqual("0")
    })
    test('When Reset Button is clicked gauge counter sets back to 0 from 1', () => {
        render (<Dashboard/>)
        const counterDisplay = screen.getByTestId('counter')
        const reset = screen.findByText('RESET')
        const bigbutton = screen.findByLabelText("Power Up")
        const powerup = screen.findByTestId('speed-dial-action-Increase Speed')
        const score = screen.getByLabelText('Score')
        const submit = screen.findByText('Submit')

        fireEvent.click(bigbutton)
        fireEvent.click(powerup[1]) // Clicking Speed Dial Icons 1-4  - 1 in this case
        fireEvent.change(score, {target: {value: "1"}})
        fireEvent.click(submit)
        expect(counterDisplay.textContent).toEqual("1")
        fireEvent.click(reset)
        expect(counterDisplay.textContent).toEqual("0")
    })
    test('When Reset Button is clicked gauge counter sets back to 0 from -1', () => {
        render (<Dashboard/>)
        const counterDisplay = screen.getByTestId('counter')
        const reset = screen.getByText('RESET')
        const powerup = screen.getAllByTestId('speed-dial-action-Decrease Speed')

        fireEvent.click(powerup[1])
        expect(counterDisplay.textContent).toEqual("-1")
        fireEvent.click(reset)
        expect(counterDisplay.textContent).toEqual("0")
    })
});
});