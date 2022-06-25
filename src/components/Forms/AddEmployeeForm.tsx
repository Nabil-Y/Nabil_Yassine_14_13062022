import React, { useId, useState } from "react";
import InputDate from "../Inputs/InputDate";
import InputSelect from "../Inputs/InputSelect";
import InputText from "../Inputs/InputText";
import Button from "../UI/Button";
import { STATES, DEPARTMENTS } from "../../data/constants";
import { Employee } from "../../types/types";
import { capitalizeString } from "../../utils/helpers";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addEmployee } from "../../store/slices/employeesSlice";
import Modal from "../UI/Modal";

/**
 * AddEmployeeForm function
 * @returns Add Employee Form component
 */
const AddEmployeeForm = () => {
  const [isError, setIsError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const formId = useId();
  const dispatch = useAppDispatch();

  const employeesList = useAppSelector((state) => state.employees.employees);
  const lastEmployee = employeesList.slice().reverse()[0];
  const lastEmployeeName = `${lastEmployee.firstName} ${lastEmployee.lastName}`;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsError(true);
    const form = event.currentTarget;
    if (form.checkValidity()) {
      const formResponse = form.elements as unknown as Record<
        string,
        HTMLInputElement | HTMLSelectElement
      >;
      const formResult: Employee = {
        firstName: capitalizeString(formResponse["First Name"].value),
        lastName: capitalizeString(formResponse["Last Name"].value),
        birthDate: formResponse["Date of Birth"].value,
        startDate: formResponse["Date of Start"].value,
        street: capitalizeString(formResponse["Street"].value),
        city: capitalizeString(formResponse["City"].value),
        state: formResponse["State"].value,
        zipcode: formResponse["Zip code"].value,
        department: formResponse["Departments"].value,
      };
      if (
        employeesList.findIndex(
          (employee) =>
            employee.firstName === formResult.firstName &&
            employee.lastName === formResult.lastName &&
            employee.birthDate === formResult.birthDate
        ) === -1
      ) {
        dispatch(addEmployee(formResult));
        setShowModal(true);
      }
    }
  };

  return (
    <section className="flex flex-col items-center justify-center ">
      <h2 className="pb-4 text-2xl font-bold">Create Employee</h2>
      <form noValidate id={formId} onSubmit={handleSubmit}>
        <div className="flex flex-wrap justify-evenly">
          <div className="w-full  sm:m-4 sm:w-auto">
            <InputText
              name="First Name"
              pattern="[A-Za-zÀ-ÖØ-öø-ÿ _'-]{2,}"
              errorMessage="Enter 2 or more characters"
              isError={isError}
            />
            <InputText
              name="Last Name"
              pattern="[A-Za-zÀ-ÖØ-öø-ÿ _'-]{2,}"
              errorMessage="Enter 2 or more characters"
              isError={isError}
            />
            <InputDate name="Date of Birth" isError={isError} />
            <InputDate name="Date of Start" isError={isError} />
            <InputSelect name="Departments" options={DEPARTMENTS} />
          </div>
          <fieldset className="w-full border p-2 sm:m-4 sm:w-auto">
            <legend className="mb-4 px-2 font-bold">Adress</legend>
            <InputText
              name="Street"
              pattern="[A-Za-zÀ-ÖØ-öø-ÿ _'-]{2,}"
              errorMessage="Enter 2 or more characters"
              isError={isError}
            />
            <InputText
              name="City"
              pattern="[A-Za-zÀ-ÖØ-öø-ÿ _'-]{2,}"
              errorMessage="Enter 2 or more characters"
              isError={isError}
            />
            <InputSelect name="State" options={STATES} />
            <InputText
              name="Zip code"
              pattern="\d{5}"
              errorMessage="Enter a number of 5 characters"
              isError={isError}
            />
          </fieldset>
        </div>
      </form>
      <Button type="submit" form={formId} className="mt-4 sm:mt-0">
        Save
      </Button>
      {showModal && (
        <Modal closeModal={() => setShowModal(false)}>
          New employee: {lastEmployeeName}
        </Modal>
      )}
    </section>
  );
};

export default AddEmployeeForm;
