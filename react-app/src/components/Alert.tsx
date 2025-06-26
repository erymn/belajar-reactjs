import type { ReactNode } from "react";

interface Props {
  //children: string;     // lempar parameter dengan string
  children: ReactNode; // lempar parameter dengan html context
}
const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};
export default Alert;
