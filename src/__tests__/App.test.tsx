import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";
import App from "../App";

describe("App should", () => {
  it("Display home page title on home page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    const homeSubTitle = screen.getByText(/Create Employee/i);
    expect(homeSubTitle).toBeTruthy();
  });

  it("Navigate to employees page after click on employees link", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    const linkEmployees = screen.getByText(/employees/i);
    expect(linkEmployees).toBeTruthy();

    fireEvent.click(linkEmployees);

    const employeesTitle = screen.getByText(/Current Employees/i);
    expect(employeesTitle).toBeTruthy();
  });
});

describe("App should", () => {
  it("Display Error page if path is incorrect", async () => {
    render(
      <MemoryRouter initialEntries={["/random"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    const errorMsg = await screen.findByText(/Error/i);
    expect(errorMsg).toBeTruthy();
  });
});
