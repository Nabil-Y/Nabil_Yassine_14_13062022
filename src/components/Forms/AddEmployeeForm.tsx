import React, { useId, useState } from "react";
import InputDate from "../Inputs/InputDate";
import InputSelect from "../Inputs/InputSelect";
import InputText from "../Inputs/InputText";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import { STATES, DEPARTMENTS } from "../../data/constants";
import { Employee, FormResponse } from "../../types/types";
import { capitalizeString } from "../../utils/helpers";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addEmployee } from "../../store/slices/employeesSlice";

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
  const lastEmployeeName = `${lastEmployee["First Name"]} ${lastEmployee["Last Name"]}`;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsError(true);

    const form = event.currentTarget;
    if (form.checkValidity()) {
      const formResponse = form.elements as unknown as FormResponse;
      const formResult: Employee = {
        id: `${+lastEmployee.id + 1}`,
        "First Name": capitalizeString(formResponse["First Name"].value),
        "Last Name": capitalizeString(formResponse["Last Name"].value),
        "Date of Birth": formResponse["Date of Birth"].value,
        "Date of Start": formResponse["Date of Start"].value,
        Street: capitalizeString(formResponse["Street"].value),
        City: capitalizeString(formResponse["City"].value),
        State: formResponse["State"].value,
        "Zip code": formResponse["Zip code"].value,
        Department: formResponse["Department"].value,
      };

      if (
        employeesList.findIndex(
          (employee) =>
            employee["First Name"] === formResult["First Name"] &&
            employee["Last Name"] === formResult["Last Name"] &&
            employee["Date of Birth"] === formResult["Date of Birth"]
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
      <form role="form" noValidate id={formId} onSubmit={handleSubmit}>
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
            <InputSelect name="Department" options={DEPARTMENTS} />
          </div>
          <fieldset className="w-full border p-2 sm:m-4 sm:w-auto">
            <legend className="mb-4 px-2 font-bold">Adress</legend>
            <InputText
              name="Street"
              pattern="[A-Za-zÀ-ÖØ-öø-ÿ0-9 _'-]{2,}"
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
      <Button type="submit" form={formId} className="mt-4 px-6 py-3 sm:mt-0">
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
