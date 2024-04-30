import React from "react";
import {vi, expect} from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Dashboard } from "../../src/pages/Dashboard";
import ResetButton from "../../src/components/ResetButton";


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
        const reset = screen.getByText('RESET')
        const powerup = screen.getAllByTestId('speed-dial-action-Increase Speed')

        fireEvent.click(powerup[1]) // Clicking Speed Dial Icons 1-4  - 1 in this case
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
