/**
 * Employee interface to store data for one employee
 */
export interface Employee {
  firstName: string;
  lastName: string;
  birthDate: string;
  startDate: string;
  street: string;
  city: string;
  state: string;
  zipcode: string | number;
  department:
    | "Sales"
    | "Marketing"
    | "Engineering"
    | "Human Resources"
    | "Legal";
}

/**
 * EmployeesList interface to store data for all employees
 */
export interface EmployeesList {
  employees: Employee[];
}
