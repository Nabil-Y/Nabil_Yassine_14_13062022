import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "../components/UI/Modal";

describe("Should render Modal", () => {
  it("should display Hello", () => {
    document.body.innerHTML = "<div id='modal'></div>";
    const mockCloseModal = vi.fn();
    render(<Modal closeModal={mockCloseModal}>Hello</Modal>);

    const modal = screen.getByText(/hello/i);
    expect(modal).toBeTruthy();
  });

  it("should call mock function when clicking on close button", () => {
    document.body.innerHTML = "<div id='modal'></div>";
    const mockCloseModal = vi.fn();
    render(<Modal closeModal={mockCloseModal}>Hello</Modal>);

    const closeButton = screen.getByText(/x/i);
    fireEvent.click(closeButton);
    expect(mockCloseModal).toHaveBeenCalled();
  });
});
