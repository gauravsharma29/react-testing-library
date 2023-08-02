import { fireEvent, render, screen } from "@testing-library/react";
import App, { replaceCameWithSpaces } from "./App";

test("Button has correct initial color", () => {
  render(<App />);
  // Find the element with role button and text
  // first argument is always role and then option object
  // if we try to access invalid role then it gives you correct one in the terminal
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // expect the button to be clicked
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  // expect the text content to be changed 'Change to red'
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("Initial Conditions", () => {
  render(<App />);
  // check that the button starts out checked
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox disables button on first click and enables on second click", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  // now we can checked the checkbox
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("Change button color to gray with checkbox checked and return back to MediumVioletRed color", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // click checkbox and then Change color if red then gray
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  // click again to enable button back to red color
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("Change button color to gray with checkbox checked and return back to MidnightBlue color", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // first change the button color to BLUE from RED
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  // click checkbox and then disable the button and make it gray
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  // click checkbox again to make it enable the button and turn it to blue again
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

// To group a test cases we use decribe function
describe("spaces between caml-case capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCameWithSpaces("Red")).toBe("Red");
  });

  test("works for one inner capital", () => {
    expect(replaceCameWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("works for multiple inner capital letters", () => {
    expect(replaceCameWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
