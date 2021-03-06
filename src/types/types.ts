import { ReactNode } from "react";

/////////////////////////////////////////////////////////////////////////////////////

/**
 * Employee interface to store data for one employee
 */
export interface Employee {
  /**
   * Employee ID
   */
  [id: string]: string;
  /**
   * Employee First Name
   */
  "First Name": string;
  /**
   * Employee Last Name
   */
  "Last Name": string;
  /**
   * Employee date of birth
   */
  "Date of Birth": string;
  /**
   * Employee start date in the company
   */
  "Date of Start": string;
  /**
   * Employee street
   */
  Street: string;
  /**
   * Employee city
   */
  City: string;
  /**
   * Employee state
   */
  State: string;
  /**
   * Employee Zip code
   */
  "Zip code": string;
  /**
   * Employee department in the company
   */
  Department: string;
}

/////////////////////////////////////////////////////////////////////////////////////

/**
 * EmployeesList interface to store data for all employees
 */
export interface EmployeesList {
  /**
   * Employees array
   */
  employees: Employee[];
}

/////////////////////////////////////////////////////////////////////////////////////

/**
 * Interface for InputDate Component props
 */
export interface IDateInput {
  /**
   * Input name
   */
  name: string;
  /**
   * Boolean which is true if an error has been made, false otherwise
   */
  isError: boolean;
}

/////////////////////////////////////////////////////////////////////////////////////

/**
 * Interface for InputText Component props
 */
export interface ITextInput {
  /**
   * Input name
   */
  name: string;
  /**
   * Input regex validation
   */
  pattern: string;
  /**
   * Input error message
   */
  errorMessage: string;
  /**
   * Boolean which is true if an error has been made, false otherwise
   */
  isError: boolean;
}

/////////////////////////////////////////////////////////////////////////////////////

/**
 * Interface for InputSelect Component props
 */
export interface ISelectInput {
  /**
   * Options array
   */
  options: DropdownItem[];
  /**
   * Input name
   */
  name: string;
}

/////////////////////////////////////////////////////////////////////////////////////

/**
 * Interface used to create dropdown items in dropdown select tag
 */
export interface DropdownItem {
  /**
   * Option name
   */
  name: string;
  /**
   * Option value
   */
  value: string;
}

/////////////////////////////////////////////////////////////////////////////////////

/**
 * Interface for Card wrapper component props
 */
export interface ICard {
  /**
   * Card content
   */
  children: ReactNode;
  /**
   * Add classes for further customisation
   */
  className?: string;
}

/////////////////////////////////////////////////////////////////////////////////////

/**
 * Button wrapper component props
 */
export interface Ibutton {
  /**
   * Button content
   */
  children: ReactNode;
  /**
   * Button type
   */
  type: "button" | "submit" | "reset" | undefined;
  /**
   * Add classes for further customisation
   */
  className?: string;
  /**
   * Click event handler
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /**
   * Link to form Id
   */
  form?: string;
}

/////////////////////////////////////////////////////////////////////////////////////

/**
 * Modal Component props
 */
export interface IModal {
  /**
   * Modal content
   */
  children: ReactNode;
  /**
   * Close Modal function
   */
  closeModal: () => void;
}

/////////////////////////////////////////////////////////////////////////////////////

/**
 * Type of add employee form submit event response
 */
export type FormResponse = Record<string, HTMLInputElement | HTMLSelectElement>;
