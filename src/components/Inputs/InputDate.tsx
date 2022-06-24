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
        className={`peer mt-1 block w-full border-2 outline-none valid:border-solid valid:border-green-700 ${
          isError ? "invalid:border-red-700" : ""
        }`}
      />
      <p
        className={
          isError
            ? "text-sm text-red-700 peer-valid:select-none peer-valid:opacity-0"
            : "select-none text-sm text-transparent"
        }
      >
        Choose a date with the date picker
      </p>
    </div>
  );
};

export default InputDate;
