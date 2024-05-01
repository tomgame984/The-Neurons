import React from "react";
import {vi, expect} from "vitest";
import Gauge from "../../src/components/Gauge";
import { fireEvent, render, screen } from "@testing-library/react";



describe('Unit testing for Gauge', () => {
    test('When Dashboard is loaded, counter is rendered as 0', () => {
        render(<Gauge />)

        const counterDisplay = screen.getByTestId('counter')
        expect(counterDisplay.textContent).toBe("0")
    }
    )
    test('When Dashboard is loaded, the reset button is rendered', () => {
        render(<Gauge />)
        const counterReset = screen.getByRole('reset-button')
        expect(counterReset).to.exist
    }
    )
    test('When reset button is clicked, counter is reset to 0', () => {
        render(<Gauge />)
        const counterDisplay = screen.getByTestId('counter')
        const counterReset = screen.getByRole('reset-button')
        fireEvent.click(counterReset)
        expect(counterDisplay.textContent).toBe("0")
    }
    )
});