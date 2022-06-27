import { describe, expect, it, vi } from "vitest";
import { EMPLOYEES } from "../data/constants";
import {
  capitalizeString,
  getEmployeesFromStorage,
  saveEmployeesToStorage,
} from "../utils/helpers";

describe("Capitalize String function should", () => {
  it("return Jean-Pierre with input of jean-pierre", () => {
    expect(capitalizeString("jean-pierre")).toBe("Jean-Pierre");
  });

  it("return O'Bryan Jacques with input of o'bryan jacques", () => {
    expect(capitalizeString("o'bryan jacques")).toBe("O'Bryan Jacques");
  });

  it("return emptystring with input of empty string", () => {
    expect(capitalizeString("")).toBe("");
  });
});

describe("localStorage should", () => {
  it("get data when using getFromStorage function", () => {
    const spyGetFromStorage = vi.spyOn(Storage.prototype, "getItem");
    const employeesList = getEmployeesFromStorage();

    expect(employeesList.employees.length).toBe(5);
    expect(spyGetFromStorage).toHaveBeenCalled();
  });

  it("should save data using saveToStorage function", () => {
    const spySaveToStorage = vi.spyOn(Storage.prototype, "setItem");
    const employeesList = { employees: EMPLOYEES };

    saveEmployeesToStorage(employeesList);
    expect(spySaveToStorage).toHaveBeenCalled();
  });
});
