import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import React from "react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Greeting component", () => {

  test("Renders hello world as a text", () => {
      // Arrange
    render(<Greeting/>);

    // Act
    // ...Nothing
    
    // Asert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', async () => { 
    // Arrange
    render(<Greeting />);

    // Act
    await act( async () => {
      const buttonElement = screen.getByRole('button');
      await userEvent.click(buttonElement);
    });
   
    // Assert
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();        
  });

  test('Does not render "good to see you" if the button was clicked', async () => {
    // Arrange
    render(<Greeting />);

    // Act
    await act( async () => {
      const buttonElement = screen.getByRole('button');
      await userEvent.click(buttonElement);
    });

    // Assert
    const outputElement = screen.queryByText("It's good to see you!", { exact: true });
    expect(outputElement).toBeNull();    
  });
});