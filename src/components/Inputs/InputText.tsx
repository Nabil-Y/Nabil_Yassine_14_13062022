import { ITextInput } from "../../types/types";

const InputText = (props: ITextInput) => {
  const { id, name, reference, pattern, errorMessage, isError } = props;
  return (
    <div className="py-1">
      <label htmlFor={id} className="font-bold">
        {name}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        ref={reference}
        pattern={pattern}
        required
        className={`peer block border-2 outline-none valid:border-solid valid:border-green-700 ${
          isError ? "invalid:border-red-700" : ""
        }`}
      />

      <p
        className={
          isError
            ? "text-sm text-red-700 peer-valid:select-none peer-valid:opacity-0 "
            : "select-none text-sm text-transparent"
        }
      >
        {errorMessage}
      </p>
    </div>
  );
};

export default InputText;
