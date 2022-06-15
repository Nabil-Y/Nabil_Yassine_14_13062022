import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Employees initial state
 */
const initialState: EmployeesList = {
  employees: [],
};

/**
 * Redux slice containing employees list
 */
export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state: EmployeesList, action: PayloadAction<Employee>) => {
      state.employees = [...state.employees, action.payload];
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
