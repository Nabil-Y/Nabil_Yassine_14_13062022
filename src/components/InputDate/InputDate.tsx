import { InputDate } from "../../types/types";

const InputDate = (props: InputDate) => {
  const { id, name, ref } = props;
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input type="date" id={id} name={name} ref={ref} required />

      <p className="">Please input a date with the date picker</p>
    </>
  );
};

export default InputDate;
