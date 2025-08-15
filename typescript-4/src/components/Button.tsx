import { ComponentPropsWithoutRef } from "react";

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;
type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;
export const Button = (props: AnchorProps | ButtonProps) => {
  if (props.el === "anchor") {
    return (
      <p>
        <a className="button" {...props}></a>
      </p>
    );
  }

  return (
    <div>
      <button className="button" {...props}></button>
    </div>
  );
};
