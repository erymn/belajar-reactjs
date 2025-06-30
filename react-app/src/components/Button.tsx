import React from "react";

interface Props {
  children: string;
  //color?: string; // akan membuat color optional di App.tsx
  color?: "primary" | "secondary" | "danger"; //akan membatasi warna hanya pada 3 yang disebutkan
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
