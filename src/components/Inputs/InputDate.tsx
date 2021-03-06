import { useId } from "react";
import { IDateInput } from "../../types/types";

/**
 * InputDate function
 * @param props Input Date properties
 * @returns Input Date component
 */
const InputDate = (props: IDateInput) => {
  const { name, isError } = props;
  const id = useId();
  return (
    <div className="py-1">
      <label htmlFor={id} className="font-bold">
        {name}
      </label>
      <input
        type="date"
        id={id}
        name={name}
        required
        className={`peer mt-1 block w-full border-2 outline-none valid:border-solid valid:border-valid ${
          isError ? "invalid:border-invalid" : ""
        }`}
      />
      {isError ? (
        <p className="text-sm text-invalid peer-valid:select-none peer-valid:opacity-0">
          Choose a date with the date picker
        </p>
      ) : (
        <p className="select-none text-sm text-transparent">
          Date Error Placeholder
        </p>
      )}
    </div>
  );
};

export default InputDate;
