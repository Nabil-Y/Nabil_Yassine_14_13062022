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

export interface EmployeesList {
  employees: Employee[];
}
