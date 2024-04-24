import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Buttons from "../../src/components/Buttons";
import Gague from "../../src/components/Gague";
import userEvent from "@testing-library/user-event";

describe("Gauge and buttons integration test suite", () => {
    test("Test that gague renders with buttons component", () => {
    render(<Gague />);
    const buttons = screen.getByRole("power-buttons")
    expect(buttons).to.exist;
});


test("Test that When User doesn't click any buttons Counter number stays 0", async () =>  {
        render(<Gague />)
        const counterDisplay = screen.getByTestId('counter')
        expect(counterDisplay.textContent).toBe("0")
    
});

test("Test that When User clicks Power Up Button Counter number changes to 2", async () =>  {
    const user = userEvent.setup()
    render(<Gague />);
    const powerUpButton = screen.getByTestId("button-test-up");
    const counter = screen.getByTestId("counter")
    
    await user.click(powerUpButton)
    await user.click(powerUpButton)
    
    
    expect(counter.textContent).toEqual("2")
    
});
test("Test that When User clicks Power Down Button Counter number changes to -2", async () =>  {
    const user = userEvent.setup()
    render(<Gague />);
    const powerDownButton = screen.getByTestId("button-test-down");
    const counter = screen.getByTestId("counter")
    
    await user.click(powerDownButton)
    await user.click(powerDownButton)
    
    expect(counter.textContent).toEqual("-2")
    
});
test("Test that When User clicks Power Down Button Twice and Power Up Button once Counter number changes to -1", async () =>  {
    const user = userEvent.setup()
    render(<Gague />);
    const powerDownButton = screen.getByTestId("button-test-down");
    const powerUpButton = screen.getByTestId("button-test-up");
    const counter = screen.getByTestId("counter")
    
    await user.click(powerDownButton)
    await user.click(powerDownButton)
    await user.click(powerUpButton)
    
    expect(counter.textContent).toEqual("-1")
    
});

test("Test that When User clicks  Power Up Button once and Power Down Button Twice, number changes to -1", async () =>  {
    const user = userEvent.setup()
    render(<Gague />);
    const powerDownButton = screen.getByTestId("button-test-down");
    const powerUpButton = screen.getByTestId("button-test-up");
    const counter = screen.getByTestId("counter")

    await user.click(powerUpButton)
    await user.click(powerDownButton)
    await user.click(powerDownButton)
    

    expect(counter.textContent).toEqual("-1")

});
test("Test that When User clicks Power Up Button Twice and Power Down Button once Counter number changes to 1", async () =>  {
    const user = userEvent.setup()
    render(<Gague />);
    const powerDownButton = screen.getByTestId("button-test-down");
    const powerUpButton = screen.getByTestId("button-test-up");
    const counter = screen.getByTestId("counter")
    
    await user.click(powerUpButton)
    await user.click(powerUpButton)
    await user.click(powerDownButton)
    
    expect(counter.textContent).toEqual("1")
    
});

    test("Test that When User clicks Power Down Button once and Power Up Button Twice , Counter number changes to 1", async () =>  {
    const user = userEvent.setup()
    render(<Gague />);
    const powerDownButton = screen.getByTestId("button-test-down");
    const powerUpButton = screen.getByTestId("button-test-up");
    const counter = screen.getByTestId("counter")

    await user.click(powerDownButton)
    await user.click(powerUpButton)
    await user.click(powerUpButton)
    

    expect(counter.textContent).toEqual("1")

});

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