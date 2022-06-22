import { InputText } from "../../types/types";

const InputText = (props: InputText) => {
  const { id, name, ref, pattern, errorMessage } = props;
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input
        type="text"
        id={id}
        name={name}
        ref={ref}
        pattern={pattern}
        required
      />
      <p className="">{errorMessage}</p>
    </>
  );
};

export default InputText;
