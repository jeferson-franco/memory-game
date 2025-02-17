import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

/**
 * This test suite:
 * 1. Tests the presence of the game title
 * 2. Verifies the form is shown initially when the game hasn't started
 * 3. Checks if the memory card appears after the game starts
 * Note: You'll need to add the appropriate test attributes (role="form" and data-testid="memory-card") to your Form and MemoryCard components for these tests to work.
 */

describe("Memory Game", () => {
  test("renders game title", () => {
    render(<App />);
    const titleElement = screen.getByText(/memory/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("shows form when game is not started", () => {
    render(<App />);
    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();
  });

  test("shows memory card when game starts", () => {
    render(<App />);
    const formElement = screen.getByRole("form");
    fireEvent.submit(formElement);

    const memoryCardElement = screen.getByTestId("memory-card");
    expect(memoryCardElement).toBeInTheDocument();
  });
});
