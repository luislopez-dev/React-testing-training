import { render, screen } from "@testing-library/react";
import Register from "./Register";
import React from 'react'
import userEvent from "@testing-library/user-event";

describe("Register component", () => {
 
  it("should render Register component correctly", () => {
    render(<Register />);
    const element = screen.queryByRole("heading");
    expect(element).toBeInTheDocument();
  });
  /*
  it("should show error message when all the fields are not entered", async () => {
    render(<Register />);
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);
    // screen.debug();
    const alertElement = screen.getByRole("alert");
    expect(alertElement).toBeInTheDocument();
  });

  it("should not show any error message when the component is loaded", () => {
    render(<Register />);
    const alertElement = screen.getByRole("alert");
    expect(alertElement).not.toBeInTheDocument();
  });
  */
});