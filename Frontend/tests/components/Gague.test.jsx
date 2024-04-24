import React from "react";
import {vi, expect} from "vitest";
import Gague from "../../src/components/Gague";
import { fireEvent, render, screen } from "@testing-library/react";



describe('Unit testing for Gague', () => {
    test('When Dashboard is loaded, counter is rendered as 1', () => {
        render(<Gague />)
        const counterDisplay = screen.getByTestId('counter')
        expect(counterDisplay.textContent).toBe("1")
    }
    )
    test('When Dashboard is loaded, the reset button is rendered', () => {
        render(<Gague />)
        const counterReset = screen.getByRole('reset-button')
        expect(counterReset).to.exist
    }
    )
    test('When reset button is clicked, counter is reset to 0', () => {
        render(<Gague />)
        const counterDisplay = screen.getByTestId('counter')
        const counterReset = screen.getByRole('reset-button')
        fireEvent.click(counterReset)
        expect(counterDisplay.textContent).toBe("0")
    }
    )
});