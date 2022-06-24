import { useId } from "react";
import { ISelectInput } from "../../types/types";

/**
 * InputSelect function
 * @param props Input Select properties
 * @returns Input Select component
 */
const InputSelect = (props: ISelectInput) => {
  const { name, options } = props;
  const id = useId();

  return (
    <>
      <label htmlFor={id} className="block font-bold">
        {name}
      </label>
      <select
        name={name}
        id={id}
        className="mb-6 mt-1 w-full cursor-pointer p-2"
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
