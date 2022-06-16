/**
 * Global typing for HRnet
 */

declare global {
  interface Employee {
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

  interface EmployeesList {
    employees: Employee[];
  }
}

export {};
