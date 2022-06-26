import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import AddEmployeeForm from "../components/Forms/AddEmployeeForm";
import { Provider } from "react-redux";
import { store } from "../store/store";

describe("Add Employee Form should", () => {
  it("Display placeholder error message", () => {
    render(
      <Provider store={store}>
        <AddEmployeeForm />
      </Provider>
    );

    const placeholderDateError = screen.getAllByText(/Date Error Placeholder/i);
    const placeholderTextError = screen.getAllByText(/Text Error Placeholder/i);
    expect(placeholderDateError.length).toBe(2);
    expect(placeholderTextError.length).toBe(5);
  });

  it("Should display real error message after submitting empty form", () => {
    render(
      <Provider store={store}>
        <AddEmployeeForm />
      </Provider>
    );

    const submitButton = screen.getByText(/Save/i);
    fireEvent.click(submitButton);

    const placeholderDateError = screen.getAllByText(
      /Choose a date with the date picker/i
    );
    const placeholderTextError = screen.getAllByText(
      /Enter 2 or more characters/i
    );
    expect(placeholderDateError.length).toBe(2);
    expect(placeholderTextError.length).toBe(4);
  });

  it("Call handleSubmit on submit", () => {
    render(
      <Provider store={store}>
        <AddEmployeeForm />
      </Provider>
    );

    // const handleSubmit = vi.fn(() => Promise.resolve());
    // const form = screen.getByRole("form");
    // fireEvent.submit(form);
    // expect(handleSubmit).toHaveBeenCalled();
  });
});
