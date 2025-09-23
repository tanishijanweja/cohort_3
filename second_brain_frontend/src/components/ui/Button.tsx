import type { ReactElement } from "react";

interface ButtonInterface {
  title: string;
  size: "sm" | "md" | "lg";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  variants: "primary" | "secondary";
}

const sizeStyles = {
  sm: "px-2 py-1 text-sm rounded-sm",
  md: "px-4 py-2 text-md rounded-md",
  lg: "px-6 py-3 text-lg rounded-xl",
};

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-400 text-purple-600",
};

export function Button(props: ButtonInterface) {
  return (
    <button
      className={sizeStyles[props.size] + " " + variantStyles[props.variants]}
    >
      <div className="flex items-center">
        {props.startIcon}
        <div className="pl-2 pr-2">{props.title}</div>
        {props.endIcon}
      </div>
    </button>
  );
}
