import { fireEvent, render, screen } from "@testing-library/react";
import {vi, expect} from "vitest";
import Gague from "../../src/components/Gague";



describe('Unit testing for Gague', () => {
    test('When Dashboard is loaded counter is set to 1', () => {
        const counterDisplay = screen.getByRole('counter')
        expect(counterDisplay.textContent).toBe(1)
    }
    )
});