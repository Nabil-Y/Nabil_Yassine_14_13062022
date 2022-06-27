import { Ibutton } from "../../types/types";

/**
 * Button function
 * @param props Button properties
 * @returns Button wrapper component
 */
const Button = (props: Ibutton) => {
  const { onClick, children, className, type, form } = props;
  const baseClasses =
    "rounded-full bg-secondary font-bold uppercase text-white transition-all hover:bg-primary";
  return (
    <button
      form={form}
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
