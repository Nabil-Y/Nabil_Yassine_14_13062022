import { useId } from "react";
import { ITextInput } from "../../types/types";

/**
 * InputText function
 * @param props Input Text properties
 * @returns Input Text component
 */
const InputText = (props: ITextInput) => {
  const { name, pattern, errorMessage, isError } = props;
  const id = useId();
  return (
    <div className="py-1">
      <label htmlFor={id} className="font-bold">
        {name}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        pattern={pattern}
        required
        className={`peer mt-1 block w-full border-2 outline-none valid:border-solid valid:border-valid ${
          isError ? "invalid:border-invalid" : ""
        }`}
      />

      <p
        className={
          isError
            ? "text-sm text-invalid peer-valid:select-none peer-valid:opacity-0 "
            : "select-none text-sm text-transparent"
        }
      >
        {errorMessage}
      </p>
    </div>
  );
};

export default InputText;
