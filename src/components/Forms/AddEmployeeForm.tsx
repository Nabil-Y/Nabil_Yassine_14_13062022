import { useId, useRef, useState } from "react";
import InputDate from "../Inputs/InputDate";
import InputSelect from "../Inputs/InputSelect";
import InputText from "../Inputs/InputText";
import { STATES, DEPARTMENTS } from "../../data/constants";
import Button from "../UI/Button";

const AddEmployeeForm = () => {
  const [isError, setIsError] = useState(false);
  const formId = useId();

  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const dobRef = useRef<HTMLInputElement>(null);
  const dosRef = useRef<HTMLInputElement>(null);
  const streetRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef<HTMLSelectElement>(null);
  const zipCode = useRef<HTMLInputElement>(null);
  const departmentRef = useRef<HTMLSelectElement>(null);

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const form = document.getElementById(formId) as HTMLFormElement;
    if (form.checkValidity()) {
      // do stuff
      const result = ` Name: ${firstnameRef.current?.value} ${lastnameRef.current?.value} / D.O.B.: ${dobRef.current?.value} / D.O.S.: ${dosRef.current?.value} / State: ${stateRef.current?.value} / ZipCode: ${zipCode.current?.value}`;
      console.log("yeaaaah ", result);
    }
    setIsError(true);
  };

  return (
    <section className="flex flex-col items-center justify-center ">
      <h2 className="pb-4 text-2xl font-bold">Create Employee</h2>
      <form id={formId}>
        <div className="flex flex-wrap justify-evenly">
          <div className="w-full  sm:m-4 sm:w-auto">
            <InputText
              name="First Name"
              reference={firstnameRef}
              pattern="[A-Za-zÀ-ÖØ-öø-ÿ _'-]{2,}"
              errorMessage="Enter 2 or more characters"
              isError={isError}
            />
            <InputText
              name="Last Name"
              reference={lastnameRef}
              pattern="[A-Za-zÀ-ÖØ-öø-ÿ _'-]{2,}"
              errorMessage="Enter 2 or more characters"
              isError={isError}
            />
            <InputDate
              name="Date of Birth"
              reference={dobRef}
              isError={isError}
            />
            <InputDate name="Start Date" reference={dosRef} isError={isError} />
            <InputSelect
              name="Departments"
              options={DEPARTMENTS}
              reference={departmentRef}
            />
          </div>
          <fieldset className="w-full border p-2 sm:m-4 sm:w-auto">
            <legend className="mb-4 px-2 font-bold">Adress</legend>
            <InputText
              name="Street"
              reference={streetRef}
              pattern="[A-Za-zÀ-ÖØ-öø-ÿ _'-]{2,}"
              errorMessage="Enter 2 or more characters"
              isError={isError}
            />
            <InputText
              name="City"
              reference={cityRef}
              pattern="[A-Za-zÀ-ÖØ-öø-ÿ _'-]{2,}"
              errorMessage="Enter 2 or more characters"
              isError={isError}
            />
            <InputSelect name="State" options={STATES} reference={stateRef} />
            <InputText
              name="Zip code"
              reference={zipCode}
              pattern="\d{5}"
              errorMessage="Enter a number of 5 characters"
              isError={isError}
            />
          </fieldset>
        </div>
      </form>
      <Button
        type="submit"
        form={formId}
        onClick={handleClick}
        className="mt-4 sm:mt-0"
      >
        Save
      </Button>
    </section>
  );
};

export default AddEmployeeForm;
