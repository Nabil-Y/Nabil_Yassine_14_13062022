import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getEmployeesFromStorage,
  saveEmployeesToStorage,
} from "../../utils/helpers";

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
      state.employees = [...state.employees, action.payload];
      saveEmployeesToStorage(state);
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
