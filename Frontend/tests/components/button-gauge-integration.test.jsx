import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Buttons from "../../src/components/Buttons";

import Gauge from "../../src/components/Gauge";
import userEvent from "@testing-library/user-event";
import { Dashboard } from "../../src/pages/Dashboard";
import ResetButton from "../../src/components/ResetButton";
import userEvent from "@testing-library/user-event";

describe("Gauge and buttons integration test suite", () => {
    test("Test that Dashboard renders with buttons component", () => {
    render(<Gauge />);
    const buttons = screen.findByTestId("buttons")
    expect(buttons).to.exist;
});


// test("Test that When User doesn't click any buttons Counter number stays 0", async () =>  {
// <<<<<<< Activity-Form-New-Branch

//         render(<Dashboard />)
//         const counterDisplay = screen.getByTestId('counter')
//         expect(counterDisplay.textContent).toEqual("0")
    
// });

// test("Test that When User clicks Power Up Button Counter number changes to 2", async () =>  {
//     const user = userEvent.setup()
//     render(<Dashboard />);
//     const powerUpButton = screen.getBy("Power Up");
//     // const powerUpIcon = screen.
//     const counter = screen.getByTestId("counter")
    
//     await user.hover(powerUpButton)
//     const speedDialAction = screen.getByTestId('speed-dial-action-Increase Speed'); // Using the specific data-testid
//     fireEvent.click(speedDialAction);
    
//     expect(counter.textContent).toEqual("2")
    
// });
// test("Test that When User clicks Power Down Button Counter number changes to -2", async () =>  {
//     const user = userEvent.setup()
//     render(<Gauge />);
//     const powerDownButton = screen.getByTestId("button-test-down");
//     const counter = screen.getByTestId("counter")
    
//     await user.click(powerDownButton)
//     await user.click(powerDownButton)
    
//     expect(counter.textContent).toEqual("-2")
    
// });
// test("Test that When User clicks Power Down Button Twice and Power Up Button once Counter number changes to -1", async () =>  {
//     const user = userEvent.setup()
//     render(<Gauge />);
//     const powerDownButton = screen.getByTestId("button-test-down");
//     const powerUpButton = screen.getByTestId("button-test-up");
//     const counter = screen.getByTestId("counter")
    
//     await user.click(powerDownButton)
//     await user.click(powerDownButton)
//     await user.click(powerUpButton)
    
//     expect(counter.textContent).toEqual("-1")
    
// });

// test("Test that When User clicks  Power Up Button once and Power Down Button Twice, number changes to -1", async () =>  {
//     const user = userEvent.setup()
//     render(<Gauge />);
//     const powerDownButton = screen.getByTestId("button-test-down");
//     const powerUpButton = screen.getByTestId("button-test-up");
//     const counter = screen.getByTestId("counter")

//     await user.click(powerUpButton)
//     await user.click(powerDownButton)
//     await user.click(powerDownButton)
    

//     expect(counter.textContent).toEqual("-1")

// });
// test("Test that When User clicks Power Up Button Twice and Power Down Button once Counter number changes to 1", async () =>  {
//     const user = userEvent.setup()
//     render(<Gauge />);
//     const powerDownButton = screen.getByTestId("button-test-down");
//     const powerUpButton = screen.getByTestId("button-test-up");
//     const counter = screen.getByTestId("counter")
    
//     await user.click(powerUpButton)
//     await user.click(powerUpButton)
//     await user.click(powerDownButton)
    
//     expect(counter.textContent).toEqual("1")
    
// });

//     test("Test that When User clicks Power Down Button once and Power Up Button Twice , Counter number changes to 1", async () =>  {
//     const user = userEvent.setup()
//     render(<Gauge />);
//     const powerDownButton = screen.getByTestId("button-test-down");
//     const powerUpButton = screen.getByTestId("button-test-up");
//     const counter = screen.getByTestId("counter")

//     await user.click(powerDownButton)
//     await user.click(powerUpButton)
//     await user.click(powerUpButton)
    

//     expect(counter.textContent).toEqual("1")

// });

test('When Dashboard is loaded, the reset button is rendered', () => {
    render(<Dashboard />)
    expect(<ResetButton/>).to.exist
}
)
test('When reset button is clicked, counter is reset to 0', () => {
    render(<Dashboard />)
    const counterDisplay = screen.getByTestId('counter')
    const reset = screen.getByText('RESET')
    fireEvent.click(reset)
    expect(counterDisplay.textContent).toEqual("0")
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