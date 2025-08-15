import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, ...props }: InputProps,
  ref
) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} ref={ref} />
    </div>
  );
});

export default Input;
