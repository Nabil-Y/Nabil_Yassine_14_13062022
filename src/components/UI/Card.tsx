import { ICard } from "../../types/types";

/**
 * Card function
 * @param props Card properties
 * @returns Card Wrapper Component
 */
const Card = (props: ICard) => {
  const { className, children } = props;
  const classes = `bg-white rounded overflow-hidden shadow p-6 mx-auto ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
