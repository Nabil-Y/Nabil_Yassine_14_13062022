import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getEmployeesFromStorage,
  saveEmployeesToStorage,
} from "../../utils/helpers";
import { EmployeesList, Employee } from "../../types/types";

// Redux is the main state management tool
// Local storage is only used as a backup tool
// to persist data on refresh

/**
 * Employees initial state
 */
const initialState: EmployeesList = getEmployeesFromStorage();

/**
 * Redux slice containing employees list
 */
export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state: EmployeesList, action: PayloadAction<Employee>) => {
      if (
        state.employees.findIndex(
          (employee) =>
            employee.firstName === action.payload.firstName &&
            employee.lastName === action.payload.lastName &&
            employee.birthDate === action.payload.birthDate
        ) === -1
      ) {
        state.employees = [...state.employees, action.payload];
        saveEmployeesToStorage(state);
      }
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
