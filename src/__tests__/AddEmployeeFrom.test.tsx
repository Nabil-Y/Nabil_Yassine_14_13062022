import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import AddEmployeeForm from "../components/Forms/AddEmployeeForm";
import { Provider } from "react-redux";
import { createTestStore } from "../store/store";
import { getEmployeesFromStorage } from "../utils/helpers";

/**
 * Init Redux test store
 */
const testStore = createTestStore();

describe("Add Employee Form should", () => {
  it("Display placeholder error message", () => {
    render(
      <Provider store={testStore}>
        <AddEmployeeForm />
      </Provider>
    );

    const placeholderDateError = screen.getAllByText(/Date Error Placeholder/i);
    const placeholderTextError = screen.getAllByText(/Text Error Placeholder/i);
    expect(placeholderDateError.length).toBe(2);
    expect(placeholderTextError.length).toBe(5);
  });

  it("Should display real error message after submitting invalid form", () => {
    render(
      <Provider store={testStore}>
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

  it("Update store and show modal when submitting valid form", () => {
    render(
      <Provider store={testStore}>
        <AddEmployeeForm />
      </Provider>
    );

    const initialList = getEmployeesFromStorage();

    const firstName = screen.getByLabelText(/First Name/i) as HTMLInputElement;
    firstName.value = "Roland";

    const lastName = screen.getByLabelText(/Last Name/i) as HTMLInputElement;
    lastName.value = "Garros";

    const birthDate = screen.getByLabelText(
      /Date of Birth/i
    ) as HTMLInputElement;
    birthDate.value = "1992-12-05";

    const startDate = screen.getByLabelText(
      /Date of Start/i
    ) as HTMLInputElement;
    startDate.value = "2020-01-05";

    const street = screen.getByLabelText(/Street/i) as HTMLInputElement;
    street.value = "5 Rue Anatole Franc";

    const city = screen.getByLabelText(/City/i) as HTMLInputElement;
    city.value = "Paris";

    const zipCode = screen.getByLabelText(/Zip code/i) as HTMLInputElement;
    zipCode.value = "75010";

    const state = screen.getByLabelText(/State/i) as HTMLSelectElement;
    state.value = "AZ";

    const department = screen.getByLabelText(
      /Department/i
    ) as HTMLSelectElement;
    department.value = "Sales";

    const submitButton = screen.getByText(/Save/i);
    fireEvent.click(submitButton);

    const modal = screen.getByText(/Roland Garros/i);
    expect(modal).toBeTruthy();

    const updatedList = getEmployeesFromStorage();
    expect(updatedList.employees.length).not.toBe(initialList.employees.length);
  });
});
