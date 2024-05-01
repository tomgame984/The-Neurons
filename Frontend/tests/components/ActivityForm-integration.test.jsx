import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Dashboard } from "../../src/pages/Dashboard";

test("When a positive score between 1 and 3 is inputted, the counter is updated correctly", () => {
  // Write your test code here
  render(<Dashboard />);
  const speedDial = screen.getByTestId("speed-dial");
  const openFormButton = screen.getByTestId("speed-dial-action-Decrease Speed-1");
  fireEvent.click(speedDial);
  fireEvent.click(openFormButton);
  const scoreInput = screen.getByLabelText("Score");
  const submitButton = screen.getByTestId("submit-button");
  fireEvent.change(scoreInput, { target: { value: "2" } });
  fireEvent.click(submitButton);
  const counter = screen.getByTestId("counter");
  expect(counter.textContent).toBe("2");
});

test("When a negative score between 1 and 3 is inputted, the counter is updated correctly", () => {
  // Write your test code here
});

test("When an incorrect data type (e.g. string) is inputted to score and submit is clicked, submit is not allowed", () => {
  // Write your test code here
});

test("When no data is inputted, form cannot submit and an error is shown and form does not disappear", () => {
  // Write your test code here
});

test("When a string is inputted in the description, the string is stored in state", () => {
  // Write your test code here
});
