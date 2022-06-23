import { useId } from "react";
import { ISelectInput } from "../../types/types";

const InputSelect = (props: ISelectInput) => {
  const { name, options, reference } = props;
  const id = useId();

  return (
    <>
      <label htmlFor={id} className="block font-bold">
        {name}
      </label>
      <select
        name={name}
        id={id}
        ref={reference}
        className="mb-6 mt-1 w-full p-2"
      >
        {options.map((item, index) => (
          <option key={item.name + index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default InputSelect;
