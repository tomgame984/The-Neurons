import React from "react";
import { render, screen } from "@testing-library/react";
import Buttons from "../../src/components/Buttons";
import userEvent from "@testing-library/user-event";


describe("Buttons Test Suite", () => {
  test("Test that Power Up button renders", () => {
    render(<Buttons />);

    const powerUpButton = screen.getByTestId("button-test-up")
    expect(powerUpButton).to.exist;
  });


  test("Test that Power Down Buttons renders", () => {
    render(<Buttons />);

    const powerDownButton = screen.getByTestId("button-test-down")
    expect(powerDownButton).to.exist;
  });
  test("Test that When User doesn't click any buttons Counter number stays 0", async () =>  {
    const user = userEvent.setup()
    render(<Buttons />);
    const powerUpButton = screen.getByTestId("button-test-up");
    const counter = screen.getByTestId("counter-test")

    expect(counter.textContent).toEqual("0")
    
  });
  test("Test that When User clicks Power Up Button Counter number changes to 2", async () =>  {
    const user = userEvent.setup()
    render(<Buttons />);
    const powerUpButton = screen.getByTestId("button-test-up");
    const counter = screen.getByTestId("counter-test")
    
    await user.click(powerUpButton)
    await user.click(powerUpButton)
    
    
    expect(counter.textContent).toEqual("2")
    
  });
  test("Test that When User clicks Power Down Button Counter number changes to -2", async () =>  {
    const user = userEvent.setup()
    render(<Buttons />);
    const powerDownButton = screen.getByTestId("button-test-down");
    const counter = screen.getByTestId("counter-test")
    
    await user.click(powerDownButton)
    await user.click(powerDownButton)
    
    expect(counter.textContent).toEqual("-2")
    
  });
  test("Test that When User clicks Power Down Button Twice and Power Up Button once Counter number changes to -1", async () =>  {
    const user = userEvent.setup()
    render(<Buttons />);
    const powerDownButton = screen.getByTestId("button-test-down");
    const powerUpButton = screen.getByTestId("button-test-up");
    const counter = screen.getByTestId("counter-test")
    
    await user.click(powerDownButton)
    await user.click(powerDownButton)
    await user.click(powerUpButton)
    
    expect(counter.textContent).toEqual("-1")
    
  });
 test("Test that When User clicks  Power Up Button once and Power Down Button Twice, number changes to -1", async () =>  {
    const user = userEvent.setup()
    render(<Buttons />);
    const powerDownButton = screen.getByTestId("button-test-down");
    const powerUpButton = screen.getByTestId("button-test-up");
    const counter = screen.getByTestId("counter-test")

    await user.click(powerUpButton)
    await user.click(powerDownButton)
    await user.click(powerDownButton)
    

    expect(counter.textContent).toEqual("-1")

  });
  test("Test that When User clicks Power Up Button Twice and Power Down Button once Counter number changes to 1", async () =>  {
    const user = userEvent.setup()
    render(<Buttons />);
    const powerDownButton = screen.getByTestId("button-test-down");
    const powerUpButton = screen.getByTestId("button-test-up");
    const counter = screen.getByTestId("counter-test")
    
    await user.click(powerUpButton)
    await user.click(powerUpButton)
    await user.click(powerDownButton)
    
    expect(counter.textContent).toEqual("1")
    
  });
});