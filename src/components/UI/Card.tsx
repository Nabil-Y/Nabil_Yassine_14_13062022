import { ICard } from "../../types/types";

const Card = (props: ICard) => {
  const { className, children } = props;
  const classes = `bg-white rounded overflow-hidden shadow p-6 mx-auto ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
