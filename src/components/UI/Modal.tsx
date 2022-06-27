import { useEffect } from "react";
import ReactDOM from "react-dom";
import { IModal } from "../../types/types";
import Button from "./Button";
import Card from "./Card";

/**
 * Modal function
 * @param props Modal properties
 * @returns Modal wrapper component
 */
const Modal = (props: IModal) => {
  const { children, closeModal } = props;
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "modal");
  document.body.append(newDiv);

  useEffect(() => {
    window.addEventListener("keydown", closeModal);

    return () => {
      window.removeEventListener("keydown", closeModal);
      document.body.removeChild(document.getElementById("modal") as Element);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="absolute top-0 left-0 grid h-screen w-screen place-items-center">
      <div
        className="absolute top-0 left-0 h-screen w-screen cursor-pointer bg-black bg-opacity-30"
        onClick={closeModal}
      ></div>
      <Card className="opacity-1 relative m-auto overflow-visible">
        <Button
          type="button"
          className="absolute right-[-10%] top-[-20%] px-4 py-2 text-sm"
          onClick={closeModal}
        >
          X
        </Button>
        {children}
      </Card>
    </div>,
    newDiv
    // document.getElementById("modal") as Element
  );
};

export default Modal;
