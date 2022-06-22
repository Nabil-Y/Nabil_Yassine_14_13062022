import React, { useRef, useState } from "react";
import InputDate from "../components/Inputs/InputDate";
import InputText from "../components/Inputs/InputText";
import Card from "../components/UI/Card";

/**
 * Home function
 * @returns Home page component
 */
const Home = () => {
  const [isError, setIsError] = useState(false);

  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const dobRef = useRef<HTMLInputElement>(null);
  const dosRef = useRef<HTMLInputElement>(null);

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const form = document.getElementById("addEmployeeForm") as HTMLFormElement;
    if (form.checkValidity()) {
      // do stuff
      const result = ` Name: ${firstnameRef.current?.value} ${lastnameRef.current?.value} / D.O.B.: ${dobRef.current?.value} / D.O.S.: ${dosRef.current?.value}`;
      console.log("yeaaaah ", result);
    }
    setIsError(true);
  };

  return (
    <main>
      <Card>
        <h1>HRnet</h1>
        <p>Link view employees</p>
        <h2>Create Employee</h2>
        <form id="addEmployeeForm">
          <InputText
            id="firstname"
            name="First Name"
            reference={firstnameRef}
            pattern="[A-Za-zÀ-ÖØ-öø-ÿ]{2,}"
            errorMessage="Enter 2 or more characters"
            isError={isError}
          />
          <InputText
            id="lastname"
            name="Last Name"
            reference={lastnameRef}
            pattern="[A-Za-zÀ-ÖØ-öø-ÿ]{2,}"
            errorMessage="Enter 2 or more characters"
            isError={isError}
          />
          <InputDate
            id="birthdate"
            name="Date of Birth"
            reference={dobRef}
            isError={isError}
          />
          <InputDate
            id="startdate"
            name="Start Date"
            reference={dosRef}
            isError={isError}
          />
        </form>
      </Card>
      <button form="addEmployeeForm" onClick={handleClick}>
        Submit
      </button>
    </main>
  );
};

export default Home;
