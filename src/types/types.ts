import { ReactNode } from "react";

/////////////////////////////////////////////////////////////////////////////////////

/**
 * Employee interface to store data for one employee
 */
export interface Employee {
  /**
   * Employee ID
   */
  id: string;
  /**
   * Employee First Name
   */
  firstName: string;
  /**
   * Employee Last Name
   */
  lastName: string;
  /**
   * Employee date of birth
   */
  birthDate: string;
  /**
   * Employee start date in the company
   */
  startDate: string;
  /**
   * Employee street
   */
  street: string;
  /**
   * Employee city
   */
  city: string;
  /**
   * Employee state
   */
  state: string;
  /**
   * Employee Zip code
   */
  zipcode: string | number;
  /**
   * Employee department in the company
   */
  department: string;
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
 *
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
