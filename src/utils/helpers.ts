import { EMPLOYEES } from "../data/constants";
import { EmployeesList } from "../types/types";

// Redux is the main state management tool
// Local storage is only used as a backup tool
// to persist data on refresh

/**
 * getEmployees Helper Function
 * @returns Employees list from local storage
 */
export const getEmployeesFromStorage = (): EmployeesList => {
  const mockEmployeesList = { employees: EMPLOYEES };
  try {
    const employeesList = localStorage.getItem("employees");
    if (employeesList === null) {
      return mockEmployeesList;
    }
    return JSON.parse(employeesList);
  } catch (error) {
    console.log(error);
    return mockEmployeesList;
  }
};

/**
 * saveEmployees Helper Function
 * @param state EmployeesList to be saved in local storage
 */
export const saveEmployeesToStorage = (state: EmployeesList) => {
  try {
    const employeesList = JSON.stringify(state);
    localStorage.setItem("employees", employeesList);
  } catch (error) {
    console.log(error);
  }
};

/**
 * capitalizeString Helper Function
 * @param inputString string to be capitalized
 * @returns capitalized string
 */
export const capitalizeString = (inputString: string): string => {
  const dividers = [" ", "'", "-"];
  let result = inputString.slice();
  dividers.forEach((divider) => {
    result = result
      .split(divider)
      .map(
        (string) => (string = string.charAt(0).toUpperCase() + string.slice(1))
      )
      .join(divider);
  });
  return result;
};
