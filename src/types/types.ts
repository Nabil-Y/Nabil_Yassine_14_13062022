import { ReactNode } from "react";

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

/**
 * Interface for InputDate Component props
 */
export interface IDateInput {
  reference: React.MutableRefObject<HTMLInputElement | null>;
  name: string;
  id: string;
  isError: boolean;
}

/**
 * Interface for InputText Component props
 */
export interface ITextInput {
  reference: React.MutableRefObject<HTMLInputElement | null>;
  name: string;
  id: string;
  pattern: string;
  errorMessage: string;
  isError: boolean;
}

export interface ICard {
  children: ReactNode;
  className?: string;
}
