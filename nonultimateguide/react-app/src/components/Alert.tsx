import type { ReactNode } from "react";

interface Props {
  //children: string;     // lempar parameter dengan string
  children: ReactNode; // lempar parameter dengan html context
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};
export default Alert;
